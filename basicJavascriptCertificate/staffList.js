
class StaffList {
    //add your code here
    constructor() {
        this.members = []
    }
    add(name, age) {
        if (age > 20) {
            this.members.push(name)
            // add to the collection
        } else if (age <= 20) {
            throw new Error('Staff member age must be greater than 20')
        }
    }

    remove(name) {
        // name is in collection
        if (this.members.indexOf(name) > -1) {
            // remove member
            const i = this.members.indexOf(name);
            if (i > -1) {
                this.members.splice(i, 1);
            }
            return true
        } else {
            return false
        }
    }

    getSize() {
        return this.members.length
    }
}
// name is in collection
const Ben = new StaffList();
Ben.add('ben', 24)
Ben.add('joe', 29)