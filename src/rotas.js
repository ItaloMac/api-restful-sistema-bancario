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
const { verificaSaldoEExtrato } = require('./middlewares/verificaSaldoEExtrato')


//ROTAS PARA FUNCIONALIDADES NA CONTA BANCARIA
rotas.get('/contas/saldo', verificaSaldoEExtrato, operacoes.saldoDaConta)
rotas.get('/contas/extrato', verificaSaldoEExtrato, operacoes.extrato)
rotas.get('/contas', verificaSenhaBanco ,contas.listarContasBancarias)
rotas.post('/contas', verificaNovaConta, contas.criarContaBancaria)
rotas.put('/contas/:numeroConta/usuario', verificaAtualizacaoUsuario, contas.atualizarUsuario)
rotas.delete('/contas/:numeroConta', verificaNumeroConta, contas.deletarConta)

//ROTAS PARA OPERAÇÕES BANCARIAS
rotas.post('/transacoes/depositar', verificaDeposito, operacoes.depositar)
rotas.post('/transacoes/sacar', verificaSaque, operacoes.sacar)
rotas.post('/transacoes/transferir', verificaTransferencia, operacoes.transferir)


module.exports = rotas;