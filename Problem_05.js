function getSmallestDivisor(n){
    var i = n;
  
    // if not 0 then i++
    function checkI(i){
        for (var j = 1; j <= n; j++) {
            // loop 20 % i   where i goes from 1 to 20  must % = 0
            if( i % j !== 0 ){
                return false;
            }
        };
      return true;
    }
    // break loop when n all are 0
    while( !(checkI(i)) ){ i+=n; }
    return i;
  }

  console.log(getSmallestDivisor(20));