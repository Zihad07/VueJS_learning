class Person {
    constructor (firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        
    }

    // Prototype
    greetting() {
        return `Hello  ${this.firstName} ${this.lastName}`;
    }
}

// sub class
class Customer extends Person{
    constructor(firstName, lastName, phone){
        super(firstName, lastName);
        this.phone = phone;

    }

    // override method
    greetting() {
        return {
            firstName : this.firstName,
            lastName : this.lastName,
            contactNo: this.phone
        };
    }
}


const customer = new Customer('Steve','Costa','070707070');
console.table(customer.greetting())