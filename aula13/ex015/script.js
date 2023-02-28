function verificar(){
    var data = new Date()
    var ano =  data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'crian-m.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jov-m.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'adulto-m.png')
            } else {
                // idoso
                img.setAttribute('src', 'idos-m.png')
            }
        } else if (fsex[1].checked) { 
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'crian-f.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jov-f.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'adulto-f.png')
            } else {
                // idoso
                img.setAttribute('src', 'idos-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${gênero} com ${idade} anos.</p>`
        res.appendChild(img)
    }
}