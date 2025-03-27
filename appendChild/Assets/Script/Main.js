let acionado = true;

function activateSwitch(){
    let interruptor = document.querySelector('#interruptor');
    let body = document.querySelector('body');
    let lampada = document.querySelector('#lampada');
    let slug = document.querySelector('#slugcat');

    if (acionado == true) {
        interruptor.setAttribute('src', '../Images/Interruptor_Ligado.png');
        lampada.setAttribute('src', '../Images/Lampada_Ligada.png');
        slug.setAttribute('src', '../Images/Saint.webp');
        body.style.backgroundColor= 'white';
    }

    else {
        interruptor.setAttribute('src', '../Images/Interruptor_Desligado.png');
        lampada.setAttribute('src', '../Images/Lampada_Desligada.png');
        slug.setAttribute('src', '../Images/Artificier.webp');
        body.style.backgroundColor="black";
    }
    
    acionado = !acionado;
}