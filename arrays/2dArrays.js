// Given a 6X6 2D Array arr, We define an hourglass in A to be a subset of values with indices falling in this pattern in arr's graphical representation:
//There are 16 hourglasses in arr, and an hourglass sum is the sum of an hourglass' values. 
// Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum.

// Complete the hourglassSum function below.
function hourglassSum(arr) {
    let a = [...arr[0], ...arr[1], ...arr[2], ...arr[3], ...arr[4], ...arr[5]]

    let total;
    let i = 0;


    while (i < 32) {
        if ((i > -1 && i < 4) || (i > 5 && i < 10) || (i > 11 && i < 16) || (i > 17 && i < 22) || (i > 23 && i < 28) || (i > 29 && i < 34)) {
            const two = i + 1;
            const three = i + 2;
            const four = i + 7;
            const five = i + 12;
            const six = i + 13;
            const seven = i + 14;
            const tot = a[i] + a[two] + a[three] + a[four] + a[five] + a[six] + a[seven]
            if (total == undefined || tot > total) total = tot
        }
        i++
    }
    return total
}
console.log('hourglassSum', hourglassSum([[-1,-1,-1,0,0,0],[0,-1,0,0,0,0],[-1,-1,-1,0,0,0],[0,0,-2,-4,-4,0],[0,0,0,-2,0,0],[0,0,-1,-2,-4,0]]))