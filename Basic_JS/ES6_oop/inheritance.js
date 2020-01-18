// Create a parrent class

class Pet{
    constructor(name){
        this.name = name;
    }
}

// Create Child Class and Extends Our Parent Class

class Dog extends Pet{
    constructor(name,triks) {
        super(name);
        this.triks = triks;

    }

    print(){
        console.log(this.name);
    }
}

var myDog = new Dog('Fiko','Clever')
myDog.print();
console.log(myDog.triks)