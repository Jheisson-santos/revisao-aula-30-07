const prompt = require('prompt-sync')({sigint: true})
const produto = require('./produto.js')

while(true){
    console.log(`
          _____________________________________
         |                                     |
         |     MENU DE CADASTRO DE PRODUTO     |
         |      1 - Adicionar Produto          |
         |      2 - Editar Produto             |
         |      3 - Remover Produto            |  
         |      4 - Listar Produtos            |
         |      9 -       Sair                 |
         |_____________________________________|
         `);
         
    let inp = +prompt('')
    switch(inp){
        case 1:
        produto.add()
        break;
        case 2:
        produto.edit()
        break;
        case 3:
        produto.remove()
        break;
        case 4:
        produto.listar()
        break;
        case 9:
        process.exit()
        break;
        default:
        console.log('Opção invalida!')
        break;
    }
    }