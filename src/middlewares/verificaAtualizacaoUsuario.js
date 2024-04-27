const { contas } = require("../bancodedados");

function verificaAtualizacaoUsuario (req,res, next) {
    const { numeroConta } = req.params
    console.log(typeof numeroConta)
    
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body.usuario

     //VALIDAÇÃO DE PREENCHIMENTO OBRIGATÓRIO
     if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
        
        return res.status(400).json({mensagem: "Todos os campos são obrigatórios!"})
    }

    //VALIDAÇÃO DE NUMERO DA CONTA
    const contaUsuario = contas.find(conta => conta.numero === numeroConta)
    console.log(contaUsuario.numero)
    if ( contaUsuario.numero != numeroConta) {
        return res.status(400).json({mensagem: "O numero da conta informado é invalido!"})
    }
    
   next();
}

module.exports = {verificaAtualizacaoUsuario}