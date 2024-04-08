for(let i = 0; i <= 1000; i++){
    for(let j = 0; j <= 1000; j++){
        for(let k = 0; k <= 1000; k++){
            if(i + j + k === 1000 && i < j && j < k && i < k){
                if(Math.pow(i, 2) + Math.pow(j, 2) === Math.pow(k, 2)){
                    console.log("i:" + i + ", j:" + j + ", k:" + k);
                    console.log("Product: " + i*j*k);
                }
            }
        }
    }
}