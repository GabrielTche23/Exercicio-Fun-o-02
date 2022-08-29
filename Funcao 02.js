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
var opcao, contador = 0
var continuar = true
var cadastroValido = false;
var nome, senha
var nomesAux = []
var senhasAux = []
var nomeInvalido
EscolherOpcao();
OpcaoEscolhida();

function EscolherOpcao() {
    opcao = prompt("O que deseja fazer? 1 - Cadastrar / 2 - Login / 3 - Excluir Cadastro / 4 - Encerrar Programa")
    nome = prompt("Digite seu nome: ")
    senha = prompt("Digite sua senha: ")
    return opcao
}

function OpcaoEscolhida(name, password) {
    while (continuar) {
        if (opcao == 1) {
            nomes[contador] = nome
            senhas[contador] = senha
            contador++
            console.log(nomes)
            console.log(senhas)
        }
        else if (opcao == 2) {
            if (nomes[contador] == nomes[contador] && senhas[contador] == senhas[contador]) {
                console.log("Seu Login foi Feito com Sucesso.")
                cadastroValido = true
                return cadastroValido
            }
            else {
                console.log("Login invalido por favor verifique seu nome e senha.")
                cadastroValido = false
                return cadastroValido
            }
        }
        else if (opcao == 3) {
            ExcluirCadastro();
        }
        else if (opcao == 4) {
            continuar = false;
            return continuar
        }
        EscolherOpcao();
    }

}

function ExcluirCadastro(name, password) {
    nomeExcluir = prompt("Digite o nome que deseja excluir")
    nomeInvalido = true
    for (var index = 0; index < contador; index++) {
        if (nomeExcluir == nomes[index]) {
            nomes[index] = 0
            senhas[index] = 0
            nomeInvalido = false
            console.log("Cadastro excluido com sucesso")
        }
    }
    for (var atual = 0; atual < contador - 1; atual++) {
        for (var seguinte = atual + 1; seguinte < contador; seguinte++) {
            if (nomes[atual] == 0) {
                nomes[atual] = nomes[seguinte]
                senhas[atual] = senhas[seguinte]
                nomes[seguinte] = 0
                senhas[seguinte] = 0
            }
        }
        for (var index = 0; index < contador; index++) {
            if (nomes[index] != 0) {
                nomesAux[index] = nomes[index]
                senhasAux[index] = senhas[index]
            }
        }
        if (nomeInvalido) {
            console.log("Não achamos um cadastro com esse nome!")
        }
        nomes = nomesAux
        senhas = senhasAux
        nomesAux = []
        senhasAux = []
        contador--
        console.log(nomes)
        console.log(senhas)
    }
}
