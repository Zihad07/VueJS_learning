
// function Dog(name){
//     this.name = name;
// }

// Dog.prototype.sayHI = function(){
//     return this.name + ' say woof'
// }

class Dog {
    constructor(name){
        this.name = name;
    }

    sayHI(){
        return this.name+' say woof';
    }
}



var fido = new Dog('fido');

console.log(fido.name);
console.log(fido.sayHI());