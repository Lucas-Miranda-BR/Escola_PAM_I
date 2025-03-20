let segundos = 0;
let minutos = 0;
let horas = 0;

let timer = document.createElement('h1');
timer.style.fontSize = "48px"
timer.style.fontFamily = "Indie Flower"
timer.style.color = "#000000"

setInterval(() => {
    segundos++

    if (segundos > 59) {
        minutos++;
        segundos = 0;
    }
    if (minutos > 59) {
        horas++;
        minutos = 0;    
    }
    
    timer.innerText = (`${horas} : ${minutos} : ${segundos}`)

}, 1000);

document.querySelector("body").appendChild(timer);