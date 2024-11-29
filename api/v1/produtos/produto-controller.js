const listaProdutos = []; 

const produtoBusiness = require("./produto-business");
const produtoModel = require('./produto-model');

const criarProduto = async (request, h) => {

    const result = await produtoBusiness.save(request.payload);
    
    return h.response(result).code(201);
}

const consultarProdutos = async (request, h) => {
    
    const result = await produtoBusiness.list(request.query);  

    return result;
}

const buscarProdutoPorId = async (request, h) => {
    const ProdutoId = request.params.id;

    // Usando Sequelize para buscar o produto no banco de dados
    const produtoProcurado = await produtoModel.Produto.findByPk(ProdutoId);

    if (produtoProcurado) {
        return h.response(produtoProcurado).code(200);
    }

    return h.response().code(404);
};

module.exports = {criarProduto, consultarProdutos, buscarProdutoPorId};