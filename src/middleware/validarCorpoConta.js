const validarCorpoConta = (req, res, next) => {
    const { 
        nome, 
        cpf, 
        data_nascimento, 
        telefone, 
        email, 
        senha 
    } = req.body;

    if (!nome) {
        return res.status(400).json(
            {
                mensagem: "Erro 400: A informação nome é obrigatória e deve ser corretamente preenchida."
            }
        );
    }

    if (!cpf || cpf.length !== 11) {
        return res.status(400).json(
            {
                mensagem: "Erro 400: A informação cpf é obrigatória e deve ser corretamente preenchida com 11 números."
            }
        );
    }

    if (!data_nascimento) {
        return res.status(400).json(
            {
                mensagem: "Erro 400: A informação data_nascimento é obrigatória e deve ser corretamente preenchida."
            }
        );
    }

    if (!telefone) {
        return res.status(400).json(
            {
                mensagem: "Erro 400: A informação telefone é obrigatória e deve ser corretamente preenchida."
            }
        );
    }

    if (!email) {
        return res.status(400).json(
            {
                mensagem: "Erro 400: A informação email é obrigatória e deve ser corretamente preenchida."
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

    next();
};

module.exports = { validarCorpoConta };

