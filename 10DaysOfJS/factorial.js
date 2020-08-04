function factorial(n) {
    let total = 0;
    while (n > 0) {
        const multiply = n * (n - 1);
        if (total != 0) {
            total = total * multiply;
        
        }
        n--
    }
    return total
}

console.log('factorial', factorial(4));