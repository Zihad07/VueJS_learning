// ES6 CLASS

class Person {
    constructor (firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = dob;
    }

    // Prototype
    greetting() {
        return `Hello there ${this.fistName} ${this.lastName}`;
    }

    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}


const nahid = new Person('Nahid', 'hasan', '1-12-1993');

console.log(nahid.greetting());