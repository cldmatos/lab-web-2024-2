const produtoController = require("./produto-controller");
const produtoSchema = require("./produto-schema");

const baseVersion = '/v1';

const routes = [
    {
        method: "POST",
        path: `${baseVersion}/produtos`,
        options: {
            handler: produtoController.novoProduto,
            validate: produtoSchema.criarProdutos
        }   
    },
    {
        method: "PUT",
        path: `${baseVersion}/produtos/{id}`,
        options: {
            handler: produtoController.atualizarProduto,
            validate: produtoSchema.atualizarProduto
        }
    },
    {
        method: "DELETE",
        path: `${baseVersion}/produtos/{id}`,
        options: {
            handler: produtoController.deletarProduto
        }
    },
    {
        method: "GET",
        path: `${baseVersion}/produtos/{id}`,
        options: {
            handler: produtoController.buscarProdutoPorId,
            validate: produtoSchema.buscarProdutoPorId
        }
    },
    {
        method: "GET",
        path: `${baseVersion}/produtos`,
        options: {
            handler: produtoController.buscarProdutosPorFiltro,
            validate: produtoSchema.buscarProdutosPorFiltro
        }
    }
];

module.exports = routes;
