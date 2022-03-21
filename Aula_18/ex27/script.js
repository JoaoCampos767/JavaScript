function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora sao ${hora} horas.`;

    if(hora >= 0 && hora < 12){
        img.src = 'manha.png';
        document.body.style.background = '#fdd7ca';
    } else if(hora >= 12 && hora <= 18){
        img.src = 'tarde.png';
        document.body.style.background = '#65381e';
    } else {
        img.src = 'noite.png';
        document.body.style.background = '#254d7d';
    }
}