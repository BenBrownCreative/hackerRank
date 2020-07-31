function fizzBuzz(n) {
    let i = 0;
    
    while (i < n) {
        // loop through all numbers starting with 1
        i++
        // check to see if its both
        if (i % 5 === 0 && i % 3 === 0) {
            console.log('FizzBuzz')
        }
        // check to see if its either
        else if (i % 5 === 0) {
            console.log('Buzz')
        } 
        else if (i % 3 === 0) {
            console.log('Fizz')
        }
        // console log the number
        else {
            console.log(i)
        }
    }

}

fizzBuzz(16);