const Sequelize = require('sequelize');
const database = require('../../../config/db');

const Produto = database.sequelize.define('Produto', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true,
        field: 'cod_produto'
    },
    nome: { 
        type: Sequelize.STRING,
        allowNull: false,
        field: 'nome'
    },
    quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'quantidade'
    },    
    preco: {
        type: Sequelize.FLOAT,
        allowNull: false,
        field: 'preco'
    }
}, {
    tableName: 'produto',
    timestamps: false //desabilita o createdAt e updatedAt do sequelize
}); 

module.exports = {Produto};