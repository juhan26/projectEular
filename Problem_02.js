/*var fib = [1, 2];
for(let i = 2; i < 4000000; i++){
    fib[i] = fib[i-2] + fib[i-1]
}

console.log(fib.filter(element => element % 2 === 0).reduce((num1, num2) => num1 + num2, 0))
*/

var sum = 2;
var first = 1;
var second = 2;
var third = 0;
while(third < 4000000){
    third = first + second;
    first = second;
    second = third;
    if(third % 2 == 0){
        sum += third;
    }
}
console.log(sum);