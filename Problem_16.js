var a = Math.pow(2, 1000);
console.log(a)
var r = [];
while(a>0){
    r.unshift(a%10);
    a = Math.floor(a/10);
}
console.log(r.join(''));
x = r.copyWithin()
console.log(x.reduce((x,y) => x+y));
