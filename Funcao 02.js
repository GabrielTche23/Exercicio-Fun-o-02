// 1 1
/*var valor
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
console.log(valor)*/

// 1.2
/*var valor,nota100,nota50,nota10,nota5,nota1

valor = parseInt(prompt(("Digite um valor que deseja decompor em notas de 100,50,10,5,1: ")))
DecomporValor();
function DecomporValor(){
nota100 = Math.floor(valor / 100)
valor = valor%100
nota50 = Math.floor(valor/50)
valor = valor%50
nota10 = Math.floor(valor/10)
valor = valor%10
nota5 = Math.floor(valor/5)
valor = valor%5
nota1 = Math.floor(valor/1)
valor = valor%1
return valor
}
console.log("Notas de 100 : ", nota100, "Notas de 50: ", nota50, "Notas de 10: ", nota10, 'Notas de 5: ', nota5, "Notas de 1: ", nota1)*/

//1.3
var nomes = []
var senhas = []
var nome = prompt("Digite seu nome: ")
var senha = prompt("Digite sua senha: ")
var opcao

function EscolherOpcao(){
    opcao = prompt("O que deseja fazer? 1 - Cadastrar / 2 - Login / 3 - Excluir Cadastro / 4 - Encerrar Programa")
    return opcao
}