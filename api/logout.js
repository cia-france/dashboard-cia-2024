// =============================================================================
// API /api/logout - supprime le cookie d'auth
// =============================================================================

export const config = { runtime: 'edge' };

export default async function handler(request) {
  const cookie = 'cia_auth=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0';

  // Accept GET or POST (lien depuis sidebar = GET)
  return new Response(null, {
    status: 302,
    headers: {
      'set-cookie': cookie,
      'location': '/login.html?logout=1'
    }
  });
}
