const { contas } = require("../bancodedados");

function verificaDeposito (req,res, next) {
    const {numero_conta, valor } = req.body

    if (!numero_conta || !valor || valor == 0 || valor < 0 ) {
        return res.status(404).json({mensagem: "O número da conta e o valor são obrigatórios!"})
    }

    const contaBanco = contas.find(conta => conta.numero === numero_conta)
    if (contaBanco == undefined) {
        return res.status(404).json({mensagem: "O numero da conta informado é invalido!"})
    }

    next()
}

module.exports = {verificaDeposito}