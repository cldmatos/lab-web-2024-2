const listaProdutos = [];  // Banco de dados simulado (substituir por BD real)

const produtoBusiness = require("./produto-business");

const novoProduto = async (request, h) => {
    try {
        const result = await produtoBusiness.save(request.payload);
        return h.response(result).code(201);
    } catch (error) {
        console.error("Erro ao salvar produto:", error);
        return h.response({
            message: "Erro interno no servidor.",
            error: error.message
        }).code(500);
    }
};

const atualizarProduto = async (request, h) => {
    try {
        const produtoId = request.params.id;
        const dadosAtualizados = request.payload;

        // Simulação de atualização no banco de dados (substituir com lógica de BD real)
        const produtoExistente = listaProdutos.find(p => p.id === produtoId);
        if (!produtoExistente) {
            return h.response({ message: "Produto não encontrado" }).code(404);
        }

        Object.assign(produtoExistente, dadosAtualizados);  // Atualiza os campos
        return h.response(produtoExistente).code(200);
    } catch (error) {
        console.error("Erro ao atualizar produto:", error);
        return h.response({
            message: "Erro interno no servidor.",
            error: error.message
        }).code(500);
    }
};

const deletarProduto = async (request, h) => {
    try {
        const produtoId = request.params.id;

        // Simulação de exclusão lógica (substituir por lógica de BD real)
        const produtoIndex = listaProdutos.findIndex(p => p.id === produtoId);
        if (produtoIndex === -1) {
            return h.response({ message: "Produto não encontrado" }).code(404);
        }

        // Marca o produto como inativo (exclusão lógica)
        listaProdutos[produtoIndex].status = 'inativo';
        return h.response({ message: "Produto excluído com sucesso" }).code(200);
    } catch (error) {
        console.error("Erro ao excluir produto:", error);
        return h.response({
            message: "Erro interno no servidor.",
            error: error.message
        }).code(500);
    }
};

const buscarProdutoPorId = async (request, h) => {
    try {
        const produtoId = request.params.id;

        // Busca produto no banco de dados simulado
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

const buscarProdutosPorFiltro = async (request, h) => {
    try {
        const { categoria, nome } = request.query;

        // Filtra os produtos pela categoria e nome (simulação de consulta ao banco)
        let produtosFiltrados = listaProdutos;

        if (categoria) {
            produtosFiltrados = produtosFiltrados.filter(p => p.categoria === categoria);
        }

        if (nome) {
            produtosFiltrados = produtosFiltrados.filter(p => p.nome.includes(nome));
        }

        return h.response(produtosFiltrados).code(200);
    } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        return h.response({
            message: "Erro interno no servidor.",
            error: error.message
        }).code(500);
    }
};

module.exports = {
    novoProduto,
    atualizarProduto,
    deletarProduto,
    buscarProdutoPorId,
    buscarProdutosPorFiltro
};
