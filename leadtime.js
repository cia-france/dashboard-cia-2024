// =============================================================================
// CIA Dashboard - Donnees Lead Time (anticipation de reservation)
// Source : Excel files dans Downloads (colonnes Arrivee et Date creation)
// Lead time = jours entre la creation de la reservation et la date d'arrivee
// =============================================================================

const CIA_LEADTIME = {
    "years":  [
                  2023,
                  2024,
                  2025,
                  2026
              ],
    "bucketLabels":  [
                         {
                             "key":  "b1",
                             "label":  "0-7 j"
                         },
                         {
                             "key":  "b2",
                             "label":  "8-30 j"
                         },
                         {
                             "key":  "b3",
                             "label":  "31-60 j"
                         },
                         {
                             "key":  "b4",
                             "label":  "61-90 j"
                         },
                         {
                             "key":  "b5",
                             "label":  "91-180 j"
                         },
                         {
                             "key":  "b6",
                             "label":  "181-365 j"
                         },
                         {
                             "key":  "b7",
                             "label":  "\u003e 365 j"
                         }
                     ],
    "perYear":  {
                    "2023":  {
                                 "count":  10011,
                                 "avg":  61.6,
                                 "median":  40,
                                 "p25":  19,
                                 "p75":  89,
                                 "p95":  181,
                                 "dist":  {
                                              "b6":  500,
                                              "b1":  621,
                                              "b2":  3163,
                                              "b7":  6,
                                              "b3":  2768,
                                              "b4":  1111,
                                              "b5":  1842
                                          },
                                 "bySeg":  {
                                               "J":  {
                                                         "median":  89,
                                                         "avg":  96.4,
                                                         "p95":  208,
                                                         "p75":  132,
                                                         "count":  2760,
                                                         "p25":  47
                                                     },
                                               "A":  {
                                                         "median":  52,
                                                         "avg":  70.7,
                                                         "p95":  202,
                                                         "p75":  103,
                                                         "count":  1450,
                                                         "p25":  20
                                                     },
                                               "G":  {
                                                         "median":  31,
                                                         "avg":  42.8,
                                                         "p95":  149,
                                                         "p75":  47,
                                                         "count":  5801,
                                                         "p25":  18
                                                     }
                                           },
                                 "byMonth":  {
                                                 "7":  {
                                                           "median":  81,
                                                           "avg":  88.5,
                                                           "p95":  199,
                                                           "p75":  130,
                                                           "count":  2117,
                                                           "p25":  34
                                                       },
                                                 "9":  {
                                                           "median":  58,
                                                           "avg":  78.1,
                                                           "p95":  184,
                                                           "p75":  125,
                                                           "count":  875,
                                                           "p25":  32
                                                       },
                                                 "10":  {
                                                            "median":  34,
                                                            "avg":  62.9,
                                                            "p95":  161,
                                                            "p75":  114,
                                                            "count":  732,
                                                            "p25":  14
                                                        },
                                                 "3":  {
                                                           "median":  19,
                                                           "avg":  26.3,
                                                           "p95":  54,
                                                           "p75":  34,
                                                           "count":  1001,
                                                           "p25":  12
                                                       },
                                                 "11":  {
                                                            "median":  17,
                                                            "avg":  25.6,
                                                            "p95":  60,
                                                            "p75":  32,
                                                            "count":  385,
                                                            "p25":  10
                                                        },
                                                 "2":  {
                                                           "median":  23,
                                                           "avg":  23.6,
                                                           "p95":  44,
                                                           "p75":  32,
                                                           "count":  923,
                                                           "p25":  14
                                                       },
                                                 "1":  {
                                                           "median":  33,
                                                           "avg":  32.1,
                                                           "p95":  59,
                                                           "p75":  40,
                                                           "count":  450,
                                                           "p25":  18
                                                       },
                                                 "12":  {
                                                            "median":  19,
                                                            "avg":  34,
                                                            "p95":  62,
                                                            "p75":  31,
                                                            "count":  6,
                                                            "p25":  13
                                                        },
                                                 "4":  {
                                                           "median":  40,
                                                           "avg":  56.3,
                                                           "p95":  157,
                                                           "p75":  62,
                                                           "count":  871,
                                                           "p25":  27
                                                       },
                                                 "6":  {
                                                           "median":  48,
                                                           "avg":  64.8,
                                                           "p95":  153,
                                                           "p75":  102,
                                                           "count":  1005,
                                                           "p25":  24
                                                       },
                                                 "5":  {
                                                           "median":  40,
                                                           "avg":  51.3,
                                                           "p95":  131,
                                                           "p75":  62,
                                                           "count":  807,
                                                           "p25":  25
                                                       },
                                                 "8":  {
                                                           "median":  88,
                                                           "avg":  103.6,
                                                           "p95":  220,
                                                           "p75":  163,
                                                           "count":  839,
                                                           "p25":  45
                                                       }
                                             },
                                 "topCountries":  [
                                                      {
                                                          "median":  53,
                                                          "avg":  72.9,
                                                          "count":  1035,
                                                          "n":  "ITALIE"
                                                      },
                                                      {
                                                          "median":  65,
                                                          "avg":  82.3,
                                                          "count":  906,
                                                          "n":  "ALLEMAGNE"
                                                      },
                                                      {
                                                          "median":  76,
                                                          "avg":  93.9,
                                                          "count":  463,
                                                          "n":  "SUISSE"
                                                      },
                                                      {
                                                          "median":  68,
                                                          "avg":  87.7,
                                                          "count":  415,
                                                          "n":  "ROYAUME-UNI"
                                                      },
                                                      {
                                                          "median":  70,
                                                          "avg":  84,
                                                          "count":  373,
                                                          "n":  "ETATS-UNIS"
                                                      },
                                                      {
                                                          "median":  95,
                                                          "avg":  89.1,
                                                          "count":  362,
                                                          "n":  "ESPAGNE"
                                                      },
                                                      {
                                                          "median":  84,
                                                          "avg":  102.6,
                                                          "count":  206,
                                                          "n":  "IRLANDE"
                                                      },
                                                      {
                                                          "median":  86,
                                                          "avg":  93.2,
                                                          "count":  174,
                                                          "n":  "SUEDE"
                                                      },
                                                      {
                                                          "median":  61,
                                                          "avg":  83.7,
                                                          "count":  174,
                                                          "n":  "AUTRICHE"
                                                      },
                                                      {
                                                          "median":  17,
                                                          "avg":  41,
                                                          "count":  144,
                                                          "n":  "FRANCE"
                                                      },
                                                      {
                                                          "median":  89,
                                                          "avg":  101.9,
                                                          "count":  76,
                                                          "n":  "TURQUIE"
                                                      },
                                                      {
                                                          "median":  66,
                                                          "avg":  83.2,
                                                          "count":  70,
                                                          "n":  "PAYS-BAS"
                                                      }
                                                  ],
                                 "byCreation":  [
                                                    {
                                                        "median":  1026,
                                                        "m":  "2020-06",
                                                        "count":  1,
                                                        "avg":  1026
                                                    },
                                                    {
                                                        "median":  725,
                                                        "m":  "2021-05",
                                                        "count":  1,
                                                        "avg":  725
                                                    },
                                                    {
                                                        "median":  678,
                                                        "m":  "2021-08",
                                                        "count":  1,
                                                        "avg":  678
                                                    },
                                                    {
                                                        "median":  439,
                                                        "m":  "2022-04",
                                                        "count":  1,
                                                        "avg":  439
                                                    },
                                                    {
                                                        "median":  436,
                                                        "m":  "2022-05",
                                                        "count":  2,
                                                        "avg":  436
                                                    },
                                                    {
                                                        "median":  228,
                                                        "m":  "2022-06",
                                                        "count":  4,
                                                        "avg":  267.2
                                                    },
                                                    {
                                                        "median":  251,
                                                        "m":  "2022-07",
                                                        "count":  2,
                                                        "avg":  262
                                                    },
                                                    {
                                                        "median":  249,
                                                        "m":  "2022-08",
                                                        "count":  10,
                                                        "avg":  260.7
                                                    },
                                                    {
                                                        "median":  199,
                                                        "m":  "2022-09",
                                                        "count":  36,
                                                        "avg":  225.9
                                                    },
                                                    {
                                                        "median":  195,
                                                        "m":  "2022-10",
                                                        "count":  57,
                                                        "avg":  215.1
                                                    },
                                                    {
                                                        "median":  158,
                                                        "m":  "2022-11",
                                                        "count":  199,
                                                        "avg":  162.3
                                                    },
                                                    {
                                                        "median":  47,
                                                        "m":  "2022-12",
                                                        "count":  348,
                                                        "avg":  83.4
                                                    },
                                                    {
                                                        "median":  32,
                                                        "m":  "2023-01",
                                                        "count":  1249,
                                                        "avg":  56.8
                                                    },
                                                    {
                                                        "median":  40,
                                                        "m":  "2023-02",
                                                        "count":  1604,
                                                        "avg":  71.7
                                                    },
                                                    {
                                                        "median":  52,
                                                        "m":  "2023-03",
                                                        "count":  1547,
                                                        "avg":  69.9
                                                    },
                                                    {
                                                        "median":  61,
                                                        "m":  "2023-04",
                                                        "count":  1201,
                                                        "avg":  68.1
                                                    },
                                                    {
                                                        "median":  58,
                                                        "m":  "2023-05",
                                                        "count":  966,
                                                        "avg":  65.4
                                                    },
                                                    {
                                                        "median":  27,
                                                        "m":  "2023-06",
                                                        "count":  1026,
                                                        "avg":  38.2
                                                    },
                                                    {
                                                        "median":  35,
                                                        "m":  "2023-07",
                                                        "count":  434,
                                                        "avg":  38.7
                                                    },
                                                    {
                                                        "median":  32,
                                                        "m":  "2023-08",
                                                        "count":  521,
                                                        "avg":  29.9
                                                    },
                                                    {
                                                        "median":  31,
                                                        "m":  "2023-09",
                                                        "count":  321,
                                                        "avg":  31.7
                                                    },
                                                    {
                                                        "median":  11,
                                                        "m":  "2023-10",
                                                        "count":  296,
                                                        "avg":  15.4
                                                    },
                                                    {
                                                        "median":  10,
                                                        "m":  "2023-11",
                                                        "count":  184,
                                                        "avg":  9.8
                                                    }
                                                ],
                                 "pctLastMin7":  6.2,
                                 "pctLastMin30":  37.8,
                                 "pctPlanned90":  23.5,
                                 "invalid":  1,
                                 "negative":  23
                             },
                    "2024":  {
                                 "count":  9886,
                                 "avg":  63.4,
                                 "median":  40,
                                 "p25":  23,
                                 "p75":  88,
                                 "p95":  184,
                                 "dist":  {
                                              "b6":  514,
                                              "b1":  543,
                                              "b2":  2915,
                                              "b7":  5,
                                              "b3":  2733,
                                              "b4":  1363,
                                              "b5":  1813
                                          },
                                 "bySeg":  {
                                               "J":  {
                                                         "median":  94,
                                                         "avg":  101.5,
                                                         "p95":  223,
                                                         "p75":  142,
                                                         "count":  2847,
                                                         "p25":  49
                                                     },
                                               "A":  {
                                                         "median":  58,
                                                         "avg":  78.2,
                                                         "p95":  209,
                                                         "p75":  115,
                                                         "count":  1495,
                                                         "p25":  27
                                                     },
                                               "G":  {
                                                         "median":  31,
                                                         "avg":  39.8,
                                                         "p95":  103,
                                                         "p75":  53,
                                                         "count":  5544,
                                                         "p25":  18
                                                     }
                                           },
                                 "byMonth":  {
                                                 "7":  {
                                                           "median":  83,
                                                           "avg":  93,
                                                           "p95":  214,
                                                           "p75":  135,
                                                           "count":  1634,
                                                           "p25":  41
                                                       },
                                                 "9":  {
                                                           "median":  60,
                                                           "avg":  72.2,
                                                           "p95":  202,
                                                           "p75":  90,
                                                           "count":  1101,
                                                           "p25":  32
                                                       },
                                                 "10":  {
                                                            "median":  26,
                                                            "avg":  49.9,
                                                            "p95":  193,
                                                            "p75":  39,
                                                            "count":  532,
                                                            "p25":  19
                                                        },
                                                 "3":  {
                                                           "median":  31,
                                                           "avg":  41.9,
                                                           "p95":  109,
                                                           "p75":  58,
                                                           "count":  1014,
                                                           "p25":  17
                                                       },
                                                 "11":  {
                                                            "median":  26,
                                                            "avg":  30,
                                                            "p95":  55,
                                                            "p75":  33,
                                                            "count":  533,
                                                            "p25":  18
                                                        },
                                                 "2":  {
                                                           "median":  19,
                                                           "avg":  31.5,
                                                           "p95":  88,
                                                           "p75":  52,
                                                           "count":  995,
                                                           "p25":  15
                                                       },
                                                 "1":  {
                                                           "median":  33,
                                                           "avg":  31.8,
                                                           "p95":  60,
                                                           "p75":  40,
                                                           "count":  461,
                                                           "p25":  19
                                                       },
                                                 "12":  {
                                                            "median":  31,
                                                            "avg":  42.8,
                                                            "p95":  55,
                                                            "p75":  31,
                                                            "count":  60,
                                                            "p25":  31
                                                        },
                                                 "4":  {
                                                           "median":  33,
                                                           "avg":  54.4,
                                                           "p95":  188,
                                                           "p75":  53,
                                                           "count":  824,
                                                           "p25":  25
                                                       },
                                                 "6":  {
                                                           "median":  67,
                                                           "avg":  80.7,
                                                           "p95":  199,
                                                           "p75":  121,
                                                           "count":  1332,
                                                           "p25":  31
                                                       },
                                                 "5":  {
                                                           "median":  47,
                                                           "avg":  63.4,
                                                           "p95":  164,
                                                           "p75":  81,
                                                           "count":  636,
                                                           "p25":  28
                                                       },
                                                 "8":  {
                                                           "median":  74,
                                                           "avg":  89.9,
                                                           "p95":  212,
                                                           "p75":  130,
                                                           "count":  764,
                                                           "p25":  38
                                                       }
                                             },
                                 "topCountries":  [
                                                      {
                                                          "median":  33,
                                                          "avg":  55.1,
                                                          "count":  1695,
                                                          "n":  "ITALIE"
                                                      },
                                                      {
                                                          "median":  60,
                                                          "avg":  80.4,
                                                          "count":  841,
                                                          "n":  "ALLEMAGNE"
                                                      },
                                                      {
                                                          "median":  66,
                                                          "avg":  84.2,
                                                          "count":  703,
                                                          "n":  "SUISSE"
                                                      },
                                                      {
                                                          "median":  65,
                                                          "avg":  81.3,
                                                          "count":  544,
                                                          "n":  "ETATS-UNIS"
                                                      },
                                                      {
                                                          "median":  45,
                                                          "avg":  69.7,
                                                          "count":  453,
                                                          "n":  "ROYAUME-UNI"
                                                      },
                                                      {
                                                          "median":  82,
                                                          "avg":  87,
                                                          "count":  365,
                                                          "n":  "ESPAGNE"
                                                      },
                                                      {
                                                          "median":  152,
                                                          "avg":  146.3,
                                                          "count":  246,
                                                          "n":  "IRLANDE"
                                                      },
                                                      {
                                                          "median":  103,
                                                          "avg":  99.3,
                                                          "count":  169,
                                                          "n":  "TURQUIE"
                                                      },
                                                      {
                                                          "median":  94,
                                                          "avg":  89.4,
                                                          "count":  156,
                                                          "n":  "SUEDE"
                                                      },
                                                      {
                                                          "median":  75,
                                                          "avg":  88.8,
                                                          "count":  134,
                                                          "n":  "AUTRICHE"
                                                      },
                                                      {
                                                          "median":  24,
                                                          "avg":  47.2,
                                                          "count":  104,
                                                          "n":  "FRANCE"
                                                      },
                                                      {
                                                          "median":  87,
                                                          "avg":  91.2,
                                                          "count":  68,
                                                          "n":  "PAYS-BAS"
                                                      }
                                                  ],
                                 "byCreation":  [
                                                    {
                                                        "median":  363,
                                                        "m":  "2023-01",
                                                        "count":  2,
                                                        "avg":  519.5
                                                    },
                                                    {
                                                        "median":  569,
                                                        "m":  "2023-03",
                                                        "count":  1,
                                                        "avg":  569
                                                    },
                                                    {
                                                        "median":  353,
                                                        "m":  "2023-04",
                                                        "count":  1,
                                                        "avg":  353
                                                    },
                                                    {
                                                        "median":  321,
                                                        "m":  "2023-05",
                                                        "count":  16,
                                                        "avg":  324.6
                                                    },
                                                    {
                                                        "median":  265,
                                                        "m":  "2023-07",
                                                        "count":  7,
                                                        "avg":  279.4
                                                    },
                                                    {
                                                        "median":  222,
                                                        "m":  "2023-08",
                                                        "count":  20,
                                                        "avg":  242.2
                                                    },
                                                    {
                                                        "median":  208,
                                                        "m":  "2023-09",
                                                        "count":  53,
                                                        "avg":  222.2
                                                    },
                                                    {
                                                        "median":  200,
                                                        "m":  "2023-10",
                                                        "count":  78,
                                                        "avg":  216.5
                                                    },
                                                    {
                                                        "median":  131,
                                                        "m":  "2023-11",
                                                        "count":  288,
                                                        "avg":  143.9
                                                    },
                                                    {
                                                        "median":  58,
                                                        "m":  "2023-12",
                                                        "count":  557,
                                                        "avg":  85.9
                                                    },
                                                    {
                                                        "median":  38,
                                                        "m":  "2024-01",
                                                        "count":  1178,
                                                        "avg":  66.6
                                                    },
                                                    {
                                                        "median":  34,
                                                        "m":  "2024-02",
                                                        "count":  1563,
                                                        "avg":  64.7
                                                    },
                                                    {
                                                        "median":  65,
                                                        "m":  "2024-03",
                                                        "count":  1247,
                                                        "avg":  74.3
                                                    },
                                                    {
                                                        "median":  68,
                                                        "m":  "2024-04",
                                                        "count":  1074,
                                                        "avg":  68.5
                                                    },
                                                    {
                                                        "median":  47,
                                                        "m":  "2024-05",
                                                        "count":  1002,
                                                        "avg":  52.4
                                                    },
                                                    {
                                                        "median":  38,
                                                        "m":  "2024-06",
                                                        "count":  655,
                                                        "avg":  49.5
                                                    },
                                                    {
                                                        "median":  39,
                                                        "m":  "2024-07",
                                                        "count":  659,
                                                        "avg":  39.3
                                                    },
                                                    {
                                                        "median":  32,
                                                        "m":  "2024-08",
                                                        "count":  360,
                                                        "avg":  30.8
                                                    },
                                                    {
                                                        "median":  23,
                                                        "m":  "2024-09",
                                                        "count":  550,
                                                        "avg":  25.4
                                                    },
                                                    {
                                                        "median":  18,
                                                        "m":  "2024-10",
                                                        "count":  550,
                                                        "avg":  23.1
                                                    },
                                                    {
                                                        "median":  9,
                                                        "m":  "2024-11",
                                                        "count":  23,
                                                        "avg":  8.8
                                                    },
                                                    {
                                                        "median":  9,
                                                        "m":  "2024-12",
                                                        "count":  2,
                                                        "avg":  11.5
                                                    }
                                                ],
                                 "pctLastMin7":  5.5,
                                 "pctLastMin30":  35,
                                 "pctPlanned90":  23.6,
                                 "invalid":  1,
                                 "negative":  24
                             },
                    "2025":  {
                                 "count":  5528,
                                 "avg":  82,
                                 "median":  62,
                                 "p25":  23,
                                 "p75":  126,
                                 "p95":  219,
                                 "dist":  {
                                              "b6":  564,
                                              "b1":  499,
                                              "b2":  1294,
                                              "b7":  4,
                                              "b3":  915,
                                              "b4":  663,
                                              "b5":  1589
                                          },
                                 "bySeg":  {
                                               "J":  {
                                                         "median":  104,
                                                         "avg":  108.2,
                                                         "p95":  230,
                                                         "p75":  156,
                                                         "count":  2857,
                                                         "p25":  48
                                                     },
                                               "A":  {
                                                         "median":  55,
                                                         "avg":  74.8,
                                                         "p95":  209,
                                                         "p75":  109,
                                                         "count":  1700,
                                                         "p25":  24
                                                     },
                                               "G":  {
                                                         "median":  17,
                                                         "avg":  17.6,
                                                         "p95":  33,
                                                         "p75":  23,
                                                         "count":  971,
                                                         "p25":  10
                                                     }
                                           },
                                 "byMonth":  {
                                                 "7":  {
                                                           "median":  103,
                                                           "avg":  103.3,
                                                           "p95":  223,
                                                           "p75":  144,
                                                           "count":  1236,
                                                           "p25":  52
                                                       },
                                                 "9":  {
                                                           "median":  23,
                                                           "avg":  56.2,
                                                           "p95":  201,
                                                           "p75":  70,
                                                           "count":  607,
                                                           "p25":  12
                                                       },
                                                 "10":  {
                                                            "median":  27,
                                                            "avg":  46.9,
                                                            "p95":  159,
                                                            "p75":  47,
                                                            "count":  402,
                                                            "p25":  12
                                                        },
                                                 "3":  {
                                                           "median":  47,
                                                           "avg":  67.6,
                                                           "p95":  195,
                                                           "p75":  86,
                                                           "count":  178,
                                                           "p25":  17
                                                       },
                                                 "11":  {
                                                            "median":  17,
                                                            "avg":  23.2,
                                                            "p95":  44,
                                                            "p75":  33,
                                                            "count":  342,
                                                            "p25":  16
                                                        },
                                                 "2":  {
                                                           "median":  27,
                                                           "avg":  48.5,
                                                           "p95":  129,
                                                           "p75":  66,
                                                           "count":  68,
                                                           "p25":  13
                                                       },
                                                 "1":  {
                                                           "median":  23,
                                                           "avg":  51.5,
                                                           "p95":  227,
                                                           "p75":  45,
                                                           "count":  66,
                                                           "p25":  11
                                                       },
                                                 "12":  {
                                                            "median":  20,
                                                            "avg":  37,
                                                            "p95":  133,
                                                            "p75":  20,
                                                            "count":  57,
                                                            "p25":  20
                                                        },
                                                 "4":  {
                                                           "median":  83,
                                                           "avg":  111.4,
                                                           "p95":  237,
                                                           "p75":  185,
                                                           "count":  469,
                                                           "p25":  34
                                                       },
                                                 "6":  {
                                                           "median":  96,
                                                           "avg":  97.2,
                                                           "p95":  214,
                                                           "p75":  132,
                                                           "count":  961,
                                                           "p25":  48
                                                       },
                                                 "5":  {
                                                           "median":  53,
                                                           "avg":  78.2,
                                                           "p95":  215,
                                                           "p75":  107,
                                                           "count":  158,
                                                           "p25":  27
                                                       },
                                                 "8":  {
                                                           "median":  76,
                                                           "avg":  87.4,
                                                           "p95":  224,
                                                           "p75":  133,
                                                           "count":  984,
                                                           "p25":  23
                                                       }
                                             },
                                 "topCountries":  [
                                                      {
                                                          "median":  68,
                                                          "avg":  88.3,
                                                          "count":  871,
                                                          "n":  "ALLEMAGNE"
                                                      },
                                                      {
                                                          "median":  58,
                                                          "avg":  84.8,
                                                          "count":  648,
                                                          "n":  "SUISSE"
                                                      },
                                                      {
                                                          "median":  30,
                                                          "avg":  49.4,
                                                          "count":  505,
                                                          "n":  "ITALIE"
                                                      },
                                                      {
                                                          "median":  74,
                                                          "avg":  91.7,
                                                          "count":  466,
                                                          "n":  "ETATS-UNIS"
                                                      },
                                                      {
                                                          "median":  63,
                                                          "avg":  80.1,
                                                          "count":  430,
                                                          "n":  "ROYAUME-UNI"
                                                      },
                                                      {
                                                          "median":  166,
                                                          "avg":  149.1,
                                                          "count":  381,
                                                          "n":  "IRLANDE"
                                                      },
                                                      {
                                                          "median":  101,
                                                          "avg":  99,
                                                          "count":  264,
                                                          "n":  "ESPAGNE"
                                                      },
                                                      {
                                                          "median":  121,
                                                          "avg":  118.3,
                                                          "count":  216,
                                                          "n":  "TURQUIE"
                                                      },
                                                      {
                                                          "median":  75,
                                                          "avg":  91.3,
                                                          "count":  169,
                                                          "n":  "SUEDE"
                                                      },
                                                      {
                                                          "median":  25,
                                                          "avg":  43.5,
                                                          "count":  138,
                                                          "n":  "FRANCE"
                                                      },
                                                      {
                                                          "median":  76,
                                                          "avg":  82.8,
                                                          "count":  132,
                                                          "n":  "AUTRICHE"
                                                      },
                                                      {
                                                          "median":  27,
                                                          "avg":  59.6,
                                                          "count":  64,
                                                          "n":  "AUSTRALIE"
                                                      }
                                                  ],
                                 "byCreation":  [
                                                    {
                                                        "median":  425,
                                                        "m":  "2023-11",
                                                        "count":  1,
                                                        "avg":  425
                                                    },
                                                    {
                                                        "median":  519,
                                                        "m":  "2023-12",
                                                        "count":  1,
                                                        "avg":  519
                                                    },
                                                    {
                                                        "median":  348,
                                                        "m":  "2024-01",
                                                        "count":  2,
                                                        "avg":  348
                                                    },
                                                    {
                                                        "median":  341,
                                                        "m":  "2024-03",
                                                        "count":  1,
                                                        "avg":  341
                                                    },
                                                    {
                                                        "median":  346,
                                                        "m":  "2024-04",
                                                        "count":  5,
                                                        "avg":  347.2
                                                    },
                                                    {
                                                        "median":  227,
                                                        "m":  "2024-05",
                                                        "count":  3,
                                                        "avg":  274.3
                                                    },
                                                    {
                                                        "median":  305,
                                                        "m":  "2024-06",
                                                        "count":  7,
                                                        "avg":  306.6
                                                    },
                                                    {
                                                        "median":  254,
                                                        "m":  "2024-07",
                                                        "count":  8,
                                                        "avg":  274.6
                                                    },
                                                    {
                                                        "median":  236,
                                                        "m":  "2024-08",
                                                        "count":  31,
                                                        "avg":  243.2
                                                    },
                                                    {
                                                        "median":  214,
                                                        "m":  "2024-09",
                                                        "count":  100,
                                                        "avg":  216.4
                                                    },
                                                    {
                                                        "median":  188,
                                                        "m":  "2024-10",
                                                        "count":  134,
                                                        "avg":  205.6
                                                    },
                                                    {
                                                        "median":  209,
                                                        "m":  "2024-11",
                                                        "count":  135,
                                                        "avg":  193.9
                                                    },
                                                    {
                                                        "median":  189,
                                                        "m":  "2024-12",
                                                        "count":  188,
                                                        "avg":  156.3
                                                    },
                                                    {
                                                        "median":  156,
                                                        "m":  "2025-01",
                                                        "count":  457,
                                                        "avg":  136.7
                                                    },
                                                    {
                                                        "median":  128,
                                                        "m":  "2025-02",
                                                        "count":  514,
                                                        "avg":  114.8
                                                    },
                                                    {
                                                        "median":  108,
                                                        "m":  "2025-03",
                                                        "count":  713,
                                                        "avg":  100.8
                                                    },
                                                    {
                                                        "median":  88,
                                                        "m":  "2025-04",
                                                        "count":  607,
                                                        "avg":  82.3
                                                    },
                                                    {
                                                        "median":  65,
                                                        "m":  "2025-05",
                                                        "count":  505,
                                                        "avg":  64
                                                    },
                                                    {
                                                        "median":  40,
                                                        "m":  "2025-06",
                                                        "count":  436,
                                                        "avg":  44.5
                                                    },
                                                    {
                                                        "median":  23,
                                                        "m":  "2025-07",
                                                        "count":  356,
                                                        "avg":  31.1
                                                    },
                                                    {
                                                        "median":  17,
                                                        "m":  "2025-08",
                                                        "count":  523,
                                                        "avg":  21.4
                                                    },
                                                    {
                                                        "median":  23,
                                                        "m":  "2025-09",
                                                        "count":  349,
                                                        "avg":  20.6
                                                    },
                                                    {
                                                        "median":  16,
                                                        "m":  "2025-10",
                                                        "count":  256,
                                                        "avg":  18.7
                                                    },
                                                    {
                                                        "median":  17,
                                                        "m":  "2025-11",
                                                        "count":  195,
                                                        "avg":  14.8
                                                    },
                                                    {
                                                        "median":  6,
                                                        "m":  "2025-12",
                                                        "count":  1,
                                                        "avg":  6
                                                    }
                                                ],
                                 "pctLastMin7":  9,
                                 "pctLastMin30":  32.4,
                                 "pctPlanned90":  39,
                                 "invalid":  1,
                                 "negative":  4818
                             },
                    "2026":  {
                                 "count":  7225,
                                 "avg":  74.6,
                                 "median":  39,
                                 "p25":  17,
                                 "p75":  118,
                                 "p95":  226,
                                 "dist":  {
                                              "b6":  736,
                                              "b1":  368,
                                              "b2":  2807,
                                              "b7":  25,
                                              "b3":  1079,
                                              "b4":  626,
                                              "b5":  1584
                                          },
                                 "bySeg":  {
                                               "J":  {
                                                         "median":  129,
                                                         "avg":  139,
                                                         "p95":  272,
                                                         "p75":  174,
                                                         "count":  2260,
                                                         "p25":  89
                                                     },
                                               "A":  {
                                                         "median":  107,
                                                         "avg":  116.4,
                                                         "p95":  262,
                                                         "p75":  168,
                                                         "count":  1070,
                                                         "p25":  52
                                                     },
                                               "G":  {
                                                         "median":  18,
                                                         "avg":  25.6,
                                                         "p95":  53,
                                                         "p75":  30,
                                                         "count":  3895,
                                                         "p25":  13
                                                     }
                                           },
                                 "byMonth":  {
                                                 "7":  {
                                                           "median":  124,
                                                           "avg":  133.2,
                                                           "p95":  233,
                                                           "p75":  159,
                                                           "count":  1066,
                                                           "p25":  90
                                                       },
                                                 "9":  {
                                                           "median":  207,
                                                           "avg":  208.3,
                                                           "p95":  334,
                                                           "p75":  216,
                                                           "count":  121,
                                                           "p25":  174
                                                       },
                                                 "10":  {
                                                            "median":  196,
                                                            "avg":  208.4,
                                                            "p95":  313,
                                                            "p75":  231,
                                                            "count":  50,
                                                            "p25":  165
                                                        },
                                                 "3":  {
                                                           "median":  19,
                                                           "avg":  33.5,
                                                           "p95":  115,
                                                           "p75":  33,
                                                           "count":  1451,
                                                           "p25":  16
                                                       },
                                                 "11":  {
                                                            "median":  280,
                                                            "avg":  293.8,
                                                            "p95":  287,
                                                            "p75":  287,
                                                            "count":  5,
                                                            "p25":  273
                                                        },
                                                 "2":  {
                                                           "median":  18,
                                                           "avg":  21.2,
                                                           "p95":  42,
                                                           "p75":  23,
                                                           "count":  1055,
                                                           "p25":  12
                                                       },
                                                 "1":  {
                                                           "median":  17,
                                                           "avg":  24.5,
                                                           "p95":  52,
                                                           "p75":  28,
                                                           "count":  471,
                                                           "p25":  14
                                                       },
                                                 "12":  {
                                                            "median":  0,
                                                            "avg":  0,
                                                            "p95":  0,
                                                            "p75":  0,
                                                            "count":  0,
                                                            "p25":  0
                                                        },
                                                 "4":  {
                                                           "median":  28,
                                                           "avg":  67.2,
                                                           "p95":  292,
                                                           "p75":  79,
                                                           "count":  934,
                                                           "p25":  17
                                                       },
                                                 "6":  {
                                                           "median":  96,
                                                           "avg":  111.2,
                                                           "p95":  254,
                                                           "p75":  145,
                                                           "count":  977,
                                                           "p25":  53
                                                       },
                                                 "5":  {
                                                           "median":  25,
                                                           "avg":  57.5,
                                                           "p95":  201,
                                                           "p75":  82,
                                                           "count":  693,
                                                           "p25":  18
                                                       },
                                                 "8":  {
                                                           "median":  153,
                                                           "avg":  163.4,
                                                           "p95":  283,
                                                           "p75":  198,
                                                           "count":  402,
                                                           "p25":  115
                                                       }
                                             },
                                 "topCountries":  [
                                                      {
                                                          "median":  116,
                                                          "avg":  124.2,
                                                          "count":  551,
                                                          "n":  "ALLEMAGNE"
                                                      },
                                                      {
                                                          "median":  26,
                                                          "avg":  54.8,
                                                          "count":  441,
                                                          "n":  "ITALIE"
                                                      },
                                                      {
                                                          "median":  142,
                                                          "avg":  140,
                                                          "count":  430,
                                                          "n":  "SUISSE"
                                                      },
                                                      {
                                                          "median":  110,
                                                          "avg":  126.6,
                                                          "count":  347,
                                                          "n":  "ETATS-UNIS"
                                                      },
                                                      {
                                                          "median":  170,
                                                          "avg":  173.6,
                                                          "count":  341,
                                                          "n":  "IRLANDE"
                                                      },
                                                      {
                                                          "median":  110,
                                                          "avg":  121.7,
                                                          "count":  282,
                                                          "n":  "ROYAUME-UNI"
                                                      },
                                                      {
                                                          "median":  110,
                                                          "avg":  112.5,
                                                          "count":  254,
                                                          "n":  "ESPAGNE"
                                                      },
                                                      {
                                                          "median":  137,
                                                          "avg":  144,
                                                          "count":  209,
                                                          "n":  "TURQUIE"
                                                      },
                                                      {
                                                          "median":  114,
                                                          "avg":  121.1,
                                                          "count":  127,
                                                          "n":  "SUEDE"
                                                      },
                                                      {
                                                          "median":  144,
                                                          "avg":  121,
                                                          "count":  124,
                                                          "n":  "AUTRICHE"
                                                      },
                                                      {
                                                          "median":  136,
                                                          "avg":  144.8,
                                                          "count":  51,
                                                          "n":  "BRESIL"
                                                      },
                                                      {
                                                          "median":  47,
                                                          "avg":  78.8,
                                                          "count":  45,
                                                          "n":  "FRANCE"
                                                      }
                                                  ],
                                 "byCreation":  [
                                                    {
                                                        "median":  830,
                                                        "m":  "2024-02",
                                                        "count":  1,
                                                        "avg":  830
                                                    },
                                                    {
                                                        "median":  629,
                                                        "m":  "2024-10",
                                                        "count":  2,
                                                        "avg":  629
                                                    },
                                                    {
                                                        "median":  587,
                                                        "m":  "2024-11",
                                                        "count":  2,
                                                        "avg":  589
                                                    },
                                                    {
                                                        "median":  361,
                                                        "m":  "2025-01",
                                                        "count":  1,
                                                        "avg":  361
                                                    },
                                                    {
                                                        "median":  388,
                                                        "m":  "2025-02",
                                                        "count":  4,
                                                        "avg":  410.8
                                                    },
                                                    {
                                                        "median":  398,
                                                        "m":  "2025-03",
                                                        "count":  3,
                                                        "avg":  418.7
                                                    },
                                                    {
                                                        "median":  380,
                                                        "m":  "2025-04",
                                                        "count":  9,
                                                        "avg":  389.8
                                                    },
                                                    {
                                                        "median":  324,
                                                        "m":  "2025-05",
                                                        "count":  22,
                                                        "avg":  332.9
                                                    },
                                                    {
                                                        "median":  307,
                                                        "m":  "2025-06",
                                                        "count":  30,
                                                        "avg":  304.5
                                                    },
                                                    {
                                                        "median":  284,
                                                        "m":  "2025-07",
                                                        "count":  11,
                                                        "avg":  295
                                                    },
                                                    {
                                                        "median":  250,
                                                        "m":  "2025-08",
                                                        "count":  32,
                                                        "avg":  267.1
                                                    },
                                                    {
                                                        "median":  217,
                                                        "m":  "2025-09",
                                                        "count":  131,
                                                        "avg":  230.6
                                                    },
                                                    {
                                                        "median":  214,
                                                        "m":  "2025-10",
                                                        "count":  148,
                                                        "avg":  209.7
                                                    },
                                                    {
                                                        "median":  202,
                                                        "m":  "2025-11",
                                                        "count":  207,
                                                        "avg":  177.6
                                                    },
                                                    {
                                                        "median":  121,
                                                        "m":  "2025-12",
                                                        "count":  332,
                                                        "avg":  124
                                                    },
                                                    {
                                                        "median":  21,
                                                        "m":  "2026-01",
                                                        "count":  1634,
                                                        "avg":  56.6
                                                    },
                                                    {
                                                        "median":  26,
                                                        "m":  "2026-02",
                                                        "count":  1790,
                                                        "avg":  58.1
                                                    },
                                                    {
                                                        "median":  35,
                                                        "m":  "2026-03",
                                                        "count":  1204,
                                                        "avg":  66
                                                    },
                                                    {
                                                        "median":  47,
                                                        "m":  "2026-04",
                                                        "count":  1116,
                                                        "avg":  53.1
                                                    },
                                                    {
                                                        "median":  44,
                                                        "m":  "2026-05",
                                                        "count":  546,
                                                        "avg":  47.4
                                                    }
                                                ],
                                 "pctLastMin7":  5.1,
                                 "pctLastMin30":  43.9,
                                 "pctPlanned90":  32.5,
                                 "invalid":  1,
                                 "negative":  138
                             }
                }
};