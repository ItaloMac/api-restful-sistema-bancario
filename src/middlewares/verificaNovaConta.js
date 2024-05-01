const { contas } = require("../bancodedados");

function verificaNovaConta (req,res, next) {
    const dadosDaNovaConta = req.body.usuario
    
    //VALIDAÇÃO DE PREENCHIMENTO OBRIGATÓRIO
    if (!dadosDaNovaConta.nome || !dadosDaNovaConta.cpf || !dadosDaNovaConta.data_nascimento || !dadosDaNovaConta.telefone || !dadosDaNovaConta.email || !dadosDaNovaConta.senha) {
        
        return res.status(404).json({mensagem: "Todos os campos são obrigatórios!"})
    }

    //VALIDAÇÃO DE CPF OU EMAIL UNICO
    for (let i = 0; i < contas.length; i++) {
        if (dadosDaNovaConta.cpf === contas[i].usuario.cpf || dadosDaNovaConta.email === contas[i].usuario.email) {
            return res.status(404).json({mensagem: "Já existe uma conta com CPF ou Email informado."})
        }
    }
    next();
};

module.exports = {verificaNovaConta}
