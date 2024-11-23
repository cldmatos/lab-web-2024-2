const listaProdutos = [];
const produtosModel = require('./produto-model');

const save = async (aluno) => {
    
    const saved = await produtoModel.Produto.create(produto);

    return produto
}


const list = async(filters) => {

    return await produtoModel.Produto.findAll();
}

module.exports = {save, list};