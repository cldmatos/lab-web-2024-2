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


module.exports = {criarProduto, consultarProdutos};