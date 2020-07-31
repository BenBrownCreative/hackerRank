// Emma is playing a new mobile game that starts with consecutively numbered clouds. 
// Some of the clouds are thunderheads and others are cumulus. 
// She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . She must avoid the thunderheads. 
// Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. It is always possible to win the game.

// Complete the jumpingOnClouds function in the editor below. It should return the minimum number of jumps required, as an integer.

'use strict';

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    let steps = 0;
    // start on space 0;
    c.shift();
    while (c.length > 0) {
        // check to see if jumping 2 spaces is possible, if not just jump 1
        c[1] === 0 ? c.splice(0, 2) : c.splice(0, 1);
        console.log(c);
        steps++
    }
    return steps

}

console.log('jumpingOnTheClouds', jumpingOnClouds([0,1,0,0,0,1,0]))