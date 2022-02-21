const bancoDeDados = require("../data/bancodedados.js");

const contas = bancoDeDados.contas;

let id = 1;

const criarConta = (req, res) => {
    const { 
        nome, 
        cpf, 
        data_nascimento, 
        telefone, 
        email, 
        senha 
    } = req.body;

    const conta = {
        numero: id++,
        saldo: 0,
        usuario: {
            nome,
            cpf,
            data_nascimento,
            telefone,
            email,
            senha
        }
    };

    contas.push(conta);

    return res.status(201).send();
};

module.exports = { criarConta };

