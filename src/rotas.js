const express = require('express')
const rotas = express()
const contas = require('./controladores/contas')
const operacoes = require('./controladores/operacoes_bancarias')
const { verificaSenhaBanco } = require('./middlewares/verificaSenhaBanco')

//ROTAS PARA FUNCIONALIDADES NA CONTA BANCARIA
rotas.get('/contas/:senha_banco', verificaSenhaBanco ,contas.listarContasBancarias)
rotas.post('/contas', contas.criarContaBancaria)
rotas.put('/contas/:numeroConta/usuario', contas.atualizarUsuario)
rotas.delete('/contas/:numeroConta', contas.deletarConta)


//ROTAS PARA OPERAÇÕES BANCARIAS
rotas.post('/transacoes/depositar', operacoes.depositar)
rotas.post('/transacoes/sacar', operacoes.sacar)
rotas.post('/transacoes/transferir', operacoes.transferir)
rotas.get('/contas/saldo/:numero_conta/:senha', operacoes.saldoDaConta)
rotas.get('/contas/extrato/:numero_conta/:senha', operacoes.extrato)

module.exports = rotas;