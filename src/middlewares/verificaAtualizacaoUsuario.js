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

    //VALIDAÇÃO DE CPF OU EMAIL UNICO
    for (let i = 0; i < contas.length; i++) {
        if (dadosDaNovaConta.cpf === contas[i].usuario.cpf || dadosDaNovaConta.email === contas[i].usuario.email) {
            return res.status(400
                ).json({mensagem: "O CPF informado já está cadastrado em uma conta."})
        }
    }
    
   next();
}
1
module.exports = {verificaAtualizacaoUsuario}