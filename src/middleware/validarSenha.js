const validarSenha = (req, res, next) => {
    const { senha_banco } = req.query;

    if (!senha_banco) {
        return res.status(401).json(
            {
                mensagem: "Erro 401: a senha deve ser informada."
            }
        );
    } else if (senha_banco !== "Cubos123Bank") {
        return res.status(401).json(
            {
                mensagem: "Erro 401: a senha informada está incorreta."
            }
        );
    }

    next();
};

module.exports = { validarSenha };

