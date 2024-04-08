var originalTarget = 600851475143;
var target = originalTarget;
var i = 2;
while(i<target) {
	while(target%i === 0) {(function(newtarget){
        target = newtarget;
        })(target / i)
    }
    i++;
}

console.log(target);