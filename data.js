// =============================================================================
// CIA — Centre International d'Antibes
// Fichier de données centralisé — data.js
// =============================================================================
// Ce fichier contient TOUTES les données utilisées par le dashboard.
// Il est chargé par : index.html, dashboard.html, comparaison.html
//
// DONNÉES PRÉSENTES :
//   - 2023 : données complètes extraites de CIA_2023_Dashboard.html
//   - 2024 : données complètes extraites de CIA_2024_Dashboard.html
//
// RÈGLE ABSOLUE :
//   ❌ Ne jamais supprimer ni modifier les données existantes
//   ❌ Ne jamais inventer des chiffres
//   ✅ Toujours ajouter de nouvelles données EN PLUS des existantes
// =============================================================================


// =============================================================================
// COMMENT AJOUTER UNE NOUVELLE ANNÉE (ex: 2025 ou 2026)
// =============================================================================
// 1. Copier le bloc complet d'une année existante (ex: le bloc "2024" ci-dessous)
// 2. Changer la clé : "2024" → "2025"
// 3. Remplacer TOUS les chiffres par les données réelles de la nouvelle année
// 4. Ne laisser aucune valeur à 0 ou fictive
// 5. Choisir une couleur distincte dans meta.couleur
// 6. Sauvegarder data.js → le dashboard détecte l'année automatiquement
// 7. Faire un git push → le site en ligne se met à jour
//
// ⚠️ Ne jamais écraser ni modifier les années 2023 et 2024 déjà présentes.
// =============================================================================

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
  },

  // ===========================================================================
  // DONNÉES 2025 — Extraites du fichier 2025_data.xlsx
  // ===========================================================================
  "2025": {
    meta: {
      annee: 2025,
      label: "Données 2025",
      couleur: "#44937d"
    },
    kpi: {
      caTotalTTC: 13222835,
      stagiaires: 10298,
      panierMoyen: 1284,
      dureeMoyenne: 1.6,
      venteDirect: { ca: 5026550, pct: 38, panier: 1823 }
    },
    mensuel: {
      labels: ["Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aoû","Sep","Oct","Nov","Déc"],
      ca: [225614, 749289, 1063884, 1285191, 602935, 2806109, 3295415, 1830355, 695732, 381322, 250870, 36120]
    },
    segments: {
      juniors: { ca: 6759346, stagiaires: 3254, panierMoyen: 2077, dureeMoyenne: 1.8 },
      groupes: { ca: 4216027, stagiaires: 5324, panierMoyen: 792, dureeMoyenne: 1.2 },
      adultes: { ca: 2247463, stagiaires: 1719, panierMoyen: 1307, dureeMoyenne: 2.3 }
    },
    pays: [
      { n: "ITALIE", nb: 3448, ca: 2555278 },
      { n: "SUISSE", nb: 870, ca: 1373152 },
      { n: "ALLEMAGNE", nb: 969, ca: 1339238 },
      { n: "ETATS-UNIS", nb: 662, ca: 1244388 },
      { n: "IRLANDE", nb: 438, ca: 903606 },
      { n: "ROYAUME-UNI", nb: 688, ca: 875582 },
      { n: "TURQUIE", nb: 307, ca: 768447 },
      { n: "ESPAGNE", nb: 370, ca: 762479 },
      { n: "SUEDE", nb: 178, ca: 263793 },
      { n: "AUTRICHE", nb: 187, ca: 258885 }
    ],
    agences: [
      { n: "Direct", ca: 5026550 },
      { n: "ESL SEJOURS LINGUISTIQUES", ca: 406942 },
      { n: "TRIBE STUDY ABROAD", ca: 368921 },
      { n: "THUR LINGUA AG ST GALLEN", ca: 255130 },
      { n: "APPLE LANGUAGES COURSES LTD", ca: 213761 },
      { n: "BOA LINGUA", ca: 204495 },
      { n: "STUDYLINGUA AG", ca: 169314 },
      { n: "WORLDSTRIDES", ca: 167405 },
      { n: "FULIA LANGUAGE TRAINING ABROAD", ca: 166186 },
      { n: "LINGUISTA SPRACHAUFENTHALTE ZURICH", ca: 154044 }
    ],
    programmes: [
      { n: "Non renseigné", nb: 5440, pct: 53 },
      { n: "RESIDENCE CASTEL STANDARD ROOM", nb: 891, pct: 9 },
      { n: "CAMPUS HORTICOLE", nb: 824, pct: 8 },
      { n: "RESIDENCE ARAGON STUDIO", nb: 580, pct: 6 },
      { n: "RESIDENCE ASTOR", nb: 512, pct: 5 },
      { n: "CANNES CARNOT", nb: 437, pct: 4 }
    ],
    crossSegPays: [
      { p: "ITALIE", A: 136521, J: 354910, G: 2063847 },
      { p: "SUISSE", A: 398970, J: 546701, G: 427482 },
      { p: "ALLEMAGNE", A: 411754, J: 840566, G: 86917 },
      { p: "ETATS-UNIS", A: 319611, J: 660718, G: 264060 },
      { p: "IRLANDE", A: 41399, J: 827167, G: 35040 },
      { p: "ROYAUME-UNI", A: 150227, J: 540014, G: 185341 },
      { p: "TURQUIE", A: 10977, J: 627137, G: 130334 },
      { p: "ESPAGNE", A: 45850, J: 677458, G: 39170 },
      { p: "SUEDE", A: 143413, J: 120380, G: 0 },
      { p: "AUTRICHE", A: 54479, J: 170955, G: 33450 }
    ],
    ecoles: [
      ["ECOLE CENTRALE DE BUCAREST", 100],
      ["MARIE CURIE TRADATE", 87],
      ["CHARLES DARWIN RIVOLI", 83],
      ["WINTERTHUR - CASTLE'S", 80],
      ["CURIE VITTORINI", 75],
      ["FALCON GIRLS", 69],
      ["FREZZI", 69],
      ["CARDUCCI FERRARA", 61],
      ["KBZ ST GALLEN - THURLINGUA", 58],
      ["MANZONI DE LATINA", 58]
    ],
    profil: {
      genre: { femmes: 7096, hommes: 3201 },
      tranches: [
        { n: "12-15 ans", ca: 5202457 },
        { n: "16-17 ans", ca: 4765082 },
        { n: "18-24 ans", ca: 905422 },
        { n: "< 12 ans", ca: 822072 },
        { n: "40-59 ans", ca: 656501 },
        { n: "25-39 ans", ca: 411896 },
        { n: "60+ ans", ca: 459405 }
      ],
      niveaux: [
        { n: "Élémentaire (A1,A2)", nb: 2171 },
        { n: "Intermédiaire (B1,B2)", nb: 759 },
        { n: "Débutant (A0)", nb: 333 },
        { n: "Pré A1", nb: 204 },
        { n: "Avancé (C1)", nb: 20 }
      ]
    },
    insights: {
      profil: [
        { icon: "👩", txt: "<b>69% de femmes</b><br><span>Dominance féminine toujours marquée (7096 vs 3201).</span>" },
        { icon: "🎓", txt: "<b>Fort CA sur les mineurs</b><br><span>Plus de 9,9 M€ sur les 12-17 ans.</span>" },
        { icon: "📘", txt: "<b>Niveaux débutants majoritaires</b><br><span>A1/A2 sont les niveaux les plus représentés (2171).</span>" },
        { icon: "💼", txt: "<b>Vente directe = 38% du CA</b><br><span>Forte progression de la vente directe avec 5 M€ (panier moyen: 1 823 €).</span>" }
      ]
    }
  },

  // ===========================================================================
  // DONNÉES 2026 — Extraites du fichier 2026 DATA.xlsx
  // Données partielles (saison en cours) — bookings enregistrés à date
  // ===========================================================================
  "2026": {
    meta: {
      annee: 2026,
      label: "Données 2026 (en cours)",
      couleur: "#a259c7"
    },
    kpi: {
      caTotalTTC: 9539176,
      stagiaires: 7363,
      panierMoyen: 1296,
      dureeMoyenne: 1.5,
      venteDirect: { ca: 4837402, pct: 50.7, panier: 1296 }
    },
    mensuel: {
      labels: ["Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aoû","Sep","Oct","Nov","Déc"],
      ca: [381933, 700173, 1213547, 1041479, 963899, 1892970, 2384704, 724976, 181171, 52285, 2040, 0]
    },
    segments: {
      juniors: { ca: 5086106, stagiaires: 2261, panierMoyen: 2249, dureeMoyenne: 1.9 },
      groupes: { ca: 2979812, stagiaires: 4029, panierMoyen: 740,  dureeMoyenne: 1.1 },
      adultes: { ca: 1473259, stagiaires: 1073, panierMoyen: 1373, dureeMoyenne: 2.2 }
    },
    pays: [
      { n: "SUISSE",       nb: 432, ca: 859094 },
      { n: "ALLEMAGNE",    nb: 551, ca: 825764 },
      { n: "IRLANDE",      nb: 341, ca: 758274 },
      { n: "ETATS-UNIS",   nb: 348, ca: 685555 },
      { n: "ESPAGNE",      nb: 254, ca: 647052 },
      { n: "TURQUIE",      nb: 209, ca: 554954 },
      { n: "ITALIE",       nb: 441, ca: 471447 },
      { n: "ROYAUME-UNI",  nb: 282, ca: 453946 },
      { n: "SUEDE",        nb: 127, ca: 203438 },
      { n: "AUTRICHE",     nb: 124, ca: 186078 }
    ],
    agences: [
      { n: "Direct",                              ca: 4837402 },
      { n: "TRIBE STUDY ABROAD",                  ca: 437993  },
      { n: "ESL SEJOURS LINGUISTIQUES",           ca: 284470  },
      { n: "FORMULE DE LANGUE",                   ca: 169985  },
      { n: "LINGUISTA SPRACHAUFENTHALTE ZURICH",  ca: 167946  },
      { n: "BOA LINGUA",                          ca: 155635  },
      { n: "STUDYLINGUA AG",                      ca: 136715  },
      { n: "THUR LINGUA AG ST GALLEN",            ca: 128948  },
      { n: "WORLDSTRIDES",                        ca: 109695  },
      { n: "APPLE LANGUAGES COURSES LTD",         ca: 102588  }
    ],
    programmes: [
      { n: "Non renseigné",                  nb: 1284, pct: 17 },
      { n: "RESIDENCE CASTEL STANDARD ROOM", nb: 818,  pct: 11 },
      { n: "RESIDENCE ASTOR",                nb: 720,  pct: 10 },
      { n: "CAMPUS HORTICOLE",               nb: 552,  pct: 7  },
      { n: "RESIDENCE ARAGON STUDIO",        nb: 504,  pct: 7  },
      { n: "RESIDENCE CASTEL STUDIO",        nb: 382,  pct: 5  }
    ],
    crossSegPays: [
      { p: "SUISSE",      A: 358559, J: 491078, G: 9456   },
      { p: "ALLEMAGNE",   A: 296087, J: 521677, G: 8000   },
      { p: "IRLANDE",     A: 39508,  J: 709017, G: 9750   },
      { p: "ETATS-UNIS",  A: 180194, J: 473476, G: 31885  },
      { p: "ESPAGNE",     A: 26711,  J: 620341, G: 0      },
      { p: "TURQUIE",     A: 7469,   J: 540975, G: 6510   },
      { p: "ITALIE",      A: 47228,  J: 270842, G: 153376 },
      { p: "ROYAUME-UNI", A: 94783,  J: 345563, G: 13600  },
      { p: "SUEDE",       A: 70831,  J: 132607, G: 0      },
      { p: "AUTRICHE",    A: 16126,  J: 147047, G: 22904  }
    ],
    ecoles: [
      ["LICEO L.A. MURATORI - SAN CARLO",                              88],
      ["SCUOLA INTL A SPINELLI",                                        87],
      ["IIS F. SELMI",                                                  85],
      ["IIS CURIE VITTORINI",                                           79],
      ["ISTITUTO DEL SACRO CUORE",                                      64],
      ["LICEO STATALE AUGUSTO MONTI",                                   63],
      ["LICEO CHARLES DARWIN",                                          62],
      ["INSTITUTO TECNOLOGICO Y DE ESTUDIOS SUPERIORES DE MONTERREY",   60],
      ["THE GODOLPHIN AND LATYMER SCHOOL",                              60],
      ["LICEO STATALE CARDUCCI DI FERRARA",                             60]
    ],
    profil: {
      genre: { femmes: 5168, hommes: 2195 },
      tranches: [
        { n: "16-17 ans", ca: 4036393 },
        { n: "12-15 ans", ca: 3429519 },
        { n: "18-24 ans", ca: 563035  },
        { n: "40-59 ans", ca: 445024  },
        { n: "< 12 ans",  ca: 438575  },
        { n: "60+ ans",   ca: 413803  },
        { n: "25-39 ans", ca: 167021  }
      ],
      niveaux: [
        { n: "Élémentaire (A1,A2)",   nb: 1247 },
        { n: "Intermédiaire (B1,B2)", nb: 479  },
        { n: "Débutant (A0)",         nb: 126  },
        { n: "Avancé (C1)",           nb: 15   },
        { n: "Pré A1",                nb: 5    }
      ]
    },
    insights: {
      profil: [
        { icon: "👩", txt: "<b>70% de femmes</b><br><span>Répartition stable (5 168 vs 2 195).</span>" },
        { icon: "🎓", txt: "<b>78% du CA sur les 12-17 ans</b><br><span>Cœur de cible mineurs : 7,5 M€ sur cette tranche.</span>" },
        { icon: "📘", txt: "<b>Élémentaire A1-A2 dominant</b><br><span>1 247 stagiaires identifiés à ce niveau (hors « Inconnu »).</span>" },
        { icon: "💼", txt: "<b>Vente directe = 50,7% du CA</b><br><span>4,8 M€ en direct sur 9,5 M€ — saison partielle, les agences saisissent au fil de l'eau.</span>" }
      ]
    }
  }

};

