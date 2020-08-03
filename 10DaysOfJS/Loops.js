
// Complete the vowelsAndConsonants function.
// Print your output using 'console.log()'.

function vowelsAndConsonants(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const arr = s.split('');
    let arrConsonants = [];
    
    const arrVowels = arr.filter(letter => {
        const isVowel = vowels.find(vowel => {
            if (vowel === letter) {
                return true
            }
        });
        if (isVowel === undefined) {
            arrConsonants.push(letter);
        }

        return isVowel
    }).join();

    arrConsonants = arrConsonants.join();
    
    return `${arrVowels},${arrConsonants}`
    
}

console.log('vowelsAndConsonants', vowelsAndConsonants('javascriptloops'));