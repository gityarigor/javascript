function gerartabuada() {
    let numtab = document.getElementById(`numtab`)
    let tabuada = document.getElementById(`tabuada`)
    let p = 1
    
    if (numtab.value.length == 0 || numtab.value.length <= 0) {
        tabuada.innerHTML = `IMPOSSIVEL FAZER A TABUADA!`
    } else {
        tabuada.innerHTML = `Tabuada: <br>`
        let ntab = Number(numtab.value)
        let p = Number(1)
        if (p <= 10) {
            tabuada.innerHTML += `${ntab} x ${p} = `
        }
    }
}