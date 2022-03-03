type Classification = [letter: string, classification: string][];

const R = "rest";
const E = "stommeE";
const K = "korteKlinker";
const L = "langeKlinker";
const O = "letterGroep1";
const W = "letterGroep2";
const T = "tweeKlank";
const S = "speciaal";
const A = "anders";

const mooi: Classification = [
  [R, "m"],
  [O, "ooi"],
];
const bureau: Classification = [
  [R, "b"],
  [L, "u"],
  [R, "r"],
  [O, "eau"],
];
const schreeuw: Classification = [
  [R, "schr"],
  [W, "eeuw"],
];
const varen: Classification = [
  [R, "v"],
  [L, "a"],
  [R, "r"],
  [E, "e"],
  [R, "n"],
];
const katje: Classification = [
  [R, "k"],
  [K, "a"],
  [R, "t"],
  [R, "j"],
  [E, "e"],
];
const vette: Classification = [
  [R, "v"],
  [K, "e"],
  [R, "t"],
  [R, "t"],
  [E, "e"],
];
const raket: Classification = [
  [R, "r"],
  [L, "a"],
  [R, "k"],
  [K, "e"],
  [R, "t"],
];
const beren: Classification = [
  [R, "b"],
  [L, "e"],
  [R, "r"],
  [E, "e"],
  [R, "n"],
];
const stelen: Classification = [
  [R, "s"],
  [R, "t"],
  [L, "e"],
  [R, "l"],
  [E, "e"],
  [R, "n"],
];
const getver: Classification = [
  [R, "g"],
  [K, "e"],
  [R, "t"],
  [R, "v"],
  [E, "e"],
  [R, "r"],
];
const ongeluk: Classification = [
  [K, "o"],
  [R, "n"],
  [R, "g"],
  [E, "e"],
  [R, "l"],
  [K, "u"],
  [R, "k"],
];
const geluk: Classification = [
  [R, "g"],
  [E, "e"],
  [R, "l"],
  [K, "u"],
  [R, "k"],
];
const gelukkig: Classification = [
  [R, "g"],
  [E, "e"],
  [R, "l"],
  [K, "u"],
  [R, "k"],
  [R, "k"],
  [E, "i"],
  [R, "g"],
];
const eten: Classification = [
  [L, "e"],
  [R, "t"],
  [E, "e"],
  [R, "n"],
  [A, "."],
];
const dromerige: Classification = [
  [R, "d"],
  [R, "r"],
  [L, "o"],
  [R, "m"],
  [E, "e"],
  [R, "r"],
  [E, "i"],
  [R, "g"],
  [E, "e"],
];
const medicijnen: Classification = [
  [R, "m"],
  [L, "e"],
  [R, "d"],
  [S, "i"],
  [S, "c"],
  [T, "ij"],
  [R, "n"],
  [E, "e"],
  [R, "n"],
];
const hoger: Classification = [
  [R, "h"],
  [L, "o"],
  [R, "g"],
  [E, "e"],
  [R, "r"],
];
const tegen: Classification = [
  [R, "t"],
  [L, "e"],
  [R, "g"],
  [E, "e"],
  [R, "n"],
];
const snel: Classification = [
  [R, "s"],
  [R, "n"],
  [K, "e"],
  [R, "l"],
];
const avontuur: Classification = [
  [L, "A"],
  [R, "v"],
  [K, "o"],
  [R, "n"],
  [R, "t"],
  [L, "uu"],
  [R, "r"],
];
const repareren: Classification = [
  [R, "r"],
  [L, "e"],
  [R, "p"],
  [L, "a"],
  [R, "r"],
  [L, "e"],
  [R, "r"],
  [E, "e"],
  [R, "n"],
];
const verwerkte: Classification = [
  [R, "v"],
  [E, "e"],
  [R, "r"],
  [R, "w"],
  [K, "e"],
  [R, "r"],
  [R, "k"],
  [R, "t"],
  [E, "e"],
];
const omgeving: Classification = [
  [K, "o"],
  [R, "m"],
  [R, "g"],
  [L, "e"],
  [R, "v"],
  [K, "i"],
  [R, "ng"],
];
const vergelijk: Classification = [
  [R, "v"],
  [E, "e"],
  [R, "r"],
  [R, "g"],
  [E, "e"],
  [R, "l"],
  [T, "ij"],
  [R, "k"],
];
const ongelijk: Classification = [
  [K, "o"],
  [R, "n"],
  [R, "g"],
  [E, "e"],
  [R, "l"],
  [T, "ij"],
  [R, "k"],
];
const gelijk: Classification = [
  [R, "g"],
  [E, "e"],
  [R, "l"],
  [T, "ij"],
  [R, "k"],
];
const ongeldig: Classification = [
  [K, "o"],
  [R, "n"],
  [R, "g"],
  [E, "e"],
  [R, "l"],
  [R, "d"],
  [E, "i"],
  [R, "g"],
];
const onmogelijk: Classification = [
  [K, "o"],
  [R, "n"],
  [R, "m"],
  [L, "o"],
  [R, "g"],
  [E, "e"],
  [R, "l"],
  [E, "ij"],
  [R, "k"],
];
const mogelijk: Classification = [
  [R, "m"],
  [L, "o"],
  [R, "g"],
  [E, "e"],
  [R, "l"],
  [E, "ij"],
  [R, "k"],
];
const speciale: Classification = [
  [R, "S"],
  [R, "p"],
  [L, "e"],
  [S, "c"],
  [S, "i"],
  [L, "a"],
  [R, "l"],
  [E, "e"],
];
const opgegeten = [
  [K, "o"],
  [R, "p"],
  [R, "g"],
  [E, "e"],
  [R, "g"],
  [L, "e"],
  [R, "t"],
  [E, "e"],
  [R, "n"],
];
const vergeten = [
  [R, "v"],
  [E, "e"],
  [R, "r"],
  [R, "g"],
  [L, "e"],
  [R, "t"],
  [E, "e"],
  [R, "n"],
];
const meedenken = [
  [R, "m"],
  [L, "ee"],
  [R, "d"],
  [K, "e"],
  [R, "nk"],
  [E, "e"],
  [R, "n"],
];
const olifant: Classification = [
  [L, "o"],
  [R, "l"],
  [S, "i"],
  [R, "f"],
  [K, "a"],
  [R, "n"],
  [R, "t"],
];
const pakket: Classification = [
  [R, "p"],
  [K, "a"],
  [R, "k"],
  [R, "k"],
  [K, "e"],
  [R, "t"],
];
const fantastisch: Classification = [
  [R, "f"],
  [K, "a"],
  [R, "n"],
  [R, "t"],
  [K, "a"],
  [R, "s"],
  [R, "t"],
  [S, "i"],
  [S, "sch"],
];
const knipoog: Classification = [
  [R, "k"],
  [R, "n"],
  [K, "i"],
  [R, "p"],
  [L, "oo"],
  [R, "g"],
];
const linkerkant: Classification = [
  [R, "l"],
  [K, "i"],
  [R, "nk"],
  [E, "e"],
  [R, "r"],
  [R, "k"],
  [K, "a"],
  [R, "n"],
  [R, "t"],
];
const donkere: Classification = [
  [R, "d"],
  [K, "o"],
  [R, "nk"],
  [E, "e"],
  [R, "r"],
  [E, "e"],
];
const geweldig: Classification = [
  [R, "g"],
  [E, "e"],
  [R, "w"],
  [K, "e"],
  [R, "l"],
  [R, "d"],
  [E, "i"],
  [R, "g"],
];

