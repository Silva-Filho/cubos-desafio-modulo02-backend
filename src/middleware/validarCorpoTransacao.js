const { contas } = require("../data/bancodedados.js");

const validarCorpoTransacao = (req, res, next) => {
    const { numero_conta, valor } = req.body;
    const numeroConta = Number(numero_conta);

    const conta = contas.find( elemento => {
        return elemento.numero === numeroConta;
    } );
    
    if (!numeroConta) {
        return res.status(400).json(
            {
                mensagem: "Erro 400: O número da conta é obrigatório!"
            }
        );
    }

    if (!valor) {
        return res.status(400).json(
            {
                mensagem: "Erro 400: O valor é obrigatório!"
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

    if (valor <= 0) {
        return res.status(400).json(
            {
                mensagem: "Erro 400: O valor deve ser maior que zero!"
            }
        );
    }

    next();
};

module.exports = { validarCorpoTransacao };

