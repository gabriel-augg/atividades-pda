var valor1 = parseInt(prompt("Digite aqui o primeiro valor"))
var operacao = prompt("Digite a operação que você quer fazer")
var valor2 = parseInt(prompt("Digite o segundo valor"))

function calcular(valor1, operacao, valor2) {
    if (operacao == "+") {
        return soma(valor1, valor2)
    } else if (operacao == "*") {
        return multiplicacao(valor1, valor2)
    } else if (operacao == "/") {
        return divisao(valor1, valor2)
    } else {
        return subtracao(valor1, valor2)
    }
}  


function soma(valor1, valor2){
    return valor1 + valor2
}

function multiplicacao(valor1, valor2){
    return valor1 * valor2
}

function divisao(valor1, valor2){
    return valor1 / valor2
}

function subtracao(valor1, valor2){
    return valor1 - valor2
}

function exibir(valor1, operacao, valor2){

    return alert(calcular(valor1, operacao, valor2))
}

exibir(valor1, operacao, valor2)

