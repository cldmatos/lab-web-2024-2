const listaProdutos = [];

const produtoBusiness = require("./produto-business");

const novoProduto = async (request, h) => {
    try {
        const result = await produtoBusiness.save(request.payload);
        return h.response(result).code(201);
    } catch (error) {
        console.error("Erro ao salvar produto:", error); // Captura do erro completo
        return h.response({
            message: "Erro interno no servidor.",
            error: error.message
        }).code(500);
    }
}

module.exports = {novoProduto};