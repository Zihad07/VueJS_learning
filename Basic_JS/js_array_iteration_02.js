var numbers = [45, 4, 9, 16, 25];

numbers.forEach((item,index)=>{
    console.log(item,':',index)
})

function map_fun(item){
    return item.toString()+'*'
}

// var mapResult = numbers.map(map_fun);
// console.table(mapResult);

function even(item){
    return !(item%2);
}

var filterResult = numbers.filter(even);
console.log(filterResult);


var num = [1,2,3,4];

function reduceFun(total,value){
    return total+value;
}

var reduceResult = num.reduce(reduceFun);
console.log(reduceResult);

// console.log(numbers.indexOf('4'))