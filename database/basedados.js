const Sequelize = require('sequelize');
const conexao = new Sequelize('avalia02_354','root','',{
    host:'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false,
        freezeTableName: true
    }
})
module.exports = conexao;