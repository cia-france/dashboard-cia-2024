# Dashboard Interne CIA
## Centre International d'Antibes — Outil d'analyse commerciale

---

## Structure du projet

```
dashboard-cia-2024/
│
├── index.html              ← Page d'accueil (KPI globaux, accès années)
├── dashboard.html          ← Dashboard annuel (2023 ou 2024 via ?annee=XXXX)
├── comparaison.html        ← Comparaison entre deux années
├── data.js                 ← ⭐ FICHIER CENTRAL : toutes les données ici
│
├── CIA_2023_Dashboard.html ← Dashboard original 2023 (conservé intact)
└── CIA_2024_Dashboard.html ← Dashboard original 2024 (conservé intact)
```

---

## Règle absolue sur les données

> ❌ Ne jamais supprimer ni modifier les données existantes  
> ❌ Ne jamais inventer des chiffres  
> ✅ Toujours ajouter EN PLUS des données existantes

---

## Comment ajouter une nouvelle année (ex: 2025)

### Étape 1 — Ouvrir `data.js`

Chercher le bloc commenté :
```
// EMPLACEMENT RÉSERVÉ — DONNÉES 2025
```

### Étape 2 — Décommenter et remplir

Remplacer tous les `0` par les vraies valeurs de l'année :

```javascript
"2025": {
  meta: {
    annee: 2025,
    label: "Données 2025",
    couleur: "#44937d"       // couleur différente des autres années
  },
  kpi: {
    caTotalTTC:   12500000,  // CA total TTC annuel réel
    stagiaires:   10200,     // nombre total de stagiaires
    panierMoyen:  1225,      // CA / stagiaires
    dureeMoyenne: 1.6,       // durée moyenne en semaines
    venteDirect: { ca: 3800000, pct: 30.4, panier: 1650 }
  },
  mensuel: {
    labels: ["Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aoû","Sep","Oct","Nov","Déc"],
    ca:     [xxx, xxx, xxx, xxx, xxx, xxx, xxx, xxx, xxx, xxx, xxx, xxx]
  },
  segments: {
    juniors: { ca: xxx, stagiaires: xxx, panierMoyen: xxx, dureeMoyenne: x.x },
    groupes: { ca: xxx, stagiaires: xxx, panierMoyen: xxx, dureeMoyenne: x.x },
    adultes: { ca: xxx, stagiaires: xxx, panierMoyen: xxx, dureeMoyenne: x.x }
  },
  pays:         [ { n: "Pays", nb: 0, ca: 0 }, ... ],
  agences:      [ { n: "Agence", ca: 0 }, ... ],
  programmes:   [ { n: "Programme", nb: 0, pct: 0.0 }, ... ],
  crossSegPays: [ { p: "Pays", A: 0, J: 0, G: 0 }, ... ],
  ecoles:       [ ["Nom école", nb], ... ],
  profil: {
    genre:    { femmes: 0, hommes: 0 },
    tranches: [ { n: "12-15 ans", ca: 0 }, ... ],
    niveaux:  [ { n: "Élémentaire A1-A2", nb: 0 }, ... ]
  },
  insights: {
    profil: [ { icon: "👩", txt: "<b>Texte</b><br><span>Détail</span>" } ]
  }
},
```

### Étape 3 — Vérifier

- Ouvrir `index.html` → la carte 2025 doit apparaître automatiquement
- Ouvrir `comparaison.html` → 2025 doit être disponible dans les sélecteurs

### Étape 4 — Publier

```bash
git add data.js
git commit -m "feat: ajout données 2025"
git push origin main
```
→ Vercel redéploie automatiquement en ~30 secondes.

---

## Comment ajouter les ventes hebdomadaires

### Format d'une semaine

Dans `data.js`, dans le tableau `CIA_HEBDO`, ajouter :

```javascript
{
  semaine:    "2025-S20",       // identifiant unique : AAAA-SXX
  annee:      2025,
  numeroSem:  20,               // numéro de semaine ISO (1 à 53)
  dateDebut:  "2025-05-12",     // lundi
  dateFin:    "2025-05-18",     // dimanche
  ca:         185000,           // CA TTC de la semaine en euros
  ventes:     47,               // nombre de réservations
  stagiaires: 52,               // nombre de stagiaires concernés
  topPays:    [
    { n: "Allemagne", ca: 45000, nb: 12 },
    { n: "Italie",    ca: 38000, nb: 10 }
  ],
  topProg: [
    { n: "Château Juniors",  nb: 28 },
    { n: "Campus Horticole", nb: 14 }
  ],
  segments: {
    juniors: { ca: 95000, nb: 28 },
    groupes: { ca: 62000, nb: 18 },
    adultes: { ca: 28000, nb: 6  }
  }
},
```

### Règles importantes

- ⚠️ Ne jamais supprimer les semaines précédentes
- Toujours ajouter APRÈS la dernière semaine existante
- Le `numeroSem` doit être le numéro ISO officiel de la semaine
- Le `semaine` doit être unique (format strict `AAAA-SXX`, ex: `2025-S05` pour la semaine 5)

### Comparaisons disponibles automatiquement

| Comparaison | Calcul |
|---|---|
| Semaine N vs N-1 | `getSemaine("2025-S20")` vs `getSemaine("2025-S19")` |
| Semaine N vs même semaine N-1 | `getSemaine("2025-S20")` vs `getSemaine("2024-S20")` |
| Cumul année à S20 | `getCumulAnnee(2025, 20)` |
| Cumul N vs cumul N-1 | `getCumulAnnee(2025, 20)` vs `getCumulAnnee(2024, 20)` |

---

## Règle couleur d'évolution

| Évolution | Couleur | Signification |
|---|---|---|
| ≥ +5% | 🟢 Vert | Bonne performance |
| entre -5% et +5% | 🔵 Neutre | Stable |
| ≤ -5% | 🔴 Rouge | Baisse significative |

---

## Flux de mise à jour

```
1. Modifier data.js (ajouter année ou semaine)
2. git add data.js
3. git commit -m "description"
4. git push origin main
5. Vercel redéploie automatiquement (~30 sec)
6. Le site en ligne est à jour ✅
```

---

## Données présentes

| Année | Source | Statut |
|---|---|---|
| 2023 | `CIA_2023_Dashboard.html` | ✅ Intégré |
| 2024 | `CIA_2024_Dashboard.html` | ✅ Intégré |
| 2025 | À fournir par CIA | ⏳ En attente |
| 2026 | À fournir par CIA | ⏳ En attente |

---

*Dashboard CIA — Accès réservé — Usage interne uniquement*
