const listaProdutos = [];

const produtoBusiness = require("./produto-business");

const criarProduto = async (request, h) => {

    const result = await produtoBusiness.save(request.payload);
    
    return h.response(result).code(201);
}

module.exports = {criarProduto};