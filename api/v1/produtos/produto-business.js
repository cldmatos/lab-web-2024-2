const listaProdutos = [];
const produtoModel = require('./produto-model');

const save = async (produto) => {
    
    const saved = await produtoModel.Produto.create(produto);

    return saved;
}


const list = async(filters) => {
    

    return await produtoModel.Produto.findAll();
}

module.exports = {save, list};