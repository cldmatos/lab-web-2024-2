const listaProdutos = [];  // Banco de dados simulado (substituir por BD real)

const produtoBusiness = require("./produto-business");

const criarProduto = async (request, h) => {

    const result = await produtoBusiness.save(request.payload);
    
    return h.response(result).code(201);
}

module.exports = {criarProduto};