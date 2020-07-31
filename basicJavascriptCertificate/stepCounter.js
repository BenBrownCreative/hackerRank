
function getFixedCounter(k) {
    class stepCounter {
        constructor (k) {
            this.value = 0
            this.step = k
        }

        // methods for the Person class
        getValue() {
            return this.value;
        }
        decrement() {
            this.value = this.value - this.step;
        }
        increment() {
            this.value =  this.value + this.step;
        }
    }

    return new stepCounter(k);
}