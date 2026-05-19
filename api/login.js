// =============================================================================
// API /api/login - validation des identifiants + creation du cookie
// =============================================================================
//
// ENV VARS REQUISES dans Vercel :
//   AUTH_SECRET : chaine aleatoire de 32+ caracteres (signature HMAC)
//   AUTH_USERS  : liste des comptes au format
//                 "identifiant1:password1,identifiant2:password2"
//
// L'identifiant est insensible a la casse (stocke en lowercase).
// Le mot de passe est sensible a la casse, peut contenir des ':' mais
// PAS de virgule (les virgules separent les utilisateurs).
//
// Exemple :
//   AUTH_USERS = "direction:CIAdirection2026!,admin:CIAadmin2026!,assistant:CIAassistant2026!"

export const config = { runtime: 'edge' };

const TE = new TextEncoder();

function bytesToB64url(bytes) {
  let s = '';
  const arr = new Uint8Array(bytes);
  for (let i = 0; i < arr.length; i++) s += String.fromCharCode(arr[i]);
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

async function signPayload(payloadObj, secret) {
  const payloadStr = JSON.stringify(payloadObj);
  const payloadB64 = bytesToB64url(TE.encode(payloadStr));
  const key = await crypto.subtle.importKey(
    'raw', TE.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']
  );
  const sigBuf = await crypto.subtle.sign('HMAC', key, TE.encode(payloadB64));
  return payloadB64 + '.' + bytesToB64url(sigBuf);
}

function parseUsers(str) {
  if (!str) return [];
  return str.split(',').map(part => {
    const idx = part.indexOf(':');
    if (idx === -1) return null;
    return {
      id: part.slice(0, idx).trim().toLowerCase(),
      password: part.slice(idx + 1).trim()
    };
  }).filter(Boolean);
}

function isSafeRedirectPath(p) {
  // Doit etre un chemin local commencant par '/' mais pas '//' (eviter open-redirect)
  if (!p || typeof p !== 'string') return false;
  if (!p.startsWith('/')) return false;
  if (p.startsWith('//')) return false;
  return true;
}

export default async function handler(request) {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const ct = request.headers.get('content-type') || '';
  let username = '', password = '', next = '/';

  try {
    if (ct.includes('application/json')) {
      const body = await request.json();
      // Accepte les anciens noms de champ par compatibilite (username, email, id)
      username = String(body.username || body.email || body.id || '').toLowerCase().trim();
      password = String(body.password || '');
      next = String(body.next || '/');
    } else {
      const form = await request.formData();
      username = String(form.get('username') || form.get('email') || form.get('id') || '').toLowerCase().trim();
      password = String(form.get('password') || '');
      next = String(form.get('next') || '/');
    }
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: 'Requête invalide' }), {
      status: 400,
      headers: { 'content-type': 'application/json' }
    });
  }

  if (!isSafeRedirectPath(next)) next = '/';

  const users = parseUsers(process.env.AUTH_USERS || '');
  const user = users.find(u => u.id === username && u.password === password);

  if (!user) {
    return new Response(JSON.stringify({ ok: false, error: 'Identifiant ou mot de passe incorrect' }), {
      status: 401,
      headers: { 'content-type': 'application/json' }
    });
  }

  const secret = process.env.AUTH_SECRET;
  if (!secret) {
    return new Response(JSON.stringify({ ok: false, error: 'AUTH_SECRET non configuré côté serveur' }), {
      status: 500,
      headers: { 'content-type': 'application/json' }
    });
  }

  // Token valable 30 jours
  const exp = Date.now() + 30 * 24 * 3600 * 1000;
  const token = await signPayload({ u: user.id, exp }, secret);

  const maxAgeSec = 30 * 24 * 3600;
  const cookie = [
    'cia_auth=' + encodeURIComponent(token),
    'Path=/',
    'HttpOnly',
    'Secure',
    'SameSite=Lax',
    'Max-Age=' + maxAgeSec
  ].join('; ');

  return new Response(JSON.stringify({ ok: true, next }), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'set-cookie': cookie
    }
  });
}
