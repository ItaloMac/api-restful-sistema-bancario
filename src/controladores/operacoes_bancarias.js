const { contas } = require('../bancodedados')

function depositar (req, res) {
    const { numero_conta, valor } = req.body

    let contaBanco = contas.find(conta => conta.numero === numero_conta)

    contaBanco.saldo = contaBanco.saldo + valor
    return res.status(204).send()
}

function sacar (req, res) {
    const { numero_conta, valor } = req.body

    let contaBanco = contas.find(conta => conta.numero === numero_conta)

    contaBanco.saldo = contaBanco.saldo - valor
    
    return res.status(204).send()
}

function transferir (req, res) {
    const {numero_conta_origem, numero_conta_destino, valor } = req.body

    const contaBancoOrigem = contas.find(conta => conta.numero === numero_conta_origem)
    const contaBancoDestino = contas.find(conta => conta.numero === numero_conta_destino)

    contaBancoOrigem.saldo = contaBancoOrigem.saldo - valor
    contaBancoDestino.saldo = contaBancoDestino.saldo + valor

    return res.status(204).send()

}

function saldoDaConta (req, res) {
    const { numero_conta } = req.query

    const conta = contas.find(conta => conta.numero === numero_conta)
    const saldo = conta.saldo

    return res.status(200).json(saldo);
}

function extrato(req, res) {

}


module.exports = {
    depositar,
    sacar,
    transferir,
    saldoDaConta,
    extrato
}
