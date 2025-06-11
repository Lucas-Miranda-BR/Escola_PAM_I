let se = 0;
let min = 0;
let ho = 0;

setInterval(() => {
    se++

    if (se > 59) {
        min++;
        se = 0;
    }
    if (min > 59) {
        ho++;
        min = 0;    
    }
    
    console.log(`${ho} : ${min} : ${se}`);
}, 1000);

