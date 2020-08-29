// Return the second largest number in the array.
// @param {Number[]} nums - An array of numbers.
// @return {Number} The second largest number in the array.

function getSecondLargest(nums) {
  // Complete the function
  const sorted = nums.sort((a, b) => b - a);
  return sorted.find((x) => x !== sorted[0]);
}

console.log('getSecondLargest', getSecondLargest([2, 3, 6, 6, 5]));