// =============================================================================
// RÈGLE COULEUR D'ÉVOLUTION — Règle CIA (s'applique partout dans le dashboard)
// =============================================================================
// +5% ou plus  → vert  (bonne performance)
// entre -5% et +5% → neutre/bleu (stable)
// -5% ou moins → rouge (baisse significative)
// =============================================================================
function getEvolutionColor(pct) {
  if (pct >= 5)  return "green";
  if (pct <= -5) return "red";
  return "neutral";
}

// ─── Helpers globaux (ne pas modifier) ───────────────────────────────────────
const fmt    = v => new Intl.NumberFormat('fr-FR').format(Math.round(v));
const fmtK   = v => v >= 1e6 ? (v/1e6).toFixed(1)+' M€' : v >= 1e3 ? Math.round(v/1e3)+' K€' : v+' €';
const fmtPct = v => (v > 0 ? "+" : "") + v.toFixed(1) + "%";
const calcEvo = (current, prev) => prev === 0 ? 0 : ((current - prev) / Math.abs(prev)) * 100;
const anneesDisponibles = () => Object.keys(CIA_DATA).sort((a,b) => b - a);


// =============================================================================
// SUIVI HEBDOMADAIRE — Structure préparée (à activer quand les données arrivent)
// =============================================================================
// Chaque semaine, CIA fournit les ventes de la semaine écoulée.
// Ces données alimenteront une future page "Suivi hebdomadaire".
//
// COMMENT AJOUTER LES VENTES HEBDOMADAIRES :
// 1. Identifier la semaine (ex: "2025-S20" = année 2025, semaine 20)
// 2. Ajouter un objet dans le tableau CIA_HEBDO ci-dessous
// 3. Respecter exactement le même format que les semaines existantes
// 4. Ne jamais supprimer les semaines précédentes (elles servent aux comparaisons)
// 5. Faire un git push → le site se met à jour automatiquement
//
// COMPARAISONS DISPONIBLES UNE FOIS LES DONNÉES REMPLIES :
//   • CA semaine N  vs  CA semaine N-1  (évolution semaine précédente)
//   • CA semaine N  vs  même semaine de l'année précédente
//   • Cumul depuis début d'année  vs  cumul même période année précédente
//
// STRUCTURE D'UNE SEMAINE :
//   {
//     semaine:    "2025-S20",      // identifiant unique : AAAA-SXX
//     annee:      2025,            // année
//     numeroSem:  20,              // numéro de semaine ISO
//     dateDebut:  "2025-05-12",    // lundi de la semaine
//     dateFin:    "2025-05-18",    // dimanche de la semaine
//     ca:         0,               // CA TTC de la semaine
//     ventes:     0,               // nombre de réservations/ventes
//     stagiaires: 0,               // nombre de stagiaires concernés
//     topPays:    [],              // ex: [{n:"Allemagne", ca:0, nb:0}]
//     topProg:    [],              // ex: [{n:"Château Juniors", nb:0}]
//     segments: {
//       juniors: { ca: 0, nb: 0 },
//       groupes: { ca: 0, nb: 0 },
//       adultes: { ca: 0, nb: 0 }
//     }
//   }
// =============================================================================

