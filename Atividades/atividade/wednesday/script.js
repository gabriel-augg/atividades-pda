var suspeitoUm = "Não sou eu!!"
var suspeitoDois = "Tentei te ajudar desde o início!!"
var suspeitoTres = "Já pensou que o monstro pode ser controlado?"

var totalCaractereSuspeitoUm = suspeitoUm.length
var totalCaractereSuspeitoDois = suspeitoDois.length
var totalCaractereSuspeitoTres = suspeitoTres.length

if(totalCaractereSuspeitoUm > totalCaractereSuspeitoDois && totalCaractereSuspeitoUm > totalCaractereSuspeitoTres) {
    console.log("O suspeito um é a culpada!!")
} else if (totalCaractereSuspeitoDois > totalCaractereSuspeitoUm && totalCaractereSuspeitoDois > totalCaractereSuspeitoTres) {
    console.log("O suspeito dois é o culpado!!")
} else {
    console.log("O suspeito três é o culpado!!")
}

console.log(totalCaractereSuspeitoUm + "\n" + totalCaractereSuspeitoDois + "\n" + totalCaractereSuspeitoTres)