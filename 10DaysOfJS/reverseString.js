function reverseString(s) {
  try {
    s = s.split('').reverse().join('');
  } catch (e) {
    console.log(e.message);
  } finally {
    console.log(s);
  }
  return s;
}

console.log('reverseString', reverseString(1234));
