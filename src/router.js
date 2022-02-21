const express = require("express");

const { validarSenha } = require("./middleware/validarSenha.js");
const { listarContas } = require("./controllers/listarContas.js");
const { criarConta } = require("./controllers/criarConta.js");
const { atualizarConta } = require("./controllers/atualizarConta.js");
const { apagarConta } = require("./controllers/apagarConta.js");
const { depositar } = require("./controllers/depositar.js");
const { sacar } = require("./controllers/sacar.js");
const { transferir } = require("./controllers/transferir.js");
const { mostrarSaldo } = require("./controllers/mostrarSaldo.js");
const { mostrarExtrato } = require("./controllers/mostrarExtrato.js");

const { validarCorpoConta } = require("./middleware/validarCorpoConta.js");
const { validarInformacaoUnica } = require("./middleware/validarInformacaoUnica.js");
const { validarRequisicao } = require("./middleware/validarRequisicao.js");
const { validarCorpoTransacao } = require("./middleware/validarCorpoTransacao.js");
const { validarSaque } = require("./middleware/validarSaque.js");
const { validarTransferencia } = require("./middleware/validarTransferencia.js");
const { validarInformacaoConsulta } = require("./middleware/validarInformacaoConsulta.js");

const roteador = express();

roteador.get("/contas", validarSenha, listarContas);
roteador.post("/contas", validarCorpoConta, validarInformacaoUnica, criarConta);

roteador.put("/contas/:numeroConta/usuario", validarRequisicao, validarCorpoConta, validarInformacaoUnica, atualizarConta);
roteador.delete("/contas/:numeroConta", validarRequisicao, apagarConta);

roteador.post("/transacoes/depositar", validarCorpoTransacao, depositar);
roteador.post("/transacoes/sacar", validarCorpoTransacao, validarSaque, sacar);
roteador.post("/transacoes/transferir", validarTransferencia, transferir);

roteador.get("/contas/saldo", validarInformacaoConsulta, mostrarSaldo);
roteador.get("/contas/extrato", validarInformacaoConsulta, mostrarExtrato);

module.exports = { roteador };

