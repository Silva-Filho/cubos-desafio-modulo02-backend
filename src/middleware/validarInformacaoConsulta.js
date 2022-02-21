const { contas } = require("../data/bancodedados.js");

const validarInformacaoConsulta = (req, res, next) => {
    const { numero_conta, senha } = req.query;
    const numeroConta = Number(numero_conta);

    const conta = contas.find( elemento => {
        return elemento.numero === numeroConta;
    } );
    
    if (!numero_conta) {
        return res.status(400).json(
            {
                mensagem: "Erro 400: O número da conta é obrigatório!"
            }
        );
    }

    if (!senha) {
        return res.status(400).json(
            {
                mensagem: "Erro 400: A informação senha é obrigatória e deve ser corretamente preenchida."
            }
        );
    }

    if (!conta) {
        return res.status(404).json(
            {
                mensagem: "Erro 404: Conta bancária não encontada!."
            }
        );
    }

    if (senha !== conta.usuario.senha) {
        return res.status(400).json(
            {
                mensagem: "Erro 400: A senha informada está errada."
            }
        );
    }

    next();
};

module.exports = { validarInformacaoConsulta };

