//const listaProdutos = [];  // Banco de dados simulado (substituir por BD real)

const produtoBusiness = require("./produto-business");

const criarProduto = async (request, h) => {

    const result = await produtoBusiness.save(request.payload);
    
    return h.response(result).code(201);
}

const consultarProdutos = async (request, h) => {
    
    const result = await produtoBusiness.list(request.query);  

    console.log(result);

    return result;
}

const consultaPorId = async (request, h) => {

    const idProduto = request.params.id;
    
    const produtoProcurado = listaProdutos.find(produto => produto.id == idProduto);
    if(produtoProcurado) {
        return h.response(ProdutoProcurado).code(200);
    } 

    return h.response().code(404);
}

module.exports = {criarProduto, consultarProdutos, consultaPorId};