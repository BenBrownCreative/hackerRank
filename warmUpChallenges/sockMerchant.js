// https://www.hackerrank.com/challenges/sock-merchant/problem

//Return the total number of matching pairs of socks that John can sell.
function sockMerchant(n, ar) {
    // split the string into an array
    const socks = ar.split(' ');
    let pairs = 0;

    // reduce to single object, loops over array and executes function
    // initial value = group
    // item = current item in the array
    let group = socks.reduce((initialValue, item) => {
        initialValue[item] = [...initialValue[item] || [], item];
        return initialValue;
    }, {});

    // Object.keys returns array of an object by selecting each key
    // we can then use forEach on that array
    Object.keys(group).forEach(function(key) {
        pairs = pairs += parseInt(group[key].length / 2);      
    });
    return pairs
}

console.log('sockMerchant', sockMerchant('9', '10 20 20 10 10 30 50 10 20'));



