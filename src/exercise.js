
// What is the time complexity?

/**
 * Given an array of objects, return an array of tuples with capitalized key and value
 * 
 * @param {Array<Object>} arr 
 * @returns {Array}
 */
function capKeys(arr) {
  const result = [];

  for (let item of arr) {
    for (let key in item) {
      result.push([key.toUpperCase(), item[key]]);
    }
  }

  return result;
}

const monstersOfRock = [
  { monster: 'Dracula', race: 'vampire', instrument: 'guitar' },
  { monster: 'Mummy', race: 'undead human', instrument: 'bass' },
  { monster: 'Creature', race: 'fishman', instrument: 'saxophone' },
  { monster: 'Frankenstein', race: 'undead human', instrument: 'keys' },
  { monster: 'Bride', race: 'undead human', instrument: 'vocals' },
  { monster: 'Wolfman', race: 'lycanthrope', instrument: 'drums' }
];

capKeys(monstersOfRock);