const { contas } = require("../data/bancodedados.js");

const mostrarSaldo = (req, res) => {
    const { numero_conta } = req.query;
    const numeroConta = Number(numero_conta);

    const conta = contas.find( elemento => {
        return elemento.numero === numeroConta;
    } );

    const saldo = {
        saldo: conta.saldo
    }

    return res.status(202).send(saldo);
};

module.exports = { mostrarSaldo };

