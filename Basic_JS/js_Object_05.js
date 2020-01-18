
var person = {
    fname:'Mehdi',
    lname:'Hasan',
    age: 25,

 


};


// for(x in person){
//     console.log(x);
// }

// for(var x of person){
//     console.log(x)
// }

console.table(person)

if(person.fname){
    delete person.fname
}

console.table(person)