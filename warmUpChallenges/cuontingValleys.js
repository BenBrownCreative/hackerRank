
// gary likes hiking

// n - steps
// u - uphill
// d - downhill


// Complete the countingValleys function below.
function countingValleys(n, s) {
    let valleyCounter = 0;
    let elevation = 0;
    
    for (let i = 0; i < n; i++) {
        // going up
        if (s[i] === 'U') {
            elevation++
            // if (elevation === 1) valleyCounter++ 
        } 
        // going down
        else {
            elevation--
            if (elevation === -1) valleyCounter++ 
        }

    }
    return valleyCounter;

}

console.log('countingValleys', countingValleys(8, 'UDDDUDUU'))