const { contas } = require("../data/bancodedados.js");

const validarSaque = (req, res, next) => {
    const { numero_conta, valor, senha } = req.body;
    const numeroConta = Number(numero_conta);

    const conta = contas.find( elemento => {
        return elemento.numero === numeroConta;
    } );
    
    if (!senha) {
        return res.status(400).json(
            {
                mensagem: "Erro 400: O número da conta é obrigatório!"
            }
        );
    } else if (senha !== conta.usuario.senha) {
        return res.status(400).json(
            {
                mensagem: "Erro 400: A senha informada está incorreta!"
            }
        );
    }

    if (valor > conta.saldo) {
        return res.status(400).json(
            {
                mensagem: "Erro 400: Valor do saque maior que saldo disponível!"
            }
        );
    }

    next();
};

module.exports = { validarSaque };

