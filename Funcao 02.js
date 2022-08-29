// 1 1
var valor
VerificarValor();

function VerificarValor () {
    valor = parseInt(prompt("Digite um numero: "))
    if (valor > 0) {
        valor = 1
        return valor
    }
    else if (valor < 0) {
        valor = -1
        return valor
    }
    else if (valor == 0) {
        valor = 0
        return valor

    }
}
console.log(valor)