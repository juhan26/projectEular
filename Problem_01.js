/* Solution 01
var arr = [...Array(10).keys()]
var addition = 0;
for(element in arr){
    if(element % 3 === 0 || element % 5 === 0){
        addition += parseInt(element);
    }
} */

//Solution 02
//var addition = [...Array(10).keys()].filter(element => element%3 == 0 || element%5 == 0).reduce((num1, num2) => num1 + num2, 0)
console.log([...Array(1000).keys()].filter(element => element%3 == 0 || element%5 == 0).reduce((num1, num2) => num1 + num2, 0));