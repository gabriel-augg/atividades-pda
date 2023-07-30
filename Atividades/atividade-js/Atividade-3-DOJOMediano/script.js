var nota1 = parseFloat(prompt("Nota 1"))
var nota2 = parseFloat(prompt("Nota 2"))
var nota3 = parseFloat(prompt("Nota 3"))
var media = (nota1 + nota2 + nota3) / 3

if (media > 8 && media <= 10) {
    alert("parabéns pelo desenpenho!")
} else if ( media >= 6 && media <= 8) {
    alert("boa chegou lá!")
} else {
    alert("infelizmente foi reprovado!")
}