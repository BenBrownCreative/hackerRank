
// Complete the function rotLeft in the editor below. It should return the resulting array of integers.

// rotLeft has the following parameter(s):
// An array of integers a. An integer d, the number of rotations.

// Complete the rotLeft function below.
function rotLeft(a, d) {
    const arr = a.slice(0, d);
    a.splice(0, d);
    // destructuring
    a = [...a, ...arr];
    return a
}

console.log('rotLeft', rotLeft([41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51], 10))