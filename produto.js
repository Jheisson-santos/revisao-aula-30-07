const prompt = require('prompt-sync')({sigint: true})
let produto = []

validarIndice = (indice)=> indice > produto.length || indice < 1 || isNaN(indice)
let add = ()=>{
    let nome = prompt('Digite o nome do produto: ').trim()
    let valor = +prompt('Digite o valor do produto: ').replace(',','.')
    if(!isNaN(valor) && valor > 0 && nome != ''){
    produto.push({nome, valor})
    console.log(produto);
}else{
    console.log('Dados invalidos. Digite novamente:');
    add()
}
}
module.exports.add = add
let edit = ()=>{
    listar()
    let lista = +prompt('Qual lista deseja atualizar? ')
    if(!validarIndice(lista)){
    let editar = prompt('Deseja editar o Produto ou o Valor? ').toLowerCase()
    if(editar == 'produto'){
        let newProduto = prompt('Digite o produto atualizado: ')
        produto[lista - 1].nome = newProduto
    }else if(editar == 'valor'){
        let newValor = prompt('Digite o produto atualizado: ')
        produto[lista - 1].valor = newValor
    }
} else {
    console.log('Lista não encontrada');
    edit()
}
}
module.exports.edit = edit
let remove = ()=>{
listar()
let remover = +prompt('Qual lista de produto deseja remover? ')
produto.splice(remover -1, 1)
}
module.exports.remove = remove
let listar = ()=>{
    console.log('-------------------------------------------------');
    produto.forEach((element, index)  => {
        console.log(`Lista ${index + 1}\n\nProduto: ${element.nome}\nPreço: R$${element.valor}\n-------------------------------------------------`);
    });
}
module.exports.listar = listar