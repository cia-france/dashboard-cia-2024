// =============================================================================
// CIA Dashboard — Agregation a la volee pour le filtre periode libre
// Necessite que CIA_ROWS soit charge (lazy load).
// Retourne une structure compatible avec CIA_DATA[annee] pour que les
// fonctions de rendu existantes du dashboard fonctionnent telles quelles.
// =============================================================================

// Indexes des champs dans CIA_ROWS (cf rows.js)
const RI = { d:0, s:1, p:2, a:3, t:4, e:5, x:6, y:7, n:8, c:9, h:10 };

// Conversion Excel serial date <-> JS Date
function excelToDate(serial){
  // Excel 1900 epoch (avec le bug de 1900 considere comme bissextile)
  return new Date(Math.round((serial - 25569) * 86400 * 1000));
}
function dateToExcel(d){
  return Math.round(d.getTime() / 86400000 + 25569);
}
function ymdToExcel(ymd){
  // ymd au format "YYYY-MM-DD"
  var p = ymd.split('-');
  var d = new Date(Date.UTC(+p[0], +p[1] - 1, +p[2]));
  return dateToExcel(d);
}

// Classification niveau (court -> long) pour matcher l'affichage du profil
const NIVEAU_LABEL = {
  E: 'Élémentaire (A1,A2)',
  I: 'Intermédiaire (B1,B2)',
  D: 'Débutant (A0)',
  P: 'Pré A1',
  C: 'Avancé (C1)',
  X: 'Inconnu'
};

// Tranches d'age (matching CIA_DATA)
function ageRange(y){
  if (y === 0 || y == null) return null;
  if (y < 12)  return '< 12 ans';
  if (y <= 15) return '12-15 ans';
  if (y <= 17) return '16-17 ans';
  if (y <= 24) return '18-24 ans';
  if (y <= 39) return '25-39 ans';
  if (y <= 59) return '40-59 ans';
  return '60+ ans';
}

// Capitalisation des noms de pays (l'export Excel les a en majuscules)
function capCountry(s){
  if (!s) return '';
  return s.toLowerCase().split(' ').map(function(w){
    if (!w) return '';
    return w.charAt(0).toUpperCase() + w.slice(1);
  }).join(' ').replace(/-./g, function(m){ return '-' + m.charAt(1).toUpperCase(); });
}

