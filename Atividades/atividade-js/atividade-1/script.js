

function verificar() {
    var debito = document.getElementById("saldo").valueAsNumber
    var valorBolsa = 200
    if (debito >= valorBolsa) {
        debito -= valorBolsa
        let resultado = document.getElementById("resultado")
        resultado.innerHTML = "Compra aprovada! Confira seu limite disponível: R$" + debito
    } else {
        resultado.innerHTML = "Compra recusada! Você não possui saldo suficiente. seu saldo é de: R$" + debito
    }
}