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

    const produtoProcurado = await produtoModel.Produto.findByPk(ProdutoId);

    if (produtoProcurado) {
        return h.response(produtoProcurado).code(200);
    }

    return h.response().code(404);
}

const atualizarProduto = async (request, h) => {
    const ProdutoId = request.params.id;
    const dadosAtualizados = request.payload;

    const produtoProcurado = await produtoModel.Produto.findByPk(ProdutoId);

    if (!produtoProcurado) {
        return h.response().code(404);
    }

    await produtoProcurado.update(dadosAtualizados);

    return h.response(produtoProcurado).code(200);
};

module.exports = { 
    criarProduto, 
    consultarProdutos, 
    buscarProdutoPorId,
    atualizarProduto
};