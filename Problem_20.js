function factorial(num){
    if(num === 0){
        return 1;
    }else{
        return num * factorial(num - 1);
    }
}

function sumFactorialDigit(digits){
    return String(digits).split('').map(Number).reduce((x,y) => x+y)
}

console.log(factorial(100))