const Sequelize = require('sequelize');
const conexao = require('../database/basedados');

const tab_email = conexao.define('tab_email',{
    id_email:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    }
})
tab_email.sync();
module.exports = tab_email;