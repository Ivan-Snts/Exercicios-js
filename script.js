function carregar (){

var msg = document.getElementById ('msg')
var img = document.getElementById ('imagem')
var data = new Date ()
var hora = data.getHours()
var minuto = data.getMinutes()

msg.innerHTML = `Agora são ${hora}:${minuto} minutos`
if(hora >= 0 && hora < 12 ) {
   img.src = 'imagens/manha.png'
    document.body.style.background = '#e2cd9f'
    img.style.width = '370px'
    img.style.padding = '50px'
    
}else if (hora >= 12 && hora < 18){
    img.src = 'imagens/tarde.png'
    document.body.style.background = '#b9846f'
}else{
   img.src = 'imagens/noite.png'
    document.body.style.background = '#515454'
}
}