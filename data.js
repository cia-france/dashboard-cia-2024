/**
 * CIA — Centre International d'Antibes
 * Données centralisées multi-années
 * ─────────────────────────────────────────────────────
 * Pour ajouter une nouvelle année (ex: 2025) :
 *   1. Ajouter une entrée dans CIA_DATA avec la clé "2025"
 *   2. Remplir tous les champs selon la même structure
 *   3. Sauvegarder ce fichier
 * ─────────────────────────────────────────────────────
 */

const CIA_DATA = {

  "2023": {
    meta: {
      annee: 2023,
      label: "Données 2023",
      couleur: "#2d6a9f"
    },
    kpi: {
      caTotalTTC: 11199160,
      stagiaires: 10035,
      panierMoyen: 1116,
      dureeMoyenne: 1.5,
      venteDirect: { ca: 3272248, pct: 29.9, panier: 1471 }
    },
    mensuel: {
      labels: ["Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aoû","Sep","Oct","Nov","Déc"],
      ca:     [350040, 629134, 689399, 956992, 729488, 1260384, 3494234, 1216246, 798152, 783558, 287353, 4179]
    },
    segments: {
      juniors: { ca: 4973073, stagiaires: 2767, panierMoyen: 1797, dureeMoyenne: 1.8 },
      groupes: { ca: 4523770, stagiaires: 5805, panierMoyen: 779,  dureeMoyenne: 1.1 },
      adultes: { ca: 1702317, stagiaires: 1462, panierMoyen: 1164, dureeMoyenne: 2.4 }
    },
    pays: [
      { n: "Allemagne",    nb: 908,  ca: 1254956 },
      { n: "Italie",       nb: 1037, ca: 930138  },
      { n: "Suisse",       nb: 465,  ca: 787747  },
      { n: "Espagne",      nb: 362,  ca: 694446  },
      { n: "États-Unis",   nb: 373,  ca: 612533  },
      { n: "Royaume-Uni",  nb: 417,  ca: 517865  },
      { n: "Irlande",      nb: 206,  ca: 442524  },
      { n: "Suède",        nb: 174,  ca: 233620  },
      { n: "Autriche",     nb: 175,  ca: 214058  },
      { n: "France",       nb: 152,  ca: 147693  }
    ],
    agences: [
      { n: "Direct",          ca: 3272248 },
      { n: "ESL Séjours",     ca: 484403  },
      { n: "WorldStrides",    ca: 261433  },
      { n: "StudyLingua",     ca: 196176  },
      { n: "Tribe Study",     ca: 174552  },
      { n: "Thur Lingua",     ca: 170142  },
      { n: "Boa Lingua",      ca: 168168  },
      { n: "Castle's English",ca: 163159  },
      { n: "STS Education",   ca: 146436  },
      { n: "Linguista",       ca: 112150  }
    ],
    programmes: [
      { n: "Château Juniors",   nb: 5475, pct: 58.8 },
      { n: "Campus Horticole",  nb: 1532, pct: 16.5 },
      { n: "Château Adultes",   nb: 1384, pct: 14.9 },
      { n: "Leonardo da Vinci", nb: 518,  pct: 5.6  },
      { n: "Le Port Adultes",   nb: 398,  pct: 4.3  },
      { n: "Le Port Juniors",   nb: 14,   pct: 0.2  }
    ],
    profil: {
      genre: { femmes: 7112, hommes: 2920 },
      tranches: [
        { n: "12-15 ans", ca: 4369435 },
        { n: "16-17 ans", ca: 3912660 },
        { n: "18-24 ans", ca: 991154  },
        { n: "< 12 ans",  ca: 683708  },
        { n: "40-59 ans", ca: 556367  },
        { n: "25-39 ans", ca: 348467  },
        { n: "60+ ans",   ca: 337368  }
      ],
      niveaux: [
        { n: "Élémentaire A1-A2",   nb: 2198 },
        { n: "Intermédiaire B1-B2", nb: 786  },
        { n: "Débutant A0",         nb: 437  },
        { n: "Pré A1",              nb: 361  },
        { n: "Avancé C1",           nb: 38   }
      ]
    },
    crossSegPays: [
      { p: "Allemagne",   A: 399706, J: 829644, G: 25606  },
      { p: "Italie",      A: 114204, J: 337010, G: 478924 },
      { p: "Suisse",      A: 288839, J: 474974, G: 23934  },
      { p: "Espagne",     A: 30221,  J: 650978, G: 13248  },
      { p: "États-Unis",  A: 151736, J: 449829, G: 10968  },
      { p: "Royaume-Uni", A: 110451, J: 383152, G: 24262  },
      { p: "Irlande",     A: 31200,  J: 411266, G: 58     },
      { p: "Suède",       A: 60657,  J: 171736, G: 1228   }
    ],
    ecoles: [
      ["Lycée Montale", 103],
      ["Liceo Dante Alighieri", 95],
      ["Liceo Muratori San Carlo", 80],
      ["IIS Curie Vittorini", 77],
      ["Liceo Carducci (classico)", 77],
      ["Liceo Formiggini", 73],
      ["Istituto V. Cuoco", 72],
      ["Liceo Carducci (Bolzano)", 71],
      ["Liceo Da Vinci", 59],
      ["IC Divisione Julia", 59]
    ],
    insights: {
      profil: [
        { icon: "👩", txt: "<b>71% de femmes</b><br><span>Même répartition qu'en 2024</span>" },
        { icon: "🎓", txt: "<b>69% ont entre 12 et 17 ans</b><br><span>Cœur de cible mineurs — communication vers les parents</span>" },
        { icon: "📘", txt: "<b>Élémentaire A1-A2 dominant</b><br><span>2 198 stagiaires identifiés à ce niveau</span>" },
        { icon: "💼", txt: "<b>Vente directe = 29,9% du CA</b><br><span>3,3 M€ en direct, panier 1 471 €. Agences = 5,2 M€</span>" }
      ]
    }
  },

  "2024": {
    meta: {
      annee: 2024,
      label: "Données 2024",
      couleur: "#e8723a"
    },
    kpi: {
      caTotalTTC: 12836459,
      stagiaires: 9960,
      panierMoyen: 1289,
      dureeMoyenne: 1.6,
      venteDirect: { ca: 3914496, pct: 30.5, panier: 1706 }
    },
    mensuel: {
      labels: ["Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aoû","Sep","Oct","Nov","Déc"],
      ca:     [431086, 710562, 922673, 922048, 728652, 2507923, 2977065, 1306968, 1221324, 573111, 489780, 45266]
    },
    segments: {
      juniors: { ca: 5893558, stagiaires: 2854, panierMoyen: 2065, dureeMoyenne: 1.8 },
      groupes: { ca: 4908856, stagiaires: 5600, panierMoyen: 877,  dureeMoyenne: 1.0 },
      adultes: { ca: 2034045, stagiaires: 1505, panierMoyen: 1352, dureeMoyenne: 2.5 }
    },
    pays: [
      { n: "Italie",       nb: 1698, ca: 1674629 },
      { n: "Suisse",       nb: 704,  ca: 1277504 },
      { n: "Allemagne",    nb: 842,  ca: 1238252 },
      { n: "États-Unis",   nb: 548,  ca: 1041645 },
      { n: "Espagne",      nb: 366,  ca: 787750  },
      { n: "Royaume-Uni",  nb: 503,  ca: 651184  },
      { n: "Irlande",      nb: 246,  ca: 609190  },
      { n: "Turquie",      nb: 169,  ca: 425151  },
      { n: "Suède",        nb: 157,  ca: 220782  },
      { n: "Autriche",     nb: 136,  ca: 190213  }
    ],
    agences: [
      { n: "Direct",       ca: 3914496 },
      { n: "ESL Séjours",  ca: 459746  },
      { n: "Tribe Study",  ca: 331655  },
      { n: "Boa Lingua",   ca: 276788  },
      { n: "WorldStrides", ca: 223043  },
      { n: "Thur Lingua",  ca: 209507  },
      { n: "Linguista",    ca: 203858  },
      { n: "StudyLingua",  ca: 197278  },
      { n: "Juvigo",       ca: 137339  },
      { n: "Apple Lang.",  ca: 119924  }
    ],
    programmes: [
      { n: "Château Juniors",   nb: 5862, pct: 62.3 },
      { n: "Château Adultes",   nb: 1588, pct: 16.9 },
      { n: "Campus Horticole",  nb: 1281, pct: 13.6 },
      { n: "Leonardo da Vinci", nb: 508,  pct: 5.4  },
      { n: "Le Port Adultes",   nb: 136,  pct: 1.4  },
      { n: "Le Port Juniors",   nb: 20,   pct: 0.2  }
    ],
    profil: {
      genre: { femmes: 7073, hommes: 2884 },
      tranches: [
        { n: "12-15 ans", ca: 5252291 },
        { n: "16-17 ans", ca: 4530485 },
        { n: "18-24 ans", ca: 1144669 },
        { n: "< 12 ans",  ca: 608972  },
        { n: "40-59 ans", ca: 532875  },
        { n: "25-39 ans", ca: 415099  },
        { n: "60+ ans",   ca: 352068  }
      ],
      niveaux: [
        { n: "Élémentaire A1-A2",   nb: 2417 },
        { n: "Intermédiaire B1-B2", nb: 730  },
        { n: "Pré A1",              nb: 437  },
        { n: "Débutant A0",         nb: 368  },
        { n: "Avancé C1",           nb: 21   }
      ]
    },
    crossSegPays: [
      { p: "Italie",       A: 118905, J: 398568, G: 1157155 },
      { p: "Suisse",       A: 508826, J: 554306, G: 214372  },
      { p: "Allemagne",    A: 350908, J: 800135, G: 87209   },
      { p: "États-Unis",   A: 242711, J: 653564, G: 145370  },
      { p: "Espagne",      A: 59565,  J: 720294, G: 7892    },
      { p: "Royaume-Uni",  A: 135321, J: 349663, G: 166200  },
      { p: "Irlande",      A: 19810,  J: 589379, G: 0       },
      { p: "Turquie",      A: 3300,   J: 350276, G: 71575   }
    ],
    ecoles: [
      ["Godolphin & Latymer",    116],
      ["Scuola Intl. Spinelli",  103],
      ["Liceo Muratori",          88],
      ["Liceo Carducci",          86],
      ["Liceo Pascoli",           79],
      ["Liceo Dante Alighieri",   78],
      ["Liceo Buratti",           78],
      ["IIS Curie Vittorini",     75],
      ["Lycée Montale",           71],
      ["Liceo Nolfi Apolloni",    67]
    ],
    insights: {
      profil: [
        { icon: "👩", txt: "<b>71% de femmes</b><br><span>Dominance féminine très marquée, surtout chez les adultes</span>" },
        { icon: "🎓", txt: "<b>76% ont entre 12 et 17 ans</b><br><span>Le cœur de cible reste les mineurs — s'adresser aux parents</span>" },
        { icon: "📘", txt: "<b>Élémentaire A1-A2 = profil dominant</b><br><span>Débutants et faux-débutants. Adapter le discours : pas de jargon FLE</span>" },
        { icon: "💼", txt: "<b>Vente directe = 30,5% du CA</b><br><span>3,9 M€ en direct, panier le plus élevé (1 706 €). Levier SEO/SEA critique</span>" }
      ]
    }
  }

  // ─── AJOUTER 2025 ICI ───────────────────────────────────
  // "2025": {
  //   meta: { annee: 2025, label: "Données 2025", couleur: "#44937d" },
  //   kpi: { caTotalTTC: 0, stagiaires: 0, panierMoyen: 0, dureeMoyenne: 0,
  //          venteDirect: { ca: 0, pct: 0, panier: 0 } },
  //   mensuel: { labels: [...], ca: [...] },
  //   segments: { juniors: {...}, groupes: {...}, adultes: {...} },
  //   pays: [...], agences: [...], programmes: [...], profil: {...}, crossSegPays: [...]
  // }

};

// ─── Couleur d'évolution (règle CIA) ─────────────────────────────────────────
function getEvolutionColor(pct) {
  if (pct >= 5)  return "green";
  if (pct <= -5) return "red";
  return "neutral";
}

// ─── Helpers globaux ─────────────────────────────────────────────────────────
const fmt    = v => new Intl.NumberFormat('fr-FR').format(Math.round(v));
const fmtK   = v => v >= 1e6 ? (v/1e6).toFixed(1)+' M€' : v >= 1e3 ? Math.round(v/1e3)+' K€' : v+' €';
const fmtPct = v => (v > 0 ? "+" : "") + v.toFixed(1) + "%";
const calcEvo = (current, prev) => prev === 0 ? 0 : ((current - prev) / Math.abs(prev)) * 100;
const anneesDisponibles = () => Object.keys(CIA_DATA).sort((a,b) => b - a);
