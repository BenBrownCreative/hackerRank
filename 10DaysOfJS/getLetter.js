function getLetter(s) {
  let letter;
  const setA = ['a', 'e', 'i', 'o', 'u'];
  const setB = ['b', 'c', 'd', 'f', 'g'];
  const setC = ['h', 'j', 'k', 'l', 'm'];
  // Write your code here
  const firstLetter = s[0].toLowerCase();
  switch (firstLetter) {
    case setA.find((x) => x === firstLetter):
      letter = 'A';
      break;
    case setB.find((x) => x === firstLetter):
      letter = 'B';
      break;
    case setC.find((x) => x === firstLetter):
      letter = 'C';
      break;
    default:
      letter = 'D';
      break;
  }

  return letter;
}

console.log('getLetter', getLetter('xzfgt'));
