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

}

function saldoDaConta (req, res) {

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
