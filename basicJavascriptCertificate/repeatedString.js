// Given an integer, n , find and print the number of letter a's in the first n letters of Lilah's infinite string.

// lilah's string
// const s = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const s = 'aba';
// n = number of total letters to evaluate
const n = 10;
// const n = 534802106762;

// this seemed to be the most efficient solution if the numbers are large
function repeatedString(s, n) {
    let len = s.length; // length of string
    let arr = s.split(''); // array of string

    // a is the nuber of a's per string
    let aPerString = arr.filter(x => x === 'a');

    // divide n by the len and multiply by a
    let t = parseInt(n / len)
    let total = t * aPerString.length;

    let remainer = n % len
        // get the number of characters that remain

    if (remainer > 0) {
        let r = arr.splice(0, remainer);
        let rTotal = r.filter(x => x === 'a')
        total = total + rTotal.length;
    }
    
    // repeat the substring until you have enough length
    return total
    
}



// this one could not handle such a large string
function repeatedString1(s, n) {
    // repeat the substring until you have enough length
    while (s.length < n) {
        s = s + s;
    }
    // trim it to the exact length
    let substring = s.substring(0, n);
    // split string letters into an array
    let arr = substring.split('');

    // filter out the a's to a new array
    const a = arr.filter(x => x === 'a');
    return a.length;
}

// problem with run time
function repeatedString2(s, n) {
    let len = s.length; // length of string
    let arr = s.split(''); // array of string
    let total = 0; // this will be returned
    let i = 0;
    // loop through array 
    // count occurances of 'a'
    // see if we need to loop again
    while (i < n) {
        if (len <= n - i) {
            let a = arr.filter(x => x === 'a');
            total = total + a.length;
        } else {
            const left = n - i;
            const aNew = arr.splice(0, left);
            total = total + aNew.length;
        }
        i = i + len
    }
    
    // repeat the substring until you have enough length
    return total
    
}
console.log('repeatedString', repeatedString(s, n));