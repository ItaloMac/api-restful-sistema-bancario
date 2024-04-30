const { contas } = require("../bancodedados");

function verificaTransferencia(req,res, next) {
    const {numero_conta_origem, numero_conta_destino, senha_origem, valor } = req.body

    if (!numero_conta_origem || !numero_conta_destino || !senha_origem || !valor ) {
        return res.status(404).json({mensagem: "Todos os campos solicitados são obrigatórios!"})
    }

    if (valor <= 0 ) {
        return res.status(404).json({mensagem: "O valor nao pode ser menor que 0"})
    }

    const contaBancoOrigem = contas.find(conta => conta.numero === numero_conta_origem)
    if (contaBancoOrigem == undefined) {
        return res.status(404).json({mensagem: "O numero da conta de origem é inválido!"})
    }

    const contaBancoDestino = contas.find(conta => conta.numero === numero_conta_destino)
    if (contaBancoOrigem == undefined) {
        return res.status(404).json({mensagem: "O numero da conta de destino é inválido!"})
    }

    const senhaDaContaOrigem = contaBancoOrigem.usuario.senha

    if (senha_origem !== senhaDaContaOrigem) {
        return res.status(404).json({mensagem: "A senha informada não corresponde a senha cadastrada na conta!"})
    }

    if (contaBancoOrigem.saldo < valor) {
        return res.status(404).json({mensagem: "Saldo insuficiente para a tranferência!"})
    }

    next()
}

module.exports = {verificaTransferencia}