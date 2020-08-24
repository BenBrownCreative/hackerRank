function factorial(n) {
  let total = 0;
  while (n > 1) {
    total = total === 0 ? n * (n - 1) : total * (n - 1);
    n--;
  }
  return total;
}

console.log('factorial', factorial(4));
