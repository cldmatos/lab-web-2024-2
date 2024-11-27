const Joi = require("joi");

const criarProduto = {
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
}

const consultarProdutos = {
    query: Joi.object({
        nome: Joi
              .string()
              .min(2),
        quantidade: Joi
                    .number()
                    .integer()
                    .positive(),
        preco: Joi
               .number()
               .positive()               
    })
}

module.exports = {criarProduto,
                  consultarProdutos    
                 };