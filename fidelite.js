// =============================================================================
// CIA Dashboard â€” Donnees Fidelite (genere automatiquement)
// Genere par : generate_fidelite_js.ps1
// Source : Excel files 2023-2026 dans Downloads
// Segments : J = Juniors (Cours 1 Ecole contient JUNIORS),
//            A = Adultes (Cours 1 Ecole contient ADULTES),
//            all = tous segments confondus
// =============================================================================

const CIA_FIDELITE = {
    "years":  [
                  2023,
                  2024,
                  2025,
                  2026
              ],
    "segments":  {
                     "J":  {
                               "topDepensiers":  [
                                                     {
                                                         "y":  [
                                                                   2024,
                                                                   2025,
                                                                   2026
                                                               ],
                                                         "s":  "Juniors",
                                                         "ca":  24752,
                                                         "nb":  3,
                                                         "n":  "GARCIA NAVA Isabella"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2026
                                                               ],
                                                         "s":  "Juniors",
                                                         "ca":  22750,
                                                         "nb":  1,
                                                         "n":  "WORLEY Natalie"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2023,
                                                                   2024,
                                                                   2025,
                                                                   2026
                                                               ],
                                                         "s":  "Juniors",
                                                         "ca":  16451,
                                                         "nb":  5,
                                                         "n":  "PLASONIG Hannah"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2024,
                                                                   2025,
                                                                   2026
                                                               ],
                                                         "s":  "Juniors",
                                                         "ca":  14126,
                                                         "nb":  3,
                                                         "n":  "MARQUEZ DE PRADO VELA Jaime"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2023,
                                                                   2024,
                                                                   2025,
                                                                   2026
                                                               ],
                                                         "s":  "Juniors",
                                                         "ca":  13880,
                                                         "nb":  4,
                                                         "n":  "WETTERSAND Louise"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2023,
                                                                   2024,
                                                                   2025,
                                                                   2026
                                                               ],
                                                         "s":  "Juniors",
                                                         "ca":  13768,
                                                         "nb":  4,
                                                         "n":  "REY FERNANDEZ Olivia"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2023,
                                                                   2024,
                                                                   2025,
                                                                   2026
                                                               ],
                                                         "s":  "Juniors",
                                                         "ca":  13444,
                                                         "nb":  4,
                                                         "n":  "CIBIC MOSS Una"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2023,
                                                                   2024,
                                                                   2025
                                                               ],
                                                         "s":  "Juniors",
                                                         "ca":  13172,
                                                         "nb":  3,
                                                         "n":  "QUESADA ARRUZA Belen"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2023,
                                                                   2024,
                                                                   2025,
                                                                   2026
                                                               ],
                                                         "s":  "Juniors",
                                                         "ca":  12968,
                                                         "nb":  4,
                                                         "n":  "SAINZ SANCHEZ-URBINA Regina"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2023,
                                                                   2024,
                                                                   2025,
                                                                   2026
                                                               ],
                                                         "s":  "Juniors",
                                                         "ca":  12968,
                                                         "nb":  4,
                                                         "n":  "REY FERNANDEZ Valentina"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2023,
                                                                   2024,
                                                                   2025
                                                               ],
                                                         "s":  "Juniors",
                                                         "ca":  12686,
                                                         "nb":  3,
                                                         "n":  "SOLOMON Asher"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2023,
                                                                   2024,
                                                                   2025,
                                                                   2026
                                                               ],
                                                         "s":  "Juniors",
                                                         "ca":  12360,
                                                         "nb":  4,
                                                         "n":  "REUVEN Eva"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2023,
                                                                   2024,
                                                                   2025,
                                                                   2026
                                                               ],
                                                         "s":  "Juniors",
                                                         "ca":  12061,
                                                         "nb":  4,
                                                         "n":  "CETINIC Olivia"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2023,
                                                                   2024,
                                                                   2025
                                                               ],
                                                         "s":  "Juniors",
                                                         "ca":  11583,
                                                         "nb":  3,
                                                         "n":  "BAMLANGO Anne"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2023,
                                                                   2024,
                                                                   2025,
                                                                   2026
                                                               ],
                                                         "s":  "Juniors",
                                                         "ca":  11513,
                                                         "nb":  4,
                                                         "n":  "WAGNER Devon Victoria"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2023,
                                                                   2024,
                                                                   2025,
                                                                   2026
                                                               ],
                                                         "s":  "Juniors",
                                                         "ca":  11412,
                                                         "nb":  4,
                                                         "n":  "SPANRUNFT My-Marie"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2023,
                                                                   2024,
                                                                   2025,
                                                                   2026
                                                               ],
                                                         "s":  "Juniors",
                                                         "ca":  11356,
                                                         "nb":  4,
                                                         "n":  "ROATTA Olimpia"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2025,
                                                                   2026
                                                               ],
                                                         "s":  "Juniors",
                                                         "ca":  11324,
                                                         "nb":  2,
                                                         "n":  "PAGLAYAN Raffi"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2024,
                                                                   2025,
                                                                   2026
                                                               ],
                                                         "s":  "Juniors",
                                                         "ca":  11222,
                                                         "nb":  3,
                                                         "n":  "LOPEZ VILCHES Delfina"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2025,
                                                                   2026
                                                               ],
                                                         "s":  "Juniors",
                                                         "ca":  10985,
                                                         "nb":  2,
                                                         "n":  "CABEZA QUILES Pablo"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2023,
                                                                   2024,
                                                                   2025,
                                                                   2026
                                                               ],
                                                         "s":  "Juniors",
                                                         "ca":  10895,
                                                         "nb":  5,
                                                         "n":  "ILIESCU-SANDNER Camil"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2024,
                                                                   2025,
                                                                   2026
                                                               ],
                                                         "s":  "Juniors",
                                                         "ca":  10689,
                                                         "nb":  3,
                                                         "n":  "DE MARTINO Paolo"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2023,
                                                                   2024,
                                                                   2025,
                                                                   2026
                                                               ],
                                                         "s":  "Juniors",
                                                         "ca":  10480,
                                                         "nb":  4,
                                                         "n":  "SAYER Eytan"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2024,
                                                                   2025,
                                                                   2026
                                                               ],
                                                         "s":  "Juniors",
                                                         "ca":  10235,
                                                         "nb":  3,
                                                         "n":  "DE KOK Bjoke"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2024,
                                                                   2025,
                                                                   2026
                                                               ],
                                                         "s":  "Juniors",
                                                         "ca":  10188,
                                                         "nb":  3,
                                                         "n":  "KASSYMOVA Tamila"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2024,
                                                                   2025
                                                               ],
                                                         "s":  "Juniors",
                                                         "ca":  10185,
                                                         "nb":  2,
                                                         "n":  "KUBAT Beliz Sevinc"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2023,
                                                                   2024,
                                                                   2025
                                                               ],
                                                         "s":  "Juniors",
                                                         "ca":  10140,
                                                         "nb":  3,
                                                         "n":  "SAYER Carla"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2024
                                                               ],
                                                         "s":  "Juniors",
                                                         "ca":  10050,
                                                         "nb":  1,
                                                         "n":  "SZABADI Oliver"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2023,
                                                                   2024
                                                               ],
                                                         "s":  "Juniors",
                                                         "ca":  10042,
                                                         "nb":  4,
                                                         "n":  "FLEETWOOD Maiah"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2024,
                                                                   2025,
                                                                   2026
                                                               ],
                                                         "s":  "Juniors",
                                                         "ca":  9884,
                                                         "nb":  3,
                                                         "n":  "RIGGS Mikayla"
                                                     }
                                                 ],
                               "totalUnique":  17636,
                               "perYear":  {
                                               "2023":  {
                                                            "new":  5403,
                                                            "ca":  5588613,
                                                            "returning":  0,
                                                            "total":  5403
                                                        },
                                               "2025":  {
                                                            "new":  2402,
                                                            "ca":  4601781,
                                                            "returning":  248,
                                                            "total":  2650
                                                        },
                                               "2024":  {
                                                            "new":  5590,
                                                            "ca":  7017672,
                                                            "returning":  176,
                                                            "total":  5766
                                                        },
                                               "2026":  {
                                                            "new":  4241,
                                                            "ca":  5563574,
                                                            "returning":  218,
                                                            "total":  4459
                                                        }
                                           },
                               "nbFideles":  532,
                               "topFideles":  [
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Juniors",
                                                      "ca":  16451,
                                                      "nb":  5,
                                                      "n":  "PLASONIG Hannah"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Juniors",
                                                      "ca":  13880,
                                                      "nb":  4,
                                                      "n":  "WETTERSAND Louise"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Juniors",
                                                      "ca":  13768,
                                                      "nb":  4,
                                                      "n":  "REY FERNANDEZ Olivia"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Juniors",
                                                      "ca":  13444,
                                                      "nb":  4,
                                                      "n":  "CIBIC MOSS Una"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Juniors",
                                                      "ca":  12968,
                                                      "nb":  4,
                                                      "n":  "REY FERNANDEZ Valentina"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Juniors",
                                                      "ca":  12968,
                                                      "nb":  4,
                                                      "n":  "SAINZ SANCHEZ-URBINA Regina"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Juniors",
                                                      "ca":  12360,
                                                      "nb":  4,
                                                      "n":  "REUVEN Eva"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Juniors",
                                                      "ca":  12061,
                                                      "nb":  4,
                                                      "n":  "CETINIC Olivia"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Juniors",
                                                      "ca":  11513,
                                                      "nb":  4,
                                                      "n":  "WAGNER Devon Victoria"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Juniors",
                                                      "ca":  11412,
                                                      "nb":  4,
                                                      "n":  "SPANRUNFT My-Marie"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Juniors",
                                                      "ca":  11356,
                                                      "nb":  4,
                                                      "n":  "ROATTA Olimpia"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Juniors",
                                                      "ca":  10895,
                                                      "nb":  5,
                                                      "n":  "ILIESCU-SANDNER Camil"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Juniors",
                                                      "ca":  10480,
                                                      "nb":  4,
                                                      "n":  "SAYER Eytan"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Juniors",
                                                      "ca":  7190,
                                                      "nb":  4,
                                                      "n":  "TORNOW Philipp Oskar"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Juniors",
                                                      "ca":  6840,
                                                      "nb":  4,
                                                      "n":  "BISANZ Anton"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Juniors",
                                                      "ca":  5896,
                                                      "nb":  4,
                                                      "n":  "UNLUONEY Beren"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Juniors",
                                                      "ca":  3516,
                                                      "nb":  4,
                                                      "n":  "BLOTNI Leony"
                                                  },
                                                  {
                                                      "y":  [
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Juniors",
                                                      "ca":  24752,
                                                      "nb":  3,
                                                      "n":  "GARCIA NAVA Isabella"
                                                  },
                                                  {
                                                      "y":  [
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Juniors",
                                                      "ca":  14126,
                                                      "nb":  3,
                                                      "n":  "MARQUEZ DE PRADO VELA Jaime"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025
                                                            ],
                                                      "s":  "Juniors",
                                                      "ca":  13172,
                                                      "nb":  3,
                                                      "n":  "QUESADA ARRUZA Belen"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025
                                                            ],
                                                      "s":  "Juniors",
                                                      "ca":  12686,
                                                      "nb":  3,
                                                      "n":  "SOLOMON Asher"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025
                                                            ],
                                                      "s":  "Juniors",
                                                      "ca":  11583,
                                                      "nb":  3,
                                                      "n":  "BAMLANGO Anne"
                                                  },
                                                  {
                                                      "y":  [
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Juniors",
                                                      "ca":  11222,
                                                      "nb":  3,
                                                      "n":  "LOPEZ VILCHES Delfina"
                                                  },
                                                  {
                                                      "y":  [
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Juniors",
                                                      "ca":  10689,
                                                      "nb":  3,
                                                      "n":  "DE MARTINO Paolo"
                                                  },
                                                  {
                                                      "y":  [
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Juniors",
                                                      "ca":  10235,
                                                      "nb":  3,
                                                      "n":  "DE KOK Bjoke"
                                                  },
                                                  {
                                                      "y":  [
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Juniors",
                                                      "ca":  10188,
                                                      "nb":  3,
                                                      "n":  "KASSYMOVA Tamila"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025
                                                            ],
                                                      "s":  "Juniors",
                                                      "ca":  10140,
                                                      "nb":  3,
                                                      "n":  "SAYER Carla"
                                                  },
                                                  {
                                                      "y":  [
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Juniors",
                                                      "ca":  9884,
                                                      "nb":  3,
                                                      "n":  "RIGGS Mikayla"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Juniors",
                                                      "ca":  9390,
                                                      "nb":  3,
                                                      "n":  "WINDHAGER Michael Konstantin"
                                                  },
                                                  {
                                                      "y":  [
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Juniors",
                                                      "ca":  9320,
                                                      "nb":  3,
                                                      "n":  "SEVIK BARUH Eytan Selim"
                                                  }
                                              ],
                               "tauxFidelite":  3,
                               "flows":  {
                                             "2023-\u003e2024":  176,
                                             "2024-\u003e2025":  223,
                                             "2025-\u003e2026":  175
                                         }
                           },
                     "all":  {
                                 "topDepensiers":  [
                                                       {
                                                           "y":  [
                                                                     2023,
                                                                     2024
                                                                 ],
                                                           "s":  "Adultes",
                                                           "ca":  27970,
                                                           "nb":  2,
                                                           "n":  "VON ALLMEN Alina"
                                                       },
                                                       {
                                                           "y":  [
                                                                     2024,
                                                                     2025,
                                                                     2026
                                                                 ],
                                                           "s":  "Juniors",
                                                           "ca":  24752,
                                                           "nb":  3,
                                                           "n":  "GARCIA NAVA Isabella"
                                                       },
                                                       {
                                                           "y":  [
                                                                     2026
                                                                 ],
                                                           "s":  "Juniors",
                                                           "ca":  22750,
                                                           "nb":  1,
                                                           "n":  "WORLEY Natalie"
                                                       },
                                                       {
                                                           "y":  [
                                                                     2026
                                                                 ],
                                                           "s":  "Adultes",
                                                           "ca":  17372,
                                                           "nb":  1,
                                                           "n":  "BOSS Nico Lion"
                                                       },
                                                       {
                                                           "y":  [
                                                                     2023,
                                                                     2024,
                                                                     2025,
                                                                     2026
                                                                 ],
                                                           "s":  "Juniors",
                                                           "ca":  16451,
                                                           "nb":  5,
                                                           "n":  "PLASONIG Hannah"
                                                       },
                                                       {
                                                           "y":  [
                                                                     2024
                                                                 ],
                                                           "s":  "Adultes",
                                                           "ca":  15457,
                                                           "nb":  1,
                                                           "n":  "BERNHARDT Alexa"
                                                       },
                                                       {
                                                           "y":  [
                                                                     2024,
                                                                     2025,
                                                                     2026
                                                                 ],
                                                           "s":  "Juniors",
                                                           "ca":  14126,
                                                           "nb":  3,
                                                           "n":  "MARQUEZ DE PRADO VELA Jaime"
                                                       },
                                                       {
                                                           "y":  [
                                                                     2023,
                                                                     2024,
                                                                     2025,
                                                                     2026
                                                                 ],
                                                           "s":  "Juniors",
                                                           "ca":  13880,
                                                           "nb":  4,
                                                           "n":  "WETTERSAND Louise"
                                                       },
                                                       {
                                                           "y":  [
                                                                     2023,
                                                                     2024,
                                                                     2025,
                                                                     2026
                                                                 ],
                                                           "s":  "Juniors",
                                                           "ca":  13768,
                                                           "nb":  4,
                                                           "n":  "REY FERNANDEZ Olivia"
                                                       },
                                                       {
                                                           "y":  [
                                                                     2023,
                                                                     2024
                                                                 ],
                                                           "s":  "Adultes",
                                                           "ca":  13688,
                                                           "nb":  4,
                                                           "n":  "RUEGG Jael"
                                                       },
                                                       {
                                                           "y":  [
                                                                     2023,
                                                                     2024,
                                                                     2025,
                                                                     2026
                                                                 ],
                                                           "s":  "Juniors",
                                                           "ca":  13444,
                                                           "nb":  4,
                                                           "n":  "CIBIC MOSS Una"
                                                       },
                                                       {
                                                           "y":  [
                                                                     2023,
                                                                     2024,
                                                                     2025
                                                                 ],
                                                           "s":  "Juniors",
                                                           "ca":  13172,
                                                           "nb":  3,
                                                           "n":  "QUESADA ARRUZA Belen"
                                                       },
                                                       {
                                                           "y":  [
                                                                     2023,
                                                                     2024,
                                                                     2025,
                                                                     2026
                                                                 ],
                                                           "s":  "Juniors",
                                                           "ca":  12968,
                                                           "nb":  4,
                                                           "n":  "SAINZ SANCHEZ-URBINA Regina"
                                                       },
                                                       {
                                                           "y":  [
                                                                     2023,
                                                                     2024,
                                                                     2025,
                                                                     2026
                                                                 ],
                                                           "s":  "Juniors",
                                                           "ca":  12968,
                                                           "nb":  4,
                                                           "n":  "REY FERNANDEZ Valentina"
                                                       },
                                                       {
                                                           "y":  [
                                                                     2023,
                                                                     2025
                                                                 ],
                                                           "s":  "Adultes",
                                                           "ca":  12942,
                                                           "nb":  3,
                                                           "n":  "KAHLISCH Julia"
                                                       },
                                                       {
                                                           "y":  [
                                                                     2023,
                                                                     2024,
                                                                     2025
                                                                 ],
                                                           "s":  "Juniors",
                                                           "ca":  12686,
                                                           "nb":  3,
                                                           "n":  "SOLOMON Asher"
                                                       },
                                                       {
                                                           "y":  [
                                                                     2023,
                                                                     2024,
                                                                     2025
                                                                 ],
                                                           "s":  "â€”",
                                                           "ca":  12468,
                                                           "nb":  5,
                                                           "n":  "RUF Elisabeth"
                                                       },
                                                       {
                                                           "y":  [
                                                                     2023,
                                                                     2024,
                                                                     2025,
                                                                     2026
                                                                 ],
                                                           "s":  "Juniors",
                                                           "ca":  12360,
                                                           "nb":  4,
                                                           "n":  "REUVEN Eva"
                                                       },
                                                       {
                                                           "y":  [
                                                                     2023,
                                                                     2024,
                                                                     2025
                                                                 ],
                                                           "s":  "Adultes",
                                                           "ca":  12264,
                                                           "nb":  9,
                                                           "n":  "WITOSZYNSKYJ Eleonore"
                                                       },
                                                       {
                                                           "y":  [
                                                                     2025
                                                                 ],
                                                           "s":  "Adultes",
                                                           "ca":  12100,
                                                           "nb":  1,
                                                           "n":  "SCHALLER Carrie"
                                                       },
                                                       {
                                                           "y":  [
                                                                     2023,
                                                                     2024,
                                                                     2025,
                                                                     2026
                                                                 ],
                                                           "s":  "Juniors",
                                                           "ca":  12061,
                                                           "nb":  4,
                                                           "n":  "CETINIC Olivia"
                                                       },
                                                       {
                                                           "y":  [
                                                                     2023,
                                                                     2024,
                                                                     2025
                                                                 ],
                                                           "s":  "â€”",
                                                           "ca":  11586,
                                                           "nb":  5,
                                                           "n":  "RUEHLE Gustav"
                                                       },
                                                       {
                                                           "y":  [
                                                                     2023,
                                                                     2024,
                                                                     2025
                                                                 ],
                                                           "s":  "Juniors",
                                                           "ca":  11583,
                                                           "nb":  3,
                                                           "n":  "BAMLANGO Anne"
                                                       },
                                                       {
                                                           "y":  [
                                                                     2023,
                                                                     2024,
                                                                     2025,
                                                                     2026
                                                                 ],
                                                           "s":  "Juniors",
                                                           "ca":  11513,
                                                           "nb":  4,
                                                           "n":  "WAGNER Devon Victoria"
                                                       },
                                                       {
                                                           "y":  [
                                                                     2023,
                                                                     2024,
                                                                     2025,
                                                                     2026
                                                                 ],
                                                           "s":  "Juniors",
                                                           "ca":  11412,
                                                           "nb":  4,
                                                           "n":  "SPANRUNFT My-Marie"
                                                       },
                                                       {
                                                           "y":  [
                                                                     2023,
                                                                     2024,
                                                                     2025,
                                                                     2026
                                                                 ],
                                                           "s":  "Juniors",
                                                           "ca":  11356,
                                                           "nb":  4,
                                                           "n":  "ROATTA Olimpia"
                                                       },
                                                       {
                                                           "y":  [
                                                                     2025,
                                                                     2026
                                                                 ],
                                                           "s":  "Juniors",
                                                           "ca":  11324,
                                                           "nb":  2,
                                                           "n":  "PAGLAYAN Raffi"
                                                       },
                                                       {
                                                           "y":  [
                                                                     2024,
                                                                     2025,
                                                                     2026
                                                                 ],
                                                           "s":  "â€”",
                                                           "ca":  11294,
                                                           "nb":  3,
                                                           "n":  "CASTRO Nicolas"
                                                       },
                                                       {
                                                           "y":  [
                                                                     2024,
                                                                     2025,
                                                                     2026
                                                                 ],
                                                           "s":  "Juniors",
                                                           "ca":  11222,
                                                           "nb":  3,
                                                           "n":  "LOPEZ VILCHES Delfina"
                                                       },
                                                       {
                                                           "y":  [
                                                                     2025,
                                                                     2026
                                                                 ],
                                                           "s":  "Adultes",
                                                           "ca":  11204,
                                                           "nb":  2,
                                                           "n":  "SMITH Keith"
                                                       }
                                                   ],
                                 "totalUnique":  34979,
                                 "perYear":  {
                                                 "2023":  {
                                                              "new":  9835,
                                                              "ca":  11196190,
                                                              "returning":  0,
                                                              "total":  9835
                                                          },
                                                 "2025":  {
                                                              "new":  9315,
                                                              "ca":  13281145,
                                                              "returning":  806,
                                                              "total":  10121
                                                          },
                                                 "2024":  {
                                                              "new":  9176,
                                                              "ca":  12777251,
                                                              "returning":  580,
                                                              "total":  9756
                                                          },
                                                 "2026":  {
                                                              "new":  6653,
                                                              "ca":  9539176,
                                                              "returning":  614,
                                                              "total":  7267
                                                          }
                                             },
                                 "nbFideles":  1677,
                                 "topFideles":  [
                                                    {
                                                        "y":  [
                                                                  2023,
                                                                  2024,
                                                                  2025,
                                                                  2026
                                                              ],
                                                        "s":  "Juniors",
                                                        "ca":  16451,
                                                        "nb":  5,
                                                        "n":  "PLASONIG Hannah"
                                                    },
                                                    {
                                                        "y":  [
                                                                  2023,
                                                                  2024,
                                                                  2025,
                                                                  2026
                                                              ],
                                                        "s":  "Juniors",
                                                        "ca":  13880,
                                                        "nb":  4,
                                                        "n":  "WETTERSAND Louise"
                                                    },
                                                    {
                                                        "y":  [
                                                                  2023,
                                                                  2024,
                                                                  2025,
                                                                  2026
                                                              ],
                                                        "s":  "Juniors",
                                                        "ca":  13768,
                                                        "nb":  4,
                                                        "n":  "REY FERNANDEZ Olivia"
                                                    },
                                                    {
                                                        "y":  [
                                                                  2023,
                                                                  2024,
                                                                  2025,
                                                                  2026
                                                              ],
                                                        "s":  "Juniors",
                                                        "ca":  13444,
                                                        "nb":  4,
                                                        "n":  "CIBIC MOSS Una"
                                                    },
                                                    {
                                                        "y":  [
                                                                  2023,
                                                                  2024,
                                                                  2025,
                                                                  2026
                                                              ],
                                                        "s":  "Juniors",
                                                        "ca":  12968,
                                                        "nb":  4,
                                                        "n":  "SAINZ SANCHEZ-URBINA Regina"
                                                    },
                                                    {
                                                        "y":  [
                                                                  2023,
                                                                  2024,
                                                                  2025,
                                                                  2026
                                                              ],
                                                        "s":  "Juniors",
                                                        "ca":  12968,
                                                        "nb":  4,
                                                        "n":  "REY FERNANDEZ Valentina"
                                                    },
                                                    {
                                                        "y":  [
                                                                  2023,
                                                                  2024,
                                                                  2025,
                                                                  2026
                                                              ],
                                                        "s":  "Juniors",
                                                        "ca":  12360,
                                                        "nb":  4,
                                                        "n":  "REUVEN Eva"
                                                    },
                                                    {
                                                        "y":  [
                                                                  2023,
                                                                  2024,
                                                                  2025,
                                                                  2026
                                                              ],
                                                        "s":  "Juniors",
                                                        "ca":  12061,
                                                        "nb":  4,
                                                        "n":  "CETINIC Olivia"
                                                    },
                                                    {
                                                        "y":  [
                                                                  2023,
                                                                  2024,
                                                                  2025,
                                                                  2026
                                                              ],
                                                        "s":  "Juniors",
                                                        "ca":  11513,
                                                        "nb":  4,
                                                        "n":  "WAGNER Devon Victoria"
                                                    },
                                                    {
                                                        "y":  [
                                                                  2023,
                                                                  2024,
                                                                  2025,
                                                                  2026
                                                              ],
                                                        "s":  "Juniors",
                                                        "ca":  11412,
                                                        "nb":  4,
                                                        "n":  "SPANRUNFT My-Marie"
                                                    },
                                                    {
                                                        "y":  [
                                                                  2023,
                                                                  2024,
                                                                  2025,
                                                                  2026
                                                              ],
                                                        "s":  "Juniors",
                                                        "ca":  11356,
                                                        "nb":  4,
                                                        "n":  "ROATTA Olimpia"
                                                    },
                                                    {
                                                        "y":  [
                                                                  2023,
                                                                  2024,
                                                                  2025,
                                                                  2026
                                                              ],
                                                        "s":  "Juniors",
                                                        "ca":  10895,
                                                        "nb":  5,
                                                        "n":  "ILIESCU-SANDNER Camil"
                                                    },
                                                    {
                                                        "y":  [
                                                                  2023,
                                                                  2024,
                                                                  2025,
                                                                  2026
                                                              ],
                                                        "s":  "Juniors",
                                                        "ca":  10480,
                                                        "nb":  4,
                                                        "n":  "SAYER Eytan"
                                                    },
                                                    {
                                                        "y":  [
                                                                  2023,
                                                                  2024,
                                                                  2025,
                                                                  2026
                                                              ],
                                                        "s":  "â€”",
                                                        "ca":  10203,
                                                        "nb":  5,
                                                        "n":  "LAZAREV Matvei"
                                                    },
                                                    {
                                                        "y":  [
                                                                  2023,
                                                                  2024,
                                                                  2025,
                                                                  2026
                                                              ],
                                                        "s":  "Adultes",
                                                        "ca":  9903,
                                                        "nb":  9,
                                                        "n":  "ARNOLD Karolina"
                                                    },
                                                    {
                                                        "y":  [
                                                                  2023,
                                                                  2024,
                                                                  2025,
                                                                  2026
                                                              ],
                                                        "s":  "â€”",
                                                        "ca":  9903,
                                                        "nb":  5,
                                                        "n":  "LAZAREVA Uliana"
                                                    },
                                                    {
                                                        "y":  [
                                                                  2023,
                                                                  2024,
                                                                  2025,
                                                                  2026
                                                              ],
                                                        "s":  "â€”",
                                                        "ca":  8986,
                                                        "nb":  4,
                                                        "n":  "HOFFMANN Sophie"
                                                    },
                                                    {
                                                        "y":  [
                                                                  2023,
                                                                  2024,
                                                                  2025,
                                                                  2026
                                                              ],
                                                        "s":  "Adultes",
                                                        "ca":  8484,
                                                        "nb":  8,
                                                        "n":  "EDER Marianne"
                                                    },
                                                    {
                                                        "y":  [
                                                                  2023,
                                                                  2024,
                                                                  2025,
                                                                  2026
                                                              ],
                                                        "s":  "â€”",
                                                        "ca":  7693,
                                                        "nb":  4,
                                                        "n":  "WILLIAMS Sasha"
                                                    },
                                                    {
                                                        "y":  [
                                                                  2023,
                                                                  2024,
                                                                  2025,
                                                                  2026
                                                              ],
                                                        "s":  "Adultes",
                                                        "ca":  7690,
                                                        "nb":  5,
                                                        "n":  "SASFAIOVA Jana"
                                                    },
                                                    {
                                                        "y":  [
                                                                  2023,
                                                                  2024,
                                                                  2025,
                                                                  2026
                                                              ],
                                                        "s":  "Juniors",
                                                        "ca":  7190,
                                                        "nb":  4,
                                                        "n":  "TORNOW Philipp Oskar"
                                                    },
                                                    {
                                                        "y":  [
                                                                  2023,
                                                                  2024,
                                                                  2025,
                                                                  2026
                                                              ],
                                                        "s":  "â€”",
                                                        "ca":  7073,
                                                        "nb":  130,
                                                        "n":  "CHAUFFEUR/DRIVER Conducteur"
                                                    },
                                                    {
                                                        "y":  [
                                                                  2023,
                                                                  2024,
                                                                  2025,
                                                                  2026
                                                              ],
                                                        "s":  "Juniors",
                                                        "ca":  6840,
                                                        "nb":  4,
                                                        "n":  "BISANZ Anton"
                                                    },
                                                    {
                                                        "y":  [
                                                                  2023,
                                                                  2024,
                                                                  2025,
                                                                  2026
                                                              ],
                                                        "s":  "Adultes",
                                                        "ca":  6104,
                                                        "nb":  4,
                                                        "n":  "BRUGGER-WENGER Sandra Dominique"
                                                    },
                                                    {
                                                        "y":  [
                                                                  2023,
                                                                  2024,
                                                                  2025,
                                                                  2026
                                                              ],
                                                        "s":  "â€”",
                                                        "ca":  6049,
                                                        "nb":  4,
                                                        "n":  "RODRIGUEZ Gabriela"
                                                    },
                                                    {
                                                        "y":  [
                                                                  2023,
                                                                  2024,
                                                                  2025,
                                                                  2026
                                                              ],
                                                        "s":  "Juniors",
                                                        "ca":  5896,
                                                        "nb":  4,
                                                        "n":  "UNLUONEY Beren"
                                                    },
                                                    {
                                                        "y":  [
                                                                  2023,
                                                                  2024,
                                                                  2025,
                                                                  2026
                                                              ],
                                                        "s":  "â€”",
                                                        "ca":  5322,
                                                        "nb":  4,
                                                        "n":  "GRIGORIADI Roza"
                                                    },
                                                    {
                                                        "y":  [
                                                                  2023,
                                                                  2024,
                                                                  2025,
                                                                  2026
                                                              ],
                                                        "s":  "Adultes",
                                                        "ca":  5118,
                                                        "nb":  5,
                                                        "n":  "DURYEA Melinda"
                                                    },
                                                    {
                                                        "y":  [
                                                                  2023,
                                                                  2024,
                                                                  2025,
                                                                  2026
                                                              ],
                                                        "s":  "Adultes",
                                                        "ca":  5067,
                                                        "nb":  4,
                                                        "n":  "SZALAY Elisabeth"
                                                    },
                                                    {
                                                        "y":  [
                                                                  2023,
                                                                  2024,
                                                                  2025,
                                                                  2026
                                                              ],
                                                        "s":  "Adultes",
                                                        "ca":  4761,
                                                        "nb":  7,
                                                        "n":  "SCHLUH Gisa"
                                                    }
                                                ],
                                 "tauxFidelite":  4.8,
                                 "flows":  {
                                               "2023-\u003e2024":  580,
                                               "2024-\u003e2025":  654,
                                               "2025-\u003e2026":  475
                                           }
                             },
                     "A":  {
                               "topDepensiers":  [
                                                     {
                                                         "y":  [
                                                                   2023,
                                                                   2024
                                                               ],
                                                         "s":  "Adultes",
                                                         "ca":  27970,
                                                         "nb":  2,
                                                         "n":  "VON ALLMEN Alina"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2026
                                                               ],
                                                         "s":  "Adultes",
                                                         "ca":  17372,
                                                         "nb":  1,
                                                         "n":  "BOSS Nico Lion"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2024
                                                               ],
                                                         "s":  "Adultes",
                                                         "ca":  15457,
                                                         "nb":  1,
                                                         "n":  "BERNHARDT Alexa"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2023,
                                                                   2024
                                                               ],
                                                         "s":  "Adultes",
                                                         "ca":  13688,
                                                         "nb":  4,
                                                         "n":  "RUEGG Jael"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2023,
                                                                   2025
                                                               ],
                                                         "s":  "Adultes",
                                                         "ca":  12942,
                                                         "nb":  3,
                                                         "n":  "KAHLISCH Julia"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2023,
                                                                   2024,
                                                                   2025
                                                               ],
                                                         "s":  "Adultes",
                                                         "ca":  12264,
                                                         "nb":  9,
                                                         "n":  "WITOSZYNSKYJ Eleonore"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2025
                                                               ],
                                                         "s":  "Adultes",
                                                         "ca":  12100,
                                                         "nb":  1,
                                                         "n":  "SCHALLER Carrie"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2025,
                                                                   2026
                                                               ],
                                                         "s":  "Adultes",
                                                         "ca":  11204,
                                                         "nb":  2,
                                                         "n":  "SMITH Keith"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2026
                                                               ],
                                                         "s":  "Adultes",
                                                         "ca":  9952,
                                                         "nb":  1,
                                                         "n":  "BUERKLER Cindy"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2023,
                                                                   2024,
                                                                   2025,
                                                                   2026
                                                               ],
                                                         "s":  "Adultes",
                                                         "ca":  9903,
                                                         "nb":  9,
                                                         "n":  "ARNOLD Karolina"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2025
                                                               ],
                                                         "s":  "Adultes",
                                                         "ca":  9680,
                                                         "nb":  2,
                                                         "n":  "GOREY Madeline"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2023
                                                               ],
                                                         "s":  "Adultes",
                                                         "ca":  9404,
                                                         "nb":  2,
                                                         "n":  "FREIRE ALVES Andre Luis"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2026
                                                               ],
                                                         "s":  "Adultes",
                                                         "ca":  9185,
                                                         "nb":  1,
                                                         "n":  "PORRAS BERMUDEZ Mateo"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2025
                                                               ],
                                                         "s":  "Adultes",
                                                         "ca":  9136,
                                                         "nb":  1,
                                                         "n":  "BUECHLER Lia"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2023,
                                                                   2024
                                                               ],
                                                         "s":  "Adultes",
                                                         "ca":  8946,
                                                         "nb":  2,
                                                         "n":  "KOCH Raja Michele"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2025,
                                                                   2026
                                                               ],
                                                         "s":  "Adultes",
                                                         "ca":  8946,
                                                         "nb":  3,
                                                         "n":  "GUSEV Andrey"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2023
                                                               ],
                                                         "s":  "Adultes",
                                                         "ca":  8936,
                                                         "nb":  2,
                                                         "n":  "ROGERS Nelson"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2026
                                                               ],
                                                         "s":  "Adultes",
                                                         "ca":  8915,
                                                         "nb":  1,
                                                         "n":  "LOVEGREN Kristof"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2023
                                                               ],
                                                         "s":  "Adultes",
                                                         "ca":  8773,
                                                         "nb":  2,
                                                         "n":  "EIDE Elvind"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2024
                                                               ],
                                                         "s":  "Adultes",
                                                         "ca":  8645,
                                                         "nb":  1,
                                                         "n":  "ZOMER Liam"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2023,
                                                                   2024,
                                                                   2025,
                                                                   2026
                                                               ],
                                                         "s":  "Adultes",
                                                         "ca":  8484,
                                                         "nb":  8,
                                                         "n":  "EDER Marianne"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2024
                                                               ],
                                                         "s":  "Adultes",
                                                         "ca":  8460,
                                                         "nb":  1,
                                                         "n":  "ETZENSPERGER Mauro"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2023
                                                               ],
                                                         "s":  "Adultes",
                                                         "ca":  8084,
                                                         "nb":  1,
                                                         "n":  "MARTINEZ Jordi"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2024
                                                               ],
                                                         "s":  "Adultes",
                                                         "ca":  8065,
                                                         "nb":  1,
                                                         "n":  "LANZ Annika"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2024
                                                               ],
                                                         "s":  "Adultes",
                                                         "ca":  8055,
                                                         "nb":  1,
                                                         "n":  "BAUMANN Anna"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2023
                                                               ],
                                                         "s":  "Adultes",
                                                         "ca":  8040,
                                                         "nb":  1,
                                                         "n":  "IHLY Luca"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2025
                                                               ],
                                                         "s":  "Adultes",
                                                         "ca":  7950,
                                                         "nb":  1,
                                                         "n":  "ELSAYED SPARR Adel"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2024
                                                               ],
                                                         "s":  "Adultes",
                                                         "ca":  7825,
                                                         "nb":  1,
                                                         "n":  "ABEGG Fiona"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2023,
                                                                   2024,
                                                                   2025,
                                                                   2026
                                                               ],
                                                         "s":  "Adultes",
                                                         "ca":  7690,
                                                         "nb":  5,
                                                         "n":  "SASFAIOVA Jana"
                                                     },
                                                     {
                                                         "y":  [
                                                                   2023,
                                                                   2025,
                                                                   2026
                                                               ],
                                                         "s":  "Adultes",
                                                         "ca":  7438,
                                                         "nb":  3,
                                                         "n":  "EDWARDS Kate"
                                                     }
                                                 ],
                               "totalUnique":  5770,
                               "perYear":  {
                                               "2023":  {
                                                            "new":  1687,
                                                            "ca":  2177297,
                                                            "returning":  0,
                                                            "total":  1687
                                                        },
                                               "2025":  {
                                                            "new":  1512,
                                                            "ca":  2302413,
                                                            "returning":  168,
                                                            "total":  1680
                                                        },
                                               "2024":  {
                                                            "new":  1571,
                                                            "ca":  2423045,
                                                            "returning":  110,
                                                            "total":  1681
                                                        },
                                               "2026":  {
                                                            "new":  1000,
                                                            "ca":  1604821,
                                                            "returning":  125,
                                                            "total":  1125
                                                        }
                                           },
                               "nbFideles":  329,
                               "topFideles":  [
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Adultes",
                                                      "ca":  9903,
                                                      "nb":  9,
                                                      "n":  "ARNOLD Karolina"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Adultes",
                                                      "ca":  8484,
                                                      "nb":  8,
                                                      "n":  "EDER Marianne"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Adultes",
                                                      "ca":  7690,
                                                      "nb":  5,
                                                      "n":  "SASFAIOVA Jana"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Adultes",
                                                      "ca":  6104,
                                                      "nb":  4,
                                                      "n":  "BRUGGER-WENGER Sandra Dominique"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Adultes",
                                                      "ca":  5118,
                                                      "nb":  5,
                                                      "n":  "DURYEA Melinda"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Adultes",
                                                      "ca":  5067,
                                                      "nb":  4,
                                                      "n":  "SZALAY Elisabeth"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Adultes",
                                                      "ca":  4761,
                                                      "nb":  7,
                                                      "n":  "SCHLUH Gisa"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Adultes",
                                                      "ca":  4445,
                                                      "nb":  9,
                                                      "n":  "KRISTIANSEN Kristin"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Adultes",
                                                      "ca":  4098,
                                                      "nb":  4,
                                                      "n":  "ELEHU Dagmawi"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Adultes",
                                                      "ca":  2876,
                                                      "nb":  4,
                                                      "n":  "KAITOVIC Biljana"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Adultes",
                                                      "ca":  2721,
                                                      "nb":  4,
                                                      "n":  "MCELVEEN John"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Adultes",
                                                      "ca":  2047,
                                                      "nb":  5,
                                                      "n":  "SCHOO Andreas"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025
                                                            ],
                                                      "s":  "Adultes",
                                                      "ca":  12264,
                                                      "nb":  9,
                                                      "n":  "WITOSZYNSKYJ Eleonore"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Adultes",
                                                      "ca":  7438,
                                                      "nb":  3,
                                                      "n":  "EDWARDS Kate"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025
                                                            ],
                                                      "s":  "Adultes",
                                                      "ca":  7085,
                                                      "nb":  11,
                                                      "n":  "WINTER Beatrix"
                                                  },
                                                  {
                                                      "y":  [
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Adultes",
                                                      "ca":  5294,
                                                      "nb":  4,
                                                      "n":  "BAER Anita"
                                                  },
                                                  {
                                                      "y":  [
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Adultes",
                                                      "ca":  5290,
                                                      "nb":  8,
                                                      "n":  "GUIENDON Joe"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025
                                                            ],
                                                      "s":  "Adultes",
                                                      "ca":  5282,
                                                      "nb":  3,
                                                      "n":  "KONTOR Ragna"
                                                  },
                                                  {
                                                      "y":  [
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Adultes",
                                                      "ca":  4790,
                                                      "nb":  4,
                                                      "n":  "LEWIS Robert"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025
                                                            ],
                                                      "s":  "Adultes",
                                                      "ca":  4770,
                                                      "nb":  4,
                                                      "n":  "TURKINA Nataliya"
                                                  },
                                                  {
                                                      "y":  [
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Adultes",
                                                      "ca":  4750,
                                                      "nb":  4,
                                                      "n":  "HABERLAND Ralf"
                                                  },
                                                  {
                                                      "y":  [
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Adultes",
                                                      "ca":  4693,
                                                      "nb":  4,
                                                      "n":  "KASPAR Andre"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025
                                                            ],
                                                      "s":  "Adultes",
                                                      "ca":  4588,
                                                      "nb":  3,
                                                      "n":  "LOOSLI Annina Seraina"
                                                  },
                                                  {
                                                      "y":  [
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Adultes",
                                                      "ca":  4563,
                                                      "nb":  3,
                                                      "n":  "LOPES Walter"
                                                  },
                                                  {
                                                      "y":  [
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Adultes",
                                                      "ca":  4381,
                                                      "nb":  3,
                                                      "n":  "TAYLOR William"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025
                                                            ],
                                                      "s":  "Adultes",
                                                      "ca":  4247,
                                                      "nb":  3,
                                                      "n":  "NAVARRINI Elisa"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025
                                                            ],
                                                      "s":  "Adultes",
                                                      "ca":  4190,
                                                      "nb":  3,
                                                      "n":  "ROTTGERMANN Heike"
                                                  },
                                                  {
                                                      "y":  [
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Adultes",
                                                      "ca":  4188,
                                                      "nb":  3,
                                                      "n":  "WATFORD Angela"
                                                  },
                                                  {
                                                      "y":  [
                                                                2024,
                                                                2025,
                                                                2026
                                                            ],
                                                      "s":  "Adultes",
                                                      "ca":  4180,
                                                      "nb":  3,
                                                      "n":  "TAYLOR Stacy"
                                                  },
                                                  {
                                                      "y":  [
                                                                2023,
                                                                2024,
                                                                2025
                                                            ],
                                                      "s":  "Adultes",
                                                      "ca":  4084,
                                                      "nb":  3,
                                                      "n":  "MONTES Juan"
                                                  }
                                              ],
                               "tauxFidelite":  5.7,
                               "flows":  {
                                             "2023-\u003e2024":  110,
                                             "2024-\u003e2025":  140,
                                             "2025-\u003e2026":  98
                                         }
                           }
                 }
};