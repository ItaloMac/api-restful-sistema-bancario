const express = require('express')
const rotas = express()
const contas = require('./controladores/contas')
const operacoes = require('./controladores/operacoes_bancarias')

const { verificaSenhaBanco } = require('./middlewares/verificaSenhaBanco')
const { verificaNovaConta } = require('./middlewares/verificaNovaConta')
const { verificaAtualizacaoUsuario } = require('./middlewares/verificaAtualizacaoUsuario')
const { verificaNumeroConta } = require('./middlewares/verificaNumeroConta')
const { verificaDeposito } = require('./middlewares/verificaDeposito')
const { verificaSaque } = require('./middlewares/verificaSaque')
const { verificaTransferencia } = require('./middlewares/verificaTransferencia')
const { verificaSaldo } = require('./middlewares/verificaSaldo')


//ROTAS PARA FUNCIONALIDADES NA CONTA BANCARIA
//rotas.get('/contas/:senha_banco', verificaSenhaBanco ,contas.listarContasBancarias)
rotas.post('/contas', verificaNovaConta, contas.criarContaBancaria)
rotas.put('/contas/:numeroConta/usuario', verificaAtualizacaoUsuario, contas.atualizarUsuario)
rotas.delete('/contas/:numeroConta', verificaNumeroConta, contas.deletarConta)

//ROTAS PARA OPERAÇÕES BANCARIAS
rotas.post('/transacoes/depositar', verificaDeposito, operacoes.depositar)
rotas.post('/transacoes/sacar', verificaSaque, operacoes.sacar)
rotas.post('/transacoes/transferir', verificaTransferencia, operacoes.transferir)
rotas.get('/contas/saldo', verificaSaldo, operacoes.saldoDaConta)
//rotas.get('/contas/extrato/:numero_conta/:senha', operacoes.extrato)

module.exports = rotas;