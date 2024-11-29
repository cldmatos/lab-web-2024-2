const produtoBusiness = require("./produto-business");
const produtoModel = require("./produto-model");

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

    if (!produtoProcurado) {        
        return h.response({ message: 'Produto não encontrado' }).code(404);
    }

    return h.response(produtoProcurado).code(200);
}

const atualizarProduto = async (request, h) => {
    const ProdutoId = request.params.id;
    const dadosAtualizados = request.payload;

    const produtoProcurado = await produtoModel.Produto.findByPk(ProdutoId);

    if (!produtoProcurado) {        
        return h.response({ message: 'Produto não encontrado' }).code(404);
    }

    await produtoProcurado.update(dadosAtualizados);
    return h.response(produtoProcurado).code(200);
}

const deletarProduto = async (request, h) => {
    const ProdutoId = request.params.id;

    try {
        const produtoDeletado = await produtoBusiness.deleteById(ProdutoId);
        return h.response(produtoDeletado).code(200);
    } catch (error) {
        return h.response({ message: error.message }).code(404);
    }
};

module.exports = {
    criarProduto,
    consultarProdutos,
    buscarProdutoPorId,
    atualizarProduto,
    deletarProduto
};
