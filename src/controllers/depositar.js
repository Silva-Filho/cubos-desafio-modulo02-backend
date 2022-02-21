const { contas, depositos } = require("../data/bancodedados.js");

const { format } = require("date-fns");

const depositar = (req, res) => {
    const { numero_conta, valor } = req.body;
    const numeroConta = Number(numero_conta);

    const conta = contas.find( elemento => {
        return elemento.numero === numeroConta;
    } );

    conta.saldo += valor;

    /* const dataDeposito = format(new Date(2021, 7, 10, 23, 40, 35), "yyyy-MM-dd HH:mm:ss"); */
    const dataDeposito = format(new Date(), "yyyy-MM-dd HH:mm:ss");

    const deposito = {
        data: dataDeposito,
        numero_conta,
        valor
    };
    
    depositos.push(deposito);

    return res.status(202).send();
};

module.exports = { depositar };

