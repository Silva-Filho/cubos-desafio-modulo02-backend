const { contas } = require("../data/bancodedados.js");

const atualizarConta = (req, res) => {
    const { numeroConta } = req.params;
    const numero = Number(numeroConta);

    const { 
        nome, 
        cpf, 
        data_nascimento, 
        telefone, 
        email, 
        senha 
    } = req.body;

    const conta = contas.find( elemento => {
        return elemento.numero === numero;
    } );

    conta.usuario = {
        nome, 
        cpf, 
        data_nascimento, 
        telefone, 
        email, 
        senha 
    };

    return res.status(204).send();
};

module.exports = { atualizarConta };