const gelij: Classification = [
  [S, "g"],
  [E, "e"],
  [K, "l"],
  [T, "ij"],
];

const horloge: Classification = [
  [R, "h"],
  [K, "o"],
  [R, "r"],
  [R, "l"],
  [L, "o"],
  [S, "g"],
  [E, "e"],
];

const garage: Classification = [
  [R, "g"],
  [L, "a"],
  [R, "r"],
  [L, "a"],
  [S, "g"],
  [E, "e"],
];

const kar: Classification = [
  [R, "k"],
  [K, "a"],
  [R, "r"],
];

const zet: Classification = [
  [R, "z"],
  [K, "e"],
  [R, "t"],
];

const vaas: Classification = [
  [R, "v"],
  [L, "aa"],
  [R, "s"],
];

const klank: Classification = [
  [R, "k"],
  [R, "l"],
  [K, "a"],
  [R, "nk"],
];

const school: Classification = [
  [R, "sch"],
  [L, "oo"],
  [R, "l"],
];

const meeuw: Classification = [
  [R, "m"],
  [W, "eeuw"],
];

const boek: Classification = [
  [R, "b"],
  [T, "oe"],
  [R, "k"],
];

const deur: Classification = [
  [R, "d"],
  [T, "eu"],
  [R, "r"],
];

const trui: Classification = [
  [R, "t"],
  [R, "r"],
  [T, "ui"],
];

const koe: Classification = [
  [R, "k"],
  [T, "oe"],
];

const afwas: Classification = [
  [K, "a"],
  [R, "f"],
  [R, "w"],
  [K, "a"],
  [R, "s"],
];

const wordlist = (
  level: number
): {
  category: string;
  words: [word: string, definition: Classification][];
}[] => {
  const ophakken = [kar, zet, vaas, afwas, pakket, snel, knipoog];
  const tweeKlanken = [boek, deur, trui, koe];
  const letterGroepen = [klank, school, mooi, meeuw, schreeuw];
  const langeKlanken = [avontuur, omgeving, bureau, raket];
  const stommeE = [
    katje,
    vette,
    eten,
    varen,
    beren,
    stelen,
    getver,
    geluk,
    ongeluk,
    ongelijk,
    gelijk,
    gelukkig,
    dromerige,
  ];

  const langeI = [olifant, medicijnen];
  const gAlsJ = [gelij, horloge, garage, hoger, tegen];

  const extra = [
    linkerkant,
    donkere,
    repareren,
    verwerkte,
    vergelijk,
    onmogelijk,
    mogelijk,
    speciale,
    ongeldig,
    fantastisch,
    geweldig,
  ];
  let levelLeft = level;

  const challenges: { category: string; words: Classification[] }[] = [
    { category: "Ophakken", words: ophakken },
    { category: "Tweeklanken", words: tweeKlanken },
    { category: "Lettergroepen", words: letterGroepen },
    { category: "Korte klinker met lange klank", words: langeKlanken },
    { category: "Stomme E", words: stommeE },
    { category: "Lange i", words: langeI },
    { category: "G als J", words: gAlsJ },
    { category: "Bonus!", words: extra },
  ];

  return challenges
    .map(({ category, words }) => {
      const testWords: [word: string, definition: Classification][] = words.map(
        (word) => [
          word.map(([, letters]) => letters).join(""),
          word.map(([def, letters]) => [letters, def]),
        ]
      );

      if (words.length < levelLeft) {
        // section complete
        levelLeft -= words.length;
        return { category, words: testWords };
      }
      if (words.length >= levelLeft) {
        // section complete
        levelLeft = 0;
        return { category, words: testWords.slice(levelLeft) };
      }
      return false;
    })
    .filter(
      (
        e
      ): e is {
        category: string;
        words: [word: string, definition: Classification][];
      } => e !== false
    );
};

export default wordlist;
