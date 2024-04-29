const { contas } = require("../bancodedados");

function verificaNumeroConta (req,res, next) {
    const { numeroConta } = req.params

    //VALIDAÇÃO DE NUMERO DA CONTA
    const contaUsuario = contas.find(conta => conta.numero === numeroConta)
    if ( contaUsuario.numero !== numeroConta) {
        return res.status(404).json({mensagem: "O numero da conta informada é invalido!"})
    }

    next()
}