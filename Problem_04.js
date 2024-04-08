// var palindromeArray = [];

// function isPalindrome(num){
//     reverseString = String(num);
//     if(reverseString.split('').reverse().join('') === reverseString){
//         return true;
//     }else{
//         return false;
//     }
// }

// for(let i = 100; i <= 999; i++){
//     for(let j = 100; j <= 999; j++){
//         if(isPalindrome(i * j)){
//             palindromeArray.push(i * j);
//         }
//     }
// }

// console.log(palindromeArray.reduce((x, y) => x > y ? x : y))

// //console.log(isPalindrome(9009))







// fungsi ini mengubah angka menjadi string, membalikkan string, dan membandingkan apakah string awal dan yang dibalik sama.
function palindrome(bil) {
    const bilStr = String(bil);
    const bilReversed = bilStr.split('').reverse().join('');
    return bilStr === bilReversed;
    
}

let palindromeTerbesar = 0;

for (let i = 100; i < 1000; i++){
    for (let j = 100; j < 1000; j++){
        const hasil = i * j;

        if (palindrome(hasil) && hasil > palindromeTerbesar){
            palindromeTerbesar = hasil;
        }

    }

}

console.log("Palindrome terbesar dari hasil perkalian dua angka berdigit tiga adalah: " + palindromeTerbesar);


