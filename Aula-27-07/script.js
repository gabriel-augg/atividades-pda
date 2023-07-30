var nome = prompt("Digite seu nome")


function contar(nome) {
    return nome.length
}

function exibir(funcao, nome) {
    document.write(`<h1>${nome} = : ${funcao}</h1>`)
}

exibir(contar(nome), nome)