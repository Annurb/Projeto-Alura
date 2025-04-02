function conversor(){
    let valor = document.getElementById("valor")
    let res = document.querySelector("div#res")
    let num = Number(valor.value)
    let won = 0.0040
    let resultado = num * won
    res.innerHTML = `<h3> O valor em reais é de R$ ${resultado.toFixed(2)}</h3>`
    valor.value=""
    valor.focus()
}