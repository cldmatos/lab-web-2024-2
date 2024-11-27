const listaProdutos = []; 

const produtoBusiness = require("./produto-business");

const criarProduto = async (request, h) => {

    const result = await produtoBusiness.save(request.payload);
    
    return h.response(result).code(201);
}

const consultarProdutos = async (request, h) => {
    
    const result = await produtoBusiness.list(request.query);  

    return result;
}

const buscarProdutoPorId = async (request, h) => {
    try {
        const produtoId = request.params.id;
       
        const produto = listaProdutos.find(p => p.id === produtoId);
        if (!produto) {
            return h.response({ message: "Produto não encontrado" }).code(404);
        }

        return h.response(produto).code(200);
    } catch (error) {
        console.error("Erro ao buscar produto:", error);
        return h.response({
            message: "Erro interno no servidor.",
            error: error.message
        }).code(500);
    }
};

module.exports = {criarProduto, consultarProdutos};