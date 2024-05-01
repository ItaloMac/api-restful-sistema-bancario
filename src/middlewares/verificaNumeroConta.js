const { contas } = require("../bancodedados");

function verificaNumeroConta (req,res, next) {
    const { numeroConta } = req.params

     //VALIDAÇÃO DE NUMERO DA CONTA
     const contaUsuario = contas.find(conta => conta.numero === numeroConta)
     if (contaUsuario == undefined) {
        return res.status(404).json({mensagem: "O numero da conta informado é invalido!"})
    }
 
     //VERIFICA SE O SALDO DA CONTA É 0
     if (contaUsuario.saldo > 0) {
         return res.status(404).json({mensagem: "A conta só pode ser removida se o saldo for zero!"})
     }
    next();
}
  
module.exports = {verificaNumeroConta}