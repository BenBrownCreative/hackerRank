function vowelsAndConsonants(s) {
  const vowelsList = ['a', 'e', 'i', 'o', 'u'];
  let consonants = [];

  s.split('').forEach((letter) => {
    vowelsList.indexOf(letter) > -1
      ? console.log(letter)
      : consonants.push(letter);
  });
  consonants.forEach((x) => {
    console.log(x);
  });
}

console.log('vowelsAndConsonants', vowelsAndConsonants('javascriptloops'));
