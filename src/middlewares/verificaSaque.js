const { contas } = require("../bancodedados");

function verificaSaque(req,res, next) {
    const {numero_conta, valor, senha } = req.body

    if (!numero_conta || !valor || !senha ) {
        return res.status(404).json({mensagem: "O número da conta, valor e senha são obrigatórios!"})
    }

    if (valor <= 0 ) {
        return res.status(404).json({mensagem: "O valor nao pode ser menor que 0"})
    }

    const contaBanco = contas.find(conta => conta.numero === numero_conta)
    if (contaBanco == undefined) {
        return res.status(404).json({mensagem: "O numero da conta informado é inválido!"})
    }

    const senhaDaConta = contaBanco.usuario.senha

    if (senha !== senhaDaConta) {
        return res.status(404).json({mensagem: "A senha informada não corresponde a senha cadastrada na conta!"})
    }

    if (contaBanco.saldo < valor) {
        return res.status(404).json({mensagem: "Saldo insuficiente para o saque!"})
    }

    next()
}

module.exports = {verificaSaque}