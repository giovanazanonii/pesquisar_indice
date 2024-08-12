const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { pesquisarUsuario } = require('./cont_usuario/controleUsuario');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render('index', { user: null, notFound: false });
});

app.post("/pesquisar", async (req, res) => {
    const indice = req.body.indice;
    
    try {
        const user = await pesquisarUsuario(indice);
        if (user) {
            res.render('index', { user, notFound: false });
        } else {
            res.render('index', { user: null, notFound: true });
        }
    } catch (err) {
        res.send('Erro na consulta ao banco de dados');
    }
});

app.listen(3000, () => {
    console.log("SERVIDOR RODANDO");
});
