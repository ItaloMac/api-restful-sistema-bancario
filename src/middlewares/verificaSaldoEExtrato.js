const { contas } = require("../bancodedados");

function verificaSaldoEExtrato(req,res, next) {
    const numero_conta = req.query.numero_conta
    const senha = req.query.senha

    if (!numero_conta ||  !senha ) {
        return res.json({mensagem: "O número da conta, valor e senha são obrigatórios!"})
    }

    console.log(numero_conta, senha)

    const conta = contas.find(conta => conta.numero === numero_conta)
    if (conta == undefined) {
        return res.json({mensagem: "Conta bancária não encontrada!"})
    }


    const senhaConta = conta.usuario.senha

    console.log(senhaConta)

    if (senha != senhaConta) {
        return res.json({mensagem: "A senha informada não corresponde a senha cadastrada na conta!"})
    }

    next()
}

module.exports = { verificaSaldoEExtrato }