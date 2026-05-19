// =============================================================================
// CIA Dashboard - Auth check (cote client, charge en TETE de chaque page)
// Verifie via /api/check si l'utilisateur a un cookie cia_auth valide.
// Si non, redirige vers /login.html avec retour automatique apres login.
// =============================================================================

(function(){
  // Pas de check si on est deja sur la page de login
  if (location.pathname === '/login.html' || location.pathname === '/login') return;

  // Masque le contenu pendant la verif pour eviter le flash de contenu sensible
  var styleId = '__auth_hide_style';
  if (!document.getElementById(styleId)) {
    var s = document.createElement('style');
    s.id = styleId;
    s.textContent = 'html{visibility:hidden}';
    (document.head || document.documentElement).appendChild(s);
  }

  function reveal(){
    var s = document.getElementById(styleId);
    if (s) s.parentNode.removeChild(s);
  }

  function redirectToLogin(){
    var next = encodeURIComponent(location.pathname + location.search);
    location.replace('/login.html?next=' + next);
  }

  fetch('/api/check', { credentials: 'same-origin', cache: 'no-store' })
    .then(function(res){
      if (res.ok) {
        // Authentifie : on affiche la page
        reveal();
      } else {
        // 401 ou autre : redirection
        redirectToLogin();
      }
    })
    .catch(function(err){
      // Erreur reseau : on affiche pour ne pas bloquer (mais log)
      console.error('Auth check failed:', err);
      reveal();
    });
})();
