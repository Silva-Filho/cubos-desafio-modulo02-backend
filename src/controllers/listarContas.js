const bancoDeDados = require("../data/bancodedados.js");

const contas = bancoDeDados.contas;

const listarContas = (req, res) => {
    return res.status(200).json(contas);
};

module.exports = { listarContas };

