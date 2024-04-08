/*
var sumOfSquare = [...Array(101).keys()].map(x => x * x).reduce((x, y) => x + y, 0)
var squareOfSum = Math.pow([...Array(101).keys()].reduce((x, y) => x + y, 0), 2)
console.log(squareOfSum - sumOfSquare)
*/

console.log(Math.pow([...Array(101).keys()].reduce((x, y) => x + y, 0), 2) - [...Array(101).keys()].map(x => x * x).reduce((x, y) => x + y, 0))