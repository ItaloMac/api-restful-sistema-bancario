const { contas, depositos, saques, transferencias } = require('../bancodedados')

function depositar (req, res) {
    const { numero_conta, valor } = req.body

    let contaBanco = contas.find(conta => conta.numero === numero_conta)

    contaBanco.saldo = contaBanco.saldo + valor

    const registroDeposito = {
        "data": new Date().toString(),
        "numero_conta": numero_conta,
        "valor": valor
    }

    depositos.push(registroDeposito)
    
    return res.status(204).send()
}

function sacar (req, res) {
    const { numero_conta, valor } = req.body

    let contaBanco = contas.find(conta => conta.numero === numero_conta)

    contaBanco.saldo = contaBanco.saldo - valor

    const registroSaque = {
        "data": new Date().toString(),
        "numero_conta": numero_conta,
        "valor": valor
    }

    saques.push(registroSaque)

    return res.status(204).send()
}

function transferir (req, res) {
    const {numero_conta_origem, numero_conta_destino, valor } = req.body

    const contaBancoOrigem = contas.find(conta => conta.numero === numero_conta_origem)
    const contaBancoDestino = contas.find(conta => conta.numero === numero_conta_destino)

    contaBancoOrigem.saldo = contaBancoOrigem.saldo - valor
    contaBancoDestino.saldo = contaBancoDestino.saldo + valor

    const transferenciasEnviadas = {
        "data": new Date().toString(),
        "numero_conta_origem": numero_conta_origem,
        "numero_conta_destino": numero_conta_destino,
        "valor": valor
    }

    const transferenciasRecebidas = {
        "data": new Date().toString(),
        "numero_conta_origem": numero_conta_origem,
        "numero_conta_destino": numero_conta_destino,
        "valor": valor
    }

    transferencias.push(transferenciasEnviadas)
    transferencias.push(transferenciasRecebidas)

    return res.status(204).send()

}

function saldoDaConta (req, res) {
    const { numero_conta } = req.query

    const conta = contas.find(conta => conta.numero === numero_conta)
    const saldo = conta.saldo

    return res.status(200).json(saldo);
}

function extrato(req, res) {
    const numero_conta = req.query.numero_conta

    const depositosDaConta = depositos.filter(deposito => deposito.numero_conta === numero_conta)
    const saquesDaConta = saques.filter(saque => saque.numero_conta === numero_conta)
    const transferenciasEnviadasDaConta = transferencias.filter(transferencia => transferencia.numero_conta_origem === numero_conta)
    const transferenciasRecebidasDaConta = transferencias.filter(transferencia => transferencia.numero_conta_destino === numero_conta)

    const extrato = {
        depositos: depositosDaConta,
        saques: saquesDaConta,
        transferenciasEnviadas: transferenciasEnviadasDaConta,
        transferenciasRecebidas: transferenciasRecebidasDaConta
    }

    return res.status(200).json(extrato);

}


module.exports = {
    depositar,
    sacar,
    transferir,
    saldoDaConta,
    extrato
}
