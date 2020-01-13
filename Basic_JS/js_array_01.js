
var cars = ['volbo','toyota','tata']

// cars.forEach(function(item){
//     console.log(item)
// });

// cars.push('new car');
// console.log(cars);
// console.log(cars.pop());

console.log(cars.toString());
console.log(cars.join('-'));

function fun(x){
    console.log(x);
}

// fun(cars);
// delete cars[0];
// cars.shift();
// fun(cars);

// console.log(cars.splice(0, 1));
// console.log(cars.splice(0));
fun(cars)
fun(cars.slice())
fun(cars)

var number = [9,99,1,33,444,3];
fun(number);
// number.sort();
number.sort(function(a,b){
    return a-b; // asending
    // return b-a; // descending
})
fun(number)

function maxValue(arr){
    return Math.max.apply(null,arr);
}
function minValue(arr){
    return Math.min.apply(null,arr);
}

fun(maxValue(number));
fun(minValue(number));

var cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];

fun(cars);

cars.sort((a,b)=>  a.year-b.year);
fun(cars)