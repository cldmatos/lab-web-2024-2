const produtoModel = require('./produto-model');

const save = async (produto) => {
    const saved = await produtoModel.Produto.create(produto);
    return saved;
}

const list = async (filters) => {
    return await produtoModel.Produto.findAll();
}

const deleteById = async (id) => {
    const produto = await produtoModel.Produto.findByPk(id);
    
    if (!produto) {
        throw new Error('Produto não encontrado');
    }
    
    await produto.destroy();
    return produto; 
}

module.exports = { save, list, deleteById };
