// Complete the isPositive function.
// If 'a' is positive, return "YES".
// If 'a' is 0, throw an Error with the message "Zero Error"
// If 'a' is negative, throw an Error with the message "Negative Error"

function isPositive(a) {
  const isOkay = (a) => {
    if (a < 0) {
      throw new Error('Negative Error');
    } else if (a == 0) {
      throw new Error('Zero Error');
    } else {
      return 'YES';
    }
  };
  try {
    return isOkay(a);
  } catch (e) {
    return e.message;
  }
}

console.log('isPositive', isPositive(0));
