const express = require("express");

const { roteador } = require("./router.js");

const servidor = express();

const porta = 8000;

servidor.use(express.json());
servidor.use(roteador);

servidor.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}.`);
} );

