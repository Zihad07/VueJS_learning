
function print(x){
    console.log(x);
}

// print(typeof(1));

var length = 16
var lastName = 'Steve'
var x = {
    firstName:'steve',
    lastName:'Smith'
};

var true_value = true;
var false_value = true;

print(Boolean(null));
// Data Type number,string,object
// print(typeof(x));



var global = 3;

// function mylocal(){
//     var localVar = 4;
//     console.log('Gloval: ',global);
// }

// mylocal();

// console.log(localVar);


// Object

var person = {
    fistName : 'steve',
    lastName:'smith',
    age:20,
    eyeColor: 'Blue',
    fullName: function(){
        return this.fistName+' '+this.lastName;
    }
}

print(person.fullName());
print(person.apple===undefined);


// String
var name = 'mehdi';
print(name.length)

// if not fine it returns -1
print(name.indexOf('jhk'))

print(name.slice())
print(name)
print(name.substr(0,5))


print(name.toUpperCase())

// convertin string to array 

print('i am good boy'.split(' '))

var myarr = 'i am good boy'.split(' ');

print(myarr.join('-'))

for(var i = 0; i<name.length; i++){
    console.log(name[i],':',name.charCodeAt(i))
}