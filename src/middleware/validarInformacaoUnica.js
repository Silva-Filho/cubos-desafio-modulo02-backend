const bancoDeDados = require("../data/bancodedados.js");

const contas = bancoDeDados.contas;

const validarInformacaoUnica = (req, res, next) => {
    const { 
        cpf, 
        email, 
    } = req.body;

    const cpfUnico = contas.find( elemento => {
        return elemento.usuario.cpf === cpf;
    } );
    
    const emailUnico = contas.find( elemento => {
        return elemento.usuario.email === email;
    } );
    
    if (cpfUnico) {
        return res.status(403).json(
            {
                mensagem: "Erro 403: o CPF informado já está cadastrado."
            }
        );
    }

    if (emailUnico) {
        return res.status(403).json(
            {
                mensagem: "Erro 403: o e-mail informado já está cadastrado."
            }
        );
    }

    next();
};

module.exports = { validarInformacaoUnica };

