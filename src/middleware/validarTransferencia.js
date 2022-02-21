const { contas } = require("../data/bancodedados.js");

const validarTransferencia = (req, res, next) => {
    const { 
        numero_conta_origem, 
        numero_conta_destino, 
        valor, 
        senha 
    } = req.body;
    const numeroContaOrigem = Number(numero_conta_origem);
    const numeroContaDestino = Number(numero_conta_destino);

    const contaOrigem = contas.find( elemento => {
        return elemento.numero === numeroContaOrigem;
    } );
    
    const contaDestino = contas.find( elemento => {
        return elemento.numero === numeroContaDestino;
    } );

    if (!numero_conta_origem) {
        return res.status(400).json(
            {
                mensagem: "Erro 400: O numero_conta_origem é informação obrigatória."
            }
        );
    }

    if (!numero_conta_destino) {
        return res.status(400).json(
            {
                mensagem: "Erro 400: O numero_conta_destino é informação obrigatória."
            }
        );
    }

    if (!valor) {
        return res.status(400).json(
            {
                mensagem: "Erro 400: O valor é informação obrigatória."
            }
        );
    }

    if (!senha) {
        return res.status(400).json(
            {
                mensagem: "Erro 400: A senha é informação obrigatória."
            }
        );
    }

    if (!contaOrigem) {
        return res.status(404).json(
            {
                mensagem: "Erro 404: numero_conta_origem não encontrado."
            }
        );
    }

    if (!contaDestino) {
        return res.status(404).json(
            {
                mensagem: "Erro 404: numero_conta_destino não encontrado."
            }
        );
    }

    if (senha !== contaOrigem.usuario.senha) {
        return res.status(400).json(
            {
                mensagem: "Erro 400: A senha informada está errada."
            }
        );
    }

    if (valor > contaOrigem.saldo) {
        return res.status(400).json(
            {
                mensagem: "Erro 400: Saldo insuficiente!"
            }
        )
    }

    next();
};

module.exports = { validarTransferencia };