// =============================================================================
// AGGREGATION : prend un filtre {fromExcel, toExcel} et renvoie une structure
// type CIA_DATA[year] pour les fonctions de rendu existantes.
// =============================================================================
function aggregateRange(fromYMD, toYMD, labelOverride){
  if (typeof CIA_ROWS === 'undefined') return null;

  var fromX = ymdToExcel(fromYMD);
  var toX   = ymdToExcel(toYMD);

  var totalCA = 0, totalNB = 0, totalSem = 0;
  var directCA = 0, directNB = 0;
  var segCA = { J:0, A:0, G:0, X:0 };
  var segNB = { J:0, A:0, G:0, X:0 };
  var segSem = { J:0, A:0, G:0, X:0 };
  var mensCA = [0,0,0,0,0,0,0,0,0,0,0,0];
  var paysCA = {}, paysNB = {};
  var agences = {};
  var programmes = {};
  var ecoles = {};
  var genre = { F:0, H:0 };
  var tranches = {};
  var niveaux = { E:0, I:0, D:0, P:0, C:0 };
  var crossSP = {}; // pays|segment

  var totalRowsInRange = 0;

  for (var i = 0; i < CIA_ROWS.length; i++) {
    var r = CIA_ROWS[i];
    var d = r[RI.d];
    if (d < fromX || d > toX) continue;

    totalRowsInRange++;
    var ttc = r[RI.t] || 0;
    var seg = r[RI.s] || 'X';
    var sem = r[RI.c] || 0;
    var pays = r[RI.p] || '';
    var agence = r[RI.a] || '';
    var ecole = r[RI.e] || '';
    var prog = r[RI.h] || '';
    var sx = r[RI.x] || '';
    var age = r[RI.y] || 0;
    var niv = r[RI.n] || 'X';

    totalCA += ttc;
    totalNB++;
    totalSem += sem;

    segCA[seg] += ttc;
    segNB[seg]++;
    segSem[seg] += sem;

    if (!agence) {
      directCA += ttc;
      directNB++;
    } else {
      agences[agence] = (agences[agence] || 0) + ttc;
    }

    // Mensuel : mois d'arrivee
    var date = excelToDate(d);
    var m = date.getUTCMonth();
    if (m >= 0 && m < 12) mensCA[m] += ttc;

    if (pays) {
      paysCA[pays] = (paysCA[pays] || 0) + ttc;
      paysNB[pays] = (paysNB[pays] || 0) + 1;
      var k = pays + '|' + seg;
      crossSP[k] = (crossSP[k] || 0) + ttc;
    }

    if (prog) {
      programmes[prog] = (programmes[prog] || 0) + 1;
    } else {
      programmes['Non renseigné'] = (programmes['Non renseigné'] || 0) + 1;
    }

    if (ecole) {
      ecoles[ecole] = (ecoles[ecole] || 0) + 1;
    }

    if (sx === 'F') genre.F++;
    else if (sx === 'H') genre.H++;

    var t = ageRange(age);
    if (t) tranches[t] = (tranches[t] || 0) + ttc;

    if (niveaux.hasOwnProperty(niv)) niveaux[niv]++;
  }

  if (totalRowsInRange === 0) return null;

  // Tri & format
  function topByCA(map, limit){
    return Object.keys(map).map(function(k){ return [k, map[k]]; })
      .sort(function(a,b){ return b[1] - a[1]; })
      .slice(0, limit);
  }

  var paysList = Object.keys(paysCA).map(function(p){
    return { n: capCountry(p), nb: paysNB[p], ca: Math.round(paysCA[p]) };
  }).sort(function(a,b){ return b.ca - a.ca; }).slice(0, 10);

  var agencesList = [{ n: 'Direct', ca: Math.round(directCA) }]
    .concat(Object.keys(agences).map(function(a){ return { n: a, ca: Math.round(agences[a]) }; }))
    .sort(function(a,b){ return b.ca - a.ca; })
    .slice(0, 10);

  var totalProgrammes = Object.values(programmes).reduce(function(a,b){return a+b;}, 0);
  var programmesList = topByCA(programmes, 8).map(function(e){
    return { n: e[0], nb: e[1], pct: totalProgrammes > 0 ? Math.round(e[1] / totalProgrammes * 100) : 0 };
  });

  var ecolesList = topByCA(ecoles, 10);  // [name, count]

  var tranchesOrder = ['< 12 ans','12-15 ans','16-17 ans','18-24 ans','25-39 ans','40-59 ans','60+ ans'];
  var tranchesList = tranchesOrder.filter(function(t){ return tranches[t]; })
    .map(function(t){ return { n: t, ca: Math.round(tranches[t]) }; })
    .sort(function(a,b){ return b.ca - a.ca; });

  var niveauxList = Object.keys(niveaux)
    .filter(function(k){ return niveaux[k] > 0; })
    .map(function(k){ return { n: NIVEAU_LABEL[k], nb: niveaux[k] }; })
    .sort(function(a,b){ return b.nb - a.nb; });

  // Top pays * segment
  var topPaysNames = paysList.slice(0, 8).map(function(p){
    // Retrouver le nom uppercase pour la cle crossSP
    return Object.keys(paysCA).find(function(k){ return capCountry(k) === p.n; }) || '';
  });
  var crossSPList = topPaysNames.filter(function(p){return p;}).map(function(p){
    return {
      p: capCountry(p),
      A: Math.round(crossSP[p + '|A'] || 0),
      J: Math.round(crossSP[p + '|J'] || 0),
      G: Math.round(crossSP[p + '|G'] || 0)
    };
  });

  return {
    meta: {
      annee: 0,
      label: labelOverride || ('Période ' + fromYMD + ' → ' + toYMD),
      couleur: '#7b5ea7'
    },
    kpi: {
      caTotalTTC: Math.round(totalCA),
      stagiaires: totalNB,
      panierMoyen: totalNB > 0 ? Math.round(totalCA / totalNB) : 0,
      dureeMoyenne: totalNB > 0 ? Math.round(totalSem / totalNB * 10) / 10 : 0,
      venteDirect: {
        ca: Math.round(directCA),
        pct: totalCA > 0 ? Math.round(directCA / totalCA * 1000) / 10 : 0,
        panier: directNB > 0 ? Math.round(directCA / directNB) : 0
      }
    },
    mensuel: {
      labels: ['Jan','Fév','Mar','Avr','Mai','Jun','Jul','Aoû','Sep','Oct','Nov','Déc'],
      ca: mensCA.map(function(v){ return Math.round(v); })
    },
    segments: {
      juniors: {
        ca: Math.round(segCA.J),
        stagiaires: segNB.J,
        panierMoyen: segNB.J > 0 ? Math.round(segCA.J / segNB.J) : 0,
        dureeMoyenne: segNB.J > 0 ? Math.round(segSem.J / segNB.J * 10) / 10 : 0
      },
      groupes: {
        ca: Math.round(segCA.G),
        stagiaires: segNB.G,
        panierMoyen: segNB.G > 0 ? Math.round(segCA.G / segNB.G) : 0,
        dureeMoyenne: segNB.G > 0 ? Math.round(segSem.G / segNB.G * 10) / 10 : 0
      },
      adultes: {
        ca: Math.round(segCA.A),
        stagiaires: segNB.A,
        panierMoyen: segNB.A > 0 ? Math.round(segCA.A / segNB.A) : 0,
        dureeMoyenne: segNB.A > 0 ? Math.round(segSem.A / segNB.A * 10) / 10 : 0
      }
    },
    pays: paysList,
    agences: agencesList,
    programmes: programmesList,
    profil: {
      genre: { femmes: genre.F, hommes: genre.H },
      tranches: tranchesList,
      niveaux: niveauxList
    },
    crossSegPays: crossSPList,
    ecoles: ecolesList,
    insights: {
      profil: [
        {
          icon: '👩',
          txt: '<b>' + (totalNB > 0 ? Math.round(genre.F / (genre.F + genre.H) * 100) : 0) + '% de femmes</b><br><span>Sur ' + (genre.F + genre.H) + ' stagiaires avec sexe renseigné.</span>'
        },
        {
          icon: '🎓',
          txt: '<b>Période ' + fromYMD + ' → ' + toYMD + '</b><br><span>' + totalNB.toLocaleString('fr-FR') + ' réservations sur la période.</span>'
        },
        {
          icon: '💼',
          txt: '<b>Vente directe : ' + (totalCA > 0 ? Math.round(directCA / totalCA * 100) : 0) + '% du CA</b><br><span>' + (Math.round(directCA / 1000)) + ' K€ en direct sur ' + Math.round(totalCA / 1000) + ' K€ total.</span>'
        },
        {
          icon: '📅',
          txt: '<b>Durée moyenne : ' + (totalNB > 0 ? (Math.round(totalSem / totalNB * 10) / 10) : 0) + ' sem</b><br><span>Panier moyen : ' + (totalNB > 0 ? Math.round(totalCA / totalNB) : 0) + ' €.</span>'
        }
      ]
    }
  };
}

// Chargement lazy de rows.js (retourne une promise qui resoud quand CIA_ROWS est dispo)
function loadRows(){
  return new Promise(function(resolve, reject){
    if (typeof CIA_ROWS !== 'undefined') { resolve(); return; }
    var s = document.createElement('script');
    s.src = 'rows.js';
    s.onload = function(){ resolve(); };
    s.onerror = function(){ reject(new Error('Impossible de charger rows.js')); };
    document.head.appendChild(s);
  });
}
