

var value;
var car = ['volvo'];

try{
    console.log(car[1]);

}catch(err){
    console.log(err);
}

console.log('passing');

var person = {
    fistName : 'Mosior',
    lastName : 'Ahmend',
    id:5566,
    fullName : function() {return this.fistName+' '+this.lastName;},
    myFunction: function(){
        return this;
    }

}

var person1 ={
    fistName:'Steve',
    lastName:'smith'
}

// console.log(person.fullName());

// var myThis = person.myFunction();
// console.table(myThis);
// console.log(myThis.id);

console.log(person.fullName.apply(person1));
