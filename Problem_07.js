/*
function isPrime(num){
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}
*/

function prima(N){
    let bil = 1;
    let hasil = 0;
    while(hasil < N){
        bil = bil +1;
        for(var i = 2; i <= bil; i++){
            if(bil % i === 0){
                break;
            }
        }
        if(i == bil){
            hasil = hasil + 1;
        }
    }
    return bil;
}

console.log(prima(10001));