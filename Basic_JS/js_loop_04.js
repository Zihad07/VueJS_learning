
var time = new Date();
console.log(time.getUTCFullYear())

if(time.getFullYear()=== 2020){
    console.log('Happy leap year');
}


days = {
    0:'Sunday',
    1:'Monday',
    2:'TuesDay',
    3:'Wednesday',
    4:'Thursday',
    5:'Friday',
    6:'Saturday'
}

var day= '';
curDate = new Date().getDay()
switch(curDate){
    case 0:
        day = days[curDate]
        break;
    case 1:
        day = days[curDate]
        break;
    case 2:
        day = days[curDate]
        break;
    case 3:
        day = days[curDate]
        break;
    case 4:
        day = days[curDate]
        break;
    case 5:
        day = days[curDate]
        break;
    default:
        day = days[curDate]
        break;

        
}

console.log(day?day:'No days to day');

// for (const key in days) {
//     if (days.hasOwnProperty(key)) {
//         const element = days[key];
//         console.log(element)
        
//     }
// }

var number = [1,2,3,4];

for(const key in number){
    console.log(key,':',number[key])
}
console.log('-----------------------\n');
for (const value of  number) {
    console.log(value);
}