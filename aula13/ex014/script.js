function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora < 12) {
        img.src = './imagens/foto-manhã.png'
        document.body.style.background = '#ccb148'
    } else if (hora >= 12 && hora < 18) {
        img.src = './imagens/foto-tarde.png'
        document.body.style.background = '#e69142'
    } else {
        img.src = './imagens/foto-noite.png'
        document.body.style.background = '#3a2e4e'
    }
}