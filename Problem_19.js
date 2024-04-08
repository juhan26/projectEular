let minggu = 0;
for(let tahun = 1901; tahun <= 2000; tahun++){
    for(let bulan = 0; bulan <= 11; bulan++){
        if(new Date(tahun, bulan, 1).getDay() === 0){
            ++minggu;
        }
    }
}

console.log(minggu);