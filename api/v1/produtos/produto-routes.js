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
    }
];

module.exports = routes;