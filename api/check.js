// =============================================================================
// API /api/check - verifie le cookie cia_auth, repond 200 (OK) ou 401
// Appele depuis auth-check.js au chargement de chaque page
// =============================================================================

export const config = { runtime: 'edge' };

const TE = new TextEncoder();
const TD = new TextDecoder();

function b64urlToBytes(s) {
  s = s.replace(/-/g, '+').replace(/_/g, '/');
  while (s.length % 4) s += '=';
  const bin = atob(s);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

async function verifyToken(token, secret) {
  if (!token || typeof token !== 'string') return null;
  const parts = token.split('.');
  if (parts.length !== 2) return null;

  try {
    const payloadStr = TD.decode(b64urlToBytes(parts[0]));
    const sig = b64urlToBytes(parts[1]);
    const payload = JSON.parse(payloadStr);
    if (!payload || (!payload.u && !payload.email) || !payload.exp) return null;
    if (payload.exp < Date.now()) return null;

    const key = await crypto.subtle.importKey(
      'raw', TE.encode(secret),
      { name: 'HMAC', hash: 'SHA-256' }, false, ['verify']
    );
    const valid = await crypto.subtle.verify('HMAC', key, sig, TE.encode(parts[0]));
    if (!valid) return null;
    return payload;
  } catch (e) {
    return null;
  }
}

export default async function handler(request) {
  const secret = process.env.AUTH_SECRET;

  // Pas de secret configure : on autorise tout (evite le lock-out total)
  if (!secret) {
    return new Response(JSON.stringify({ ok: true, unprotected: true }), {
      status: 200,
      headers: { 'content-type': 'application/json', 'cache-control': 'no-store' }
    });
  }

  const cookies = request.headers.get('cookie') || '';
  const m = cookies.match(/(?:^|;\s*)cia_auth=([^;]+)/);
  const token = m ? decodeURIComponent(m[1]) : null;

  const payload = await verifyToken(token, secret);
  if (payload) {
    return new Response(JSON.stringify({ ok: true, u: payload.u || payload.email }), {
      status: 200,
      headers: { 'content-type': 'application/json', 'cache-control': 'no-store' }
    });
  }

  return new Response(JSON.stringify({ ok: false }), {
    status: 401,
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store' }
  });
}
