const { saques, depositos, transferencias } = require("../data/bancodedados.js");

const mostrarExtrato = (req, res) => {
    const { numero_conta } = req.query;
    const numeroConta = Number(numero_conta);

    const resumoDepositos = depositos.filter( elemento => {
        return elemento.numero_conta === numeroConta;
    } );

    const resumoSaques = saques.filter( elemento => {
        return elemento.numero_conta === numeroConta;
    } );
    
    const resumoTransferenciasEnviadas = transferencias.filter( elemento => {
        return elemento.numero_conta_origem === numeroConta;
    } );

    const resumoTransferenciasRecebidas = transferencias.filter( elemento => {
        return elemento.numero_conta_destino === numeroConta;
    } );

    const relatorioConta = {
        depositos: resumoDepositos,
        saques: resumoSaques,
        transferenciasEnviadas: resumoTransferenciasEnviadas,
        transferenciasRecebidas: resumoTransferenciasRecebidas
    };

    return res.status(202).json(relatorioConta);
};

module.exports = { mostrarExtrato };