const CIA_HEBDO = [

  // ===========================================================================
  // VENTES HEBDOMADAIRES — À REMPLIR AU FUR ET À MESURE
  // ===========================================================================
  // Exemple (décommenter et remplir avec les vraies données) :
  //
  // {
  //   semaine:    "2025-S01",
  //   annee:      2025,
  //   numeroSem:  1,
  //   dateDebut:  "2025-01-06",
  //   dateFin:    "2025-01-12",
  //   ca:         0,
  //   ventes:     0,
  //   stagiaires: 0,
  //   topPays:    [ /* {n:"Pays", ca:0, nb:0} */ ],
  //   topProg:    [ /* {n:"Programme", nb:0} */ ],
  //   segments:   { juniors:{ca:0,nb:0}, groupes:{ca:0,nb:0}, adultes:{ca:0,nb:0} }
  // },

];

// Helpers hebdomadaires (actifs une fois CIA_HEBDO rempli)
const getSemaine = id => CIA_HEBDO.find(s => s.semaine === id);
const getSemainesAnnee = annee => CIA_HEBDO.filter(s => s.annee === annee).sort((a,b) => a.numeroSem - b.numeroSem);
const getCumulAnnee = (annee, jusquaSemaine) =>
  getSemainesAnnee(annee)
    .filter(s => s.numeroSem <= jusquaSemaine)
    .reduce((sum, s) => sum + s.ca, 0);
