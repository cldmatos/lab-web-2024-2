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
    }
];

module.exports = routes;
