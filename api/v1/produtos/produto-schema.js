const Joi = require("joi");

const criarProdutos = {
    payload: Joi.object({
        nome: Joi
            .string()
            .min(2)
            .required(),
        quantidade: Joi
            .number()
            .integer()
            .positive()
            .required(),
        preco: Joi
            .number()
            .positive()
            .required()
    })
};

const atualizarProduto = {
    payload: Joi.object({
        nome: Joi
            .string()
            .min(2)
            .optional(),
        quantidade: Joi
            .number()
            .integer()
            .positive()
            .optional(),
        preco: Joi
            .number()
            .positive()
            .optional(),
        status: Joi
            .string()
            .valid("ativo", "inativo")
            .optional()
    })
};

const buscarProdutoPorId = {
    params: Joi.object({
        id: Joi.string().required()
    })
};

const buscarProdutosPorFiltro = {
    query: Joi.object({
        categoria: Joi.string().optional(),
        nome: Joi.string().optional()
    })
};

module.exports = {
    criarProdutos,
    atualizarProduto,
    buscarProdutoPorId,
    buscarProdutosPorFiltro
};
