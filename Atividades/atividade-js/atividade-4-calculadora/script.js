

function calculadora() {
    var num1 = parseFloat(prompt("digite um numero"))
    var num2 = parseFloat(prompt("digite outro numero"))
    var operador = prompt("digite o operador")
    if (operador == "+") {
        alert(num1 + num2)
    } else if (operador == "-") {
       alert(num1 - num2)  
    } else if (operador == "*") {
        alert(num1 * num2)  
    } else if (operador == "/") {
        alert(num1 / num2) 
    }
}

calculadora()