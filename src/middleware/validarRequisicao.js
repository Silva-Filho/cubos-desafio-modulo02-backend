const { contas } = require("../data/bancodedados.js");

const validarRequisicao = (req, res, next) => {
    const { numeroConta } = req.params;
    const numero = Number(numeroConta);

    const conta = contas.find( elemento => {
        return elemento.numero === numero;
    } );

    if (!numero) {
        return res.status(400).json(
                {
                    mensagem: "Erro 400: numeroConta informado não é um número."
                }
            );
    }

    if (!conta) {
        return res.status(404).json(
            {
                mensagem: "Erro 404: conta não encontrada."
            }
        );
    }

    next();
};

module.exports = { validarRequisicao };

