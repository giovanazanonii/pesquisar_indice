const tab_email = require('./tab_email');

async function pesquisarUsuario(indice) {
    try {
        const usuario = await tab_email.findOne({ where: { id_email: indice } });
        return usuario ? usuario.dataValues : null;
    } catch (err) {
        console.error('Erro na consulta:', err);
        throw err;
    }
}
module.exports = { pesquisarUsuario };
