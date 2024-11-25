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

module.exports = {criarProdutos, 
                 };