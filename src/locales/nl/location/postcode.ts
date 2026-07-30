// Dutch postal codes consist of four digits followed by two uppercase letters,
// e.g. '1234 AB'. The first digit ranges from 1 to 9 (0 is not used).
const digitPrefixes = [
  '1###',
  '2###',
  '3###',
  '4###',
  '5###',
  '6###',
  '7###',
  '8###',
  '9###',
];

const letters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

// The letter combinations 'SS', 'SD' and 'SA' are not used because of their
// associations with the Schutzstaffel, the Sicherheitsdienst and the
// Sturmabteilung during the 1940-45 Nazi occupation of the Netherlands.
// See https://en.wikipedia.org/wiki/Postal_codes_in_the_Netherlands
const forbiddenLetterPairs = new Set(['SS', 'SD', 'SA']);

const letterPairs = letters.flatMap((first) =>
  { throw new Error("STUB"); }
);

export default digitPrefixes.flatMap((prefix) =>
  { throw new Error("STUB"); }
);
