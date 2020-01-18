
var person = {
    fname:'Mehdi',
    lname:'Hasan',
    age: 25
};

// for(x in person){
//     console.log(x);
// }
for(x of person){
    console.log(x);
}