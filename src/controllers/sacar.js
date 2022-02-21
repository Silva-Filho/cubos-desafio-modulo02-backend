const { contas, saques } = require("../data/bancodedados.js");

const { format } = require("date-fns");

const sacar = (req, res) => {
    const { numero_conta, valor } = req.body;
    const numeroConta = Number(numero_conta);

    const conta = contas.find( elemento => {
        return elemento.numero === numeroConta;
    } );

    conta.saldo -= valor;

    /* const dataSaque = format(new Date(2021, 7, 10, 23, 40, 35), "yyyy-MM-dd HH:mm:ss"); */
    const dataSaque = format(new Date(), "yyyy-MM-dd HH:mm:ss");

    const saque = {
        data: dataSaque,
        numero_conta,
        valor
    };

    saques.push(saque);

    return res.status(202).send(saques);
};

module.exports = { sacar };

