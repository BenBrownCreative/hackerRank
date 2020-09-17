// not solved yet
// figure out the minimum swaps needed to reorder array
// swap equal exchanging the position of 2 elements in the array

const minimumSwaps = (arr) => {
  arr.forEach((num, pos) => {
    if (num > pos + 2 || num < pos) {
      console.log(num);
    }
  });
};

console.log('minimumSwaps', minimumSwaps([7, 1, 3, 2, 4, 5, 6]));
