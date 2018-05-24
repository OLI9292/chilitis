module.exports = [
    {
        "prompt": {
            "normal": [
                {
                    "value": "a vehicle with ",
                    "highlight": false
                },
                {
                    "value": "two",
                    "highlight": true
                },
                {
                    "value": " ",
                    "highlight": false
                },
                {
                    "value": "wheel",
                    "highlight": true
                },
                {
                    "value": "s",
                    "highlight": false
                }
            ],
            "easy": [
                {
                    "value": "a vehicle with ",
                    "highlight": false
                },
                {
                    "value": "two",
                    "highlight": true
                },
                {
                    "value": " (BI)",
                    "highlight": true
                },
                {
                    "value": " ",
                    "highlight": false
                },
                {
                    "value": "wheel",
                    "highlight": true
                },
                {
                    "value": " (CYCL)",
                    "highlight": true
                },
                {
                    "value": "s",
                    "highlight": false
                }
            ]
        },
        "answer": [
            {
                "value": "bi",
                "missing": false
            },
            {
                "value": "cycl",
                "missing": true
            },
            {
                "value": "e",
                "missing": false
            }
        ],
        "choices": [
            {
                "value": "METEOR",
                "hint": "meteor"
            },
            {
                "value": "CYCL",
                "hint": "wheel"
            },
            {
                "value": "TRANS",
                "hint": "across"
            },
            {
                "value": "OID",
                "hint": "resemble"
            },
            {
                "value": "SECT",
                "hint": "cut"
            },
            {
                "value": "ECTO",
                "hint": "outside"
            }
        ],
        "level": 1,
        "word": "bicycle",
        "key": "bicycle-1",
        "type": "defToOneRoot"
    },
    {
        "prompt": {
            "normal": [
                {
                    "value": "an animal with ",
                    "highlight": false
                },
                {
                    "value": "two",
                    "highlight": true
                },
                {
                    "value": " ",
                    "highlight": false
                },
                {
                    "value": "leg",
                    "highlight": true
                },
                {
                    "value": "s",
                    "highlight": false
                }
            ],
            "easy": [
                {
                    "value": "an animal with ",
                    "highlight": false
                },
                {
                    "value": "two",
                    "highlight": true
                },
                {
                    "value": " (BI)",
                    "highlight": true
                },
                {
                    "value": " ",
                    "highlight": false
                },
                {
                    "value": "leg",
                    "highlight": true
                },
                {
                    "value": " (PED)",
                    "highlight": true
                },
                {
                    "value": "s",
                    "highlight": false
                }
            ]
        },
        "answer": [
            {
                "value": "bi",
                "missing": true
            },
            {
                "value": "ped",
                "missing": true
            }
        ],
        "choices": [
            {
                "value": "PED",
                "hint": "leg"
            },
            {
                "value": "BI",
                "hint": "two"
            },
            {
                "value": "LAB",
                "hint": "take"
            },
            {
                "value": "DEXTR",
                "hint": "right"
            },
            {
                "value": "LIT",
                "hint": "stone"
            },
            {
                "value": "DICT",
                "hint": "proclaims"
            }
        ],
        "level": 2,
        "word": "biped",
        "key": "biped-2",
        "type": "defToAllRoots"
    },
    {
        "prompt": {
            "normal": [
                {
                    "value": "quadr",
                    "highlight": false
                },
                {
                    "value": "u",
                    "highlight": false
                },
                {
                    "value": "ped",
                    "highlight": true
                },
                {
                    "value": " =",
                    "highlight": false
                },
                {
                    "value": " a",
                    "highlight": false
                },
                {
                    "value": " four",
                    "highlight": false
                },
                {
                    "value": " ___",
                    "highlight": false
                },
                {
                    "value": " ged",
                    "highlight": false
                },
                {
                    "value": " animal",
                    "highlight": false
                }
            ]
        },
        "answer": [
            {
                "value": "leg",
                "missing": true
            }
        ],
        "choices": [
            {
                "value": "hand",
                "hint": "MAIN"
            },
            {
                "value": "body",
                "hint": "SOM"
            },
            {
                "value": "twist",
                "hint": "TORS"
            },
            {
                "value": "leg",
                "hint": "PED"
            },
            {
                "value": "belief",
                "hint": "CREED"
            },
            {
                "value": "good",
                "hint": "EU"
            }
        ],
        "level": 3,
        "word": "quadruped",
        "key": "quadruped-3",
        "type": "defCompletion"
    },
    {
        "prompt": {
            "normal": [
                {
                    "value": "an animal with a ",
                    "highlight": false
                },
                {
                    "value": "hundred",
                    "highlight": true
                },
                {
                    "value": " ",
                    "highlight": false
                },
                {
                    "value": "leg",
                    "highlight": true
                },
                {
                    "value": "s",
                    "highlight": false
                }
            ],
            "easy": [
                {
                    "value": "an animal with a ",
                    "highlight": false
                },
                {
                    "value": "hundred",
                    "highlight": true
                },
                {
                    "value": " (CENT)",
                    "highlight": true
                },
                {
                    "value": " ",
                    "highlight": false
                },
                {
                    "value": "leg",
                    "highlight": true
                },
                {
                    "value": " (PED)",
                    "highlight": true
                },
                {
                    "value": "s",
                    "highlight": false
                }
            ]
        },
        "answer": [
            {
                "value": "cent",
                "missing": true
            },
            {
                "value": "i",
                "missing": false
            },
            {
                "value": "ped",
                "missing": true
            },
            {
                "value": "e",
                "missing": false
            }
        ],
        "choices": [
            {
                "value": "CENT",
                "hint": "hundred"
            },
            {
                "value": "ONER",
                "hint": "burden"
            },
            {
                "value": "PED",
                "hint": "leg"
            },
            {
                "value": "EXTRO",
                "hint": "outward"
            },
            {
                "value": "DONT",
                "hint": "teeth"
            },
            {
                "value": "SIMIL",
                "hint": "alike"
            }
        ],
        "level": 4,
        "word": "centipede",
        "key": "centipede-4",
        "type": "defToAllRootsNoHighlight"
    },
    {
        "prompt": {
            "normal": [
                {
                    "value": "a period of ",
                    "highlight": false
                },
                {
                    "value": "one hundred",
                    "highlight": true
                },
                {
                    "value": " years",
                    "highlight": false
                }
            ],
            "easy": [
                {
                    "value": "a period of ",
                    "highlight": false
                },
                {
                    "value": "one hundred",
                    "highlight": true
                },
                {
                    "value": " (CENT)",
                    "highlight": true
                },
                {
                    "value": " years",
                    "highlight": false
                }
            ]
        },
        "answer": [
            {
                "value": "century",
                "missing": true
            }
        ],
        "choices": [
            {
                "value": "century"
            },
            {
                "value": "quadruped"
            },
            {
                "value": "chiropractor"
            },
            {
                "value": "motile"
            },
            {
                "value": "quartic"
            },
            {
                "value": "anthropophobe"
            }
        ],
        "level": 5,
        "word": "century",
        "key": "century-5",
        "type": "defToWord"
    },
    {
        "prompt": {
            "normal": [
                {
                    "value": "an animal with a ",
                    "highlight": false
                },
                {
                    "value": "thousand",
                    "highlight": true
                },
                {
                    "value": " ",
                    "highlight": false
                },
                {
                    "value": "leg",
                    "highlight": true
                },
                {
                    "value": "s",
                    "highlight": false
                }
            ],
            "easy": [
                {
                    "value": "an animal with a ",
                    "highlight": false
                },
                {
                    "value": "thousand",
                    "highlight": true
                },
                {
                    "value": " (MILL)",
                    "highlight": true
                },
                {
                    "value": " ",
                    "highlight": false
                },
                {
                    "value": "leg",
                    "highlight": true
                },
                {
                    "value": " (PED)",
                    "highlight": true
                },
                {
                    "value": "s",
                    "highlight": false
                }
            ]
        },
        "answer": [
            {
                "value": "m",
                "missing": false
            },
            {
                "value": "i",
                "missing": false
            },
            {
                "value": "l",
                "missing": false
            },
            {
                "value": "l",
                "missing": false
            },
            {
                "value": "i",
                "missing": false
            },
            {
                "value": "p",
                "missing": true
            },
            {
                "value": "e",
                "missing": true
            },
            {
                "value": "d",
                "missing": true
            },
            {
                "value": "e",
                "missing": false
            }
        ],
        "choices": [
            {
                "value": "B"
            },
            {
                "value": "C"
            },
            {
                "value": "D"
            },
            {
                "value": "E"
            },
            {
                "value": "I"
            },
            {
                "value": "M"
            },
            {
                "value": "P"
            },
            {
                "value": "Q"
            },
            {
                "value": "V"
            },
            {
                "value": "W"
            },
            {
                "value": "X"
            },
            {
                "value": "Z"
            }
        ],
        "level": 6,
        "word": "millipede",
        "key": "millipede-6",
        "type": "defToCharsOneRoot"
    },
    {
        "prompt": {
            "normal": [
                {
                    "value": "an animal that ",
                    "highlight": false
                },
                {
                    "value": "eat",
                    "highlight": true
                },
                {
                    "value": "s ",
                    "highlight": false
                },
                {
                    "value": "meat",
                    "highlight": true
                },
                {
                    "value": "",
                    "highlight": false
                }
            ],
            "easy": [
                {
                    "value": "an animal that ",
                    "highlight": false
                },
                {
                    "value": "eat",
                    "highlight": true
                },
                {
                    "value": " (VOR)",
                    "highlight": true
                },
                {
                    "value": "s ",
                    "highlight": false
                },
                {
                    "value": "meat",
                    "highlight": true
                },
                {
                    "value": " (CARN)",
                    "highlight": true
                },
                {
                    "value": "",
                    "highlight": false
                }
            ]
        },
        "answer": [
            {
                "value": "c",
                "missing": true
            },
            {
                "value": "a",
                "missing": true
            },
            {
                "value": "r",
                "missing": true
            },
            {
                "value": "n",
                "missing": true
            },
            {
                "value": "i",
                "missing": false
            },
            {
                "value": "v",
                "missing": true
            },
            {
                "value": "o",
                "missing": true
            },
            {
                "value": "r",
                "missing": true
            },
            {
                "value": "e",
                "missing": false
            }
        ],
        "choices": [
            {
                "value": "A"
            },
            {
                "value": "C"
            },
            {
                "value": "G"
            },
            {
                "value": "K"
            },
            {
                "value": "N"
            },
            {
                "value": "O"
            },
            {
                "value": "R"
            },
            {
                "value": "S"
            },
            {
                "value": "U"
            },
            {
                "value": "V"
            },
            {
                "value": "W"
            },
            {
                "value": "Y"
            }
        ],
        "level": 8,
        "word": "carnivore",
        "key": "carnivore-8",
        "type": "defToCharsAllRoots"
    },
    {
        "prompt": {
            "normal": [
                {
                    "value": "What is the meaning of the highlighted root?",
                    "highlighted": false
                },
                {
                    "value": "<br />",
                    "highlighted": false
                },
                {
                    "value": "HERB",
                    "highlight": true
                },
                {
                    "value": "i",
                    "highlight": false
                },
                {
                    "value": "vor",
                    "highlight": false
                },
                {
                    "value": "e",
                    "highlight": false
                }
            ],
            "easy": [
                {
                    "value": "What is the meaning of the highlighted root?",
                    "highlighted": false
                },
                {
                    "value": "<br />",
                    "highlighted": false
                },
                {
                    "value": "HERB",
                    "highlight": true
                },
                {
                    "value": "i",
                    "highlight": false
                },
                {
                    "value": "vor",
                    "highlight": false
                },
                {
                    "value": "e",
                    "highlight": false
                },
                {
                    "value": " = an animal that eats plants",
                    "highlight": false
                }
            ]
        },
        "answer": [
            {
                "value": "plant",
                "missing": true
            }
        ],
        "choices": [
            {
                "value": "plant",
                "hint": "HERB"
            },
            {
                "value": "fire",
                "hint": "PYR"
            },
            {
                "value": "pink",
                "hint": "RHOD"
            },
            {
                "value": "inflammation",
                "hint": "ITIS"
            },
            {
                "value": "book",
                "hint": "BIBLI"
            },
            {
                "value": "look",
                "hint": "SPEC"
            }
        ],
        "level": 9,
        "word": "herbivore",
        "key": "herbivore-9",
        "type": "rootInWordToDef"
    },
    {
        "prompt": {
            "normal": [
                {
                    "value": "an animal that ",
                    "highlight": false
                },
                {
                    "value": "eat",
                    "highlight": true
                },
                {
                    "value": "s ",
                    "highlight": false
                },
                {
                    "value": "all",
                    "highlight": true
                },
                {
                    "value": " things, including plants and meat",
                    "highlight": false
                }
            ],
            "easy": [
                {
                    "value": "an animal that ",
                    "highlight": false
                },
                {
                    "value": "eat",
                    "highlight": true
                },
                {
                    "value": " (VOR)",
                    "highlight": true
                },
                {
                    "value": "s ",
                    "highlight": false
                },
                {
                    "value": "all",
                    "highlight": true
                },
                {
                    "value": " (OMNI)",
                    "highlight": true
                },
                {
                    "value": " things, including plants and meat",
                    "highlight": false
                }
            ]
        },
        "answer": [
            {
                "value": "o",
                "missing": true
            },
            {
                "value": "m",
                "missing": true
            },
            {
                "value": "n",
                "missing": true
            },
            {
                "value": "i",
                "missing": true
            },
            {
                "value": "v",
                "missing": true
            },
            {
                "value": "o",
                "missing": true
            },
            {
                "value": "r",
                "missing": true
            },
            {
                "value": "e",
                "missing": false
            }
        ],
        "choices": [
            {
                "value": "E"
            },
            {
                "value": "H"
            },
            {
                "value": "I"
            },
            {
                "value": "L"
            },
            {
                "value": "M"
            },
            {
                "value": "N"
            },
            {
                "value": "O"
            },
            {
                "value": "Q"
            },
            {
                "value": "R"
            },
            {
                "value": "V"
            },
            {
                "value": "Y"
            },
            {
                "value": "Z"
            }
        ],
        "level": 10,
        "word": "omnivore",
        "key": "omnivore-10",
        "type": "defToCharsAllRootsNoHighlight"
    }
]