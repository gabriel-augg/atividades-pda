var valor1 = parseInt(prompt("Digite o primeiro valor da soma"))
var valor2 = parseInt(prompt("Digite o segundo valor"))

function soma(primeiro, segundo){
    let total = primeiro + segundo
    return alert(`O valor da soma é: ${total}`)
}

soma(valor1, valor2)