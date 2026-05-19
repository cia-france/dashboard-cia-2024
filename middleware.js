// =============================================================================
// CIA Dashboard - Middleware d'authentification
// Verifie le cookie cia_auth (signe HMAC-SHA256) avant de servir toute
// page protegee. Redirige vers /login.html si absent ou invalide.
// =============================================================================

export const config = {
  // Match tout SAUF les endpoints d'auth, la page login et les ressources
  // strictement publiques (favicon, robots.txt).
  // Les fichiers de donnees (.js avec CIA_DATA, rows, stagiaires...) restent
  // proteges car ils ne sont PAS exclus du matcher.
  matcher: [
    '/((?!api/login|api/logout|login\\.html|favicon\\.|robots\\.txt|sitemap).*)'
  ]
};

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
    if (!payload || !payload.email || !payload.exp) return null;
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

export default async function middleware(request) {
  const url = new URL(request.url);
  const secret = process.env.AUTH_SECRET;

  // Si la config est incomplete, on laisse passer (evite le lock-out total).
  // L'admin doit configurer AUTH_SECRET et AUTH_USERS dans Vercel.
  if (!secret) return;

  // Lire le cookie cia_auth
  const cookieHeader = request.headers.get('cookie') || '';
  const m = cookieHeader.match(/(?:^|;\s*)cia_auth=([^;]+)/);
  const token = m ? decodeURIComponent(m[1]) : null;

  const payload = await verifyToken(token, secret);
  if (payload) {
    // Authentifie : on laisse passer la requete
    return;
  }

  // Non authentifie : redirection vers /login.html avec ?next=URL d'origine
  const loginUrl = new URL('/login.html', url);
  const nextPath = url.pathname + url.search;
  if (nextPath && nextPath !== '/login.html') {
    loginUrl.searchParams.set('next', nextPath);
  }
  return Response.redirect(loginUrl.toString(), 302);
}
