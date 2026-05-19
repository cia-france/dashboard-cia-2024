// =============================================================================
// CIA Dashboard — Logique du menu mobile
// Cree le bouton hamburger et le backdrop si absents, gere ouverture/fermeture.
// =============================================================================

(function(){
  var ICON_OPEN  = '<svg viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
  var ICON_CLOSE = '<svg viewBox="0 0 24 24"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>';

  function close(){ document.body.classList.remove('menu-open'); updateIcon(false); }
  function open(){  document.body.classList.add('menu-open');    updateIcon(true);  }
  function isOpen(){ return document.body.classList.contains('menu-open'); }
  function toggle(){ isOpen() ? close() : open(); }

  function updateIcon(opened){
    var btn = document.querySelector('.menu-toggle');
    if (btn) btn.innerHTML = opened ? ICON_CLOSE : ICON_OPEN;
  }

  function init(){
    // 1) Bouton hamburger : on l'injecte au debut du topbar s'il n'existe pas deja
    var topbar = document.querySelector('.topbar');
    if (!topbar) return;

    var btn = topbar.querySelector('.menu-toggle');
    if (!btn) {
      btn = document.createElement('button');
      btn.className = 'menu-toggle';
      btn.type = 'button';
      btn.setAttribute('aria-label','Ouvrir le menu');
      btn.innerHTML = ICON_OPEN;
      // L'inserer dans le 1er bloc du topbar.
      // On wrap les enfants existants pour qu'ils restent empiles verticalement
      // une fois que le bloc parent passe en flex (sur mobile).
      var leftBlock = topbar.firstElementChild;
      if (leftBlock) {
        var titleWrap = document.createElement('div');
        titleWrap.className = 'topbar-title-wrap';
        while (leftBlock.firstChild) titleWrap.appendChild(leftBlock.firstChild);
        leftBlock.appendChild(titleWrap);
        leftBlock.insertBefore(btn, titleWrap);
      } else {
        topbar.insertBefore(btn, topbar.firstChild);
      }
    }

    // 2) Backdrop
    var backdrop = document.querySelector('.menu-backdrop');
    if (!backdrop) {
      backdrop = document.createElement('div');
      backdrop.className = 'menu-backdrop';
      document.body.appendChild(backdrop);
    }

    // 3) Wiring
    btn.addEventListener('click', toggle);
    backdrop.addEventListener('click', close);

    // Fermer le menu quand on clique sur un lien interne de la sidebar
    document.querySelectorAll('.sidebar a').forEach(function(a){
      a.addEventListener('click', function(){
        // Si c'est une ancre (#kpis, #flux...) ou page actuelle, fermer immediatement
        // Sinon le navigateur va naviguer et la nouvelle page chargera proprement
        setTimeout(close, 50);
      });
    });

    // Fermer avec la touche Echap
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape' && isOpen()) close();
    });

    // Reset si on repasse en desktop pendant que le menu est ouvert
    window.addEventListener('resize', function(){
      if (window.innerWidth > 900 && isOpen()) close();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
