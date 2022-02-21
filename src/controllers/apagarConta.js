const bancoDeDados = require("../data/bancodedados.js");

let contas = bancoDeDados.contas;

const apagarConta = (req, res) => {
    const { numeroConta } = req.params;
    const numero = Number(numeroConta);

    const conta = contas.find( elemento => {
        return elemento.numero === numero;
    } );    

    const contaIndice = contas.findIndex( elemento => {
        return elemento.numero === numero;
    } );

    /* 
        Não persiste!!!!!!!!!!!!!!
    */
    /* const novoContas = contas.filter( elemento => {
        return elemento.numero !== numero;
    } ); */
    
    if(!conta.saldo) {
        /* 
            Não persiste!!!!!!!!!!!!!!
        */
        /* contas = novoContas; */
        /* bancoDeDados.contas = novoContas; */

        contas.splice(contaIndice, 1);

        return res.status(202).send();
    } else {
        return res.status(403).json(
            {
                mensagem: "Erro 403: A conta só pode ser removida se o saldo for zero!"
            } 
        );
    }
};

module.exports = { apagarConta };

