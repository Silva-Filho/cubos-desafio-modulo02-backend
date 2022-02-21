const { contas, transferencias } = require("../data/bancodedados.js");

const { format } = require("date-fns");

const transferir = (req, res) => {
    const { 
        numero_conta_origem, 
        numero_conta_destino, 
        valor 
    } = req.body;
    const numeroContaOrigem = Number(numero_conta_origem);
    const numeroContaDestino = Number(numero_conta_destino);

    const contaOrigem = contas.find( elemento => {
        return elemento.numero === numeroContaOrigem;
    } );
    const contaDestino = contas.find( elemento => {
        return elemento.numero === numeroContaDestino;
    } );

    contaOrigem.saldo -= valor;
    contaDestino.saldo += valor;

    /* const dataTransferencia = format(new Date(2021, 7, 10, 23, 40, 35), "yyyy-MM-dd HH:mm:ss"); */
    const dataTransferencia = format(new Date(), "yyyy-MM-dd HH:mm:ss");

    const transferencia = {
        data: dataTransferencia,
        numero_conta_origem,
        numero_conta_destino,
        valor
    }

    transferencias.push(transferencia);

    return res.status(202).send(transferencias);
};

module.exports = { transferir };

