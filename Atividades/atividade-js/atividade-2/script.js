
// Colocar percentual de reajuste
// inserir texto com o javascript
// colocar parsefloat

function verificar() {
    var resultado = document.getElementById("resultado")
    var resul = document.getElementById("resul")
    var salario = document.getElementById("butao").valueAsNumber
    if (salario < 280) {
        resul.innerHTML = salario * 0.2
        salario += salario * 0.2
        resultado.innerHTML = salario
    } else if (salario > 280 && salario < 700) {

        resul.innerHTML = salario * 0.15
        salario += salario * 0.15
        resultado.innerHTML = salario

    } else if (salario > 700 && salario < 1500) {
        resul.innerHTML = salario * 0.1
        salario += salario * 0.1
        resultado.innerHTML = salario
    } else if ( salario > 1500) {
        resul.innerHTML = salario * 0.05
        salario += salario * 0.05
        resultado.innerHTML = salario
    }
}