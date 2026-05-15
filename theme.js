// =============================================================================
// CIA Dashboard — Gestion du thème clair / sombre
// Persistance dans localStorage (clé "cia-theme") · valeurs : "dark" | "light"
// Le thème est appliqué AVANT le rendu pour éviter le flash.
// =============================================================================

(function(){
  const STORAGE_KEY = 'cia-theme';

  // Lecture du thème sauvegardé (sombre par défaut)
  function getTheme(){
    try { return localStorage.getItem(STORAGE_KEY) || 'dark'; }
    catch(e){ return 'dark'; }
  }
  function setTheme(t){
    try { localStorage.setItem(STORAGE_KEY, t); } catch(e){}
    if (t === 'light') document.body.setAttribute('data-theme','light');
    else document.body.removeAttribute('data-theme');
    updateButton(t);
  }
  function updateButton(t){
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      const icon  = btn.querySelector('.tt-icon');
      const label = btn.querySelector('.tt-label');
      if (t === 'light') {
        if (icon)  icon.textContent  = '🌙';
        if (label) label.textContent = 'Sombre';
        btn.setAttribute('title','Passer en mode sombre');
      } else {
        if (icon)  icon.textContent  = '☀️';
        if (label) label.textContent = 'Clair';
        btn.setAttribute('title','Passer en mode clair');
      }
    });
  }
  function toggle(){
    setTheme(getTheme() === 'light' ? 'dark' : 'light');
  }

  // Appliquer immédiatement (avant DOMContentLoaded si possible)
  function applyEarly(){
    const t = getTheme();
    if (document.body) {
      if (t === 'light') document.body.setAttribute('data-theme','light');
    }
  }
  applyEarly();

  // Une fois le DOM prêt : initialiser les boutons
  document.addEventListener('DOMContentLoaded', () => {
    applyEarly();
    document.querySelectorAll('.theme-toggle').forEach(btn => {
      btn.addEventListener('click', toggle);
    });
    updateButton(getTheme());
  });

  // Exposer en global pour debug éventuel
  window.CIATheme = { get: getTheme, set: setTheme, toggle };
})();
