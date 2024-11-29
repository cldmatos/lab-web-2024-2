    const produtoController = require("./produto-controller");
    const produtoSchema = require("./produto-schema");

    const baseVersion = '/v1';

    const routes = [
        {
            method: "POST",
            path: `${baseVersion}/produtos`,
            options: {
                handler: produtoController.criarProduto,
                validate: produtoSchema.criarProduto
            }   
        },
        {
            method: "GET",
            path: `${baseVersion}/produtos`,
            options: {
                handler: produtoController.consultarProdutos,
                validate: produtoSchema.consultarProdutos
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
            method: "PUT",
            path: `${baseVersion}/produtos/{id}`,
            options: {
                handler: produtoController.atualizarProduto,
                validate: produtoSchema.buscarProdutoPorId
            }
        }
    ];

    module.exports = routes;
