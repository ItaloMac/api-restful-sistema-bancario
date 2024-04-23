const fs = require('fs/promises');
const path = require('path');
const { contas } = require('../bancodedados')

function listarContasBancarias (req, res) {
    if (contas.length < 0) {
        return res.status(200).json("Nenhuma conta encontrada")
    } else {
        return res.status(200).json({
            message: contas.length + " contas encontradas",
            contas: contas,
        });
    }
}



function criarContaBancaria(req, res) {
    const { nome, cpf, data_nascimento, telefone, email, senha} = req.body;

    if (!nome) {
        return res.status(400).json({mensagem: "O nome é obrigatório"})
    }

    if (!email) {
        return res.status(400).json({mensagem: "O email é obrigatorio"})
    }

    const instrutor = {
        id: identificadorInstrutor++,
        nome: nome,
        email: email,
        status: status || true
    }
    
    instrutores.push(instrutor)

    return res.status(201).json(instrutor)
}

function atualizarUsuario (req, res) {
   
}

function deletarConta (req, res) {
   
}




module.exports = {
    listarContasBancarias,
    criarContaBancaria,
    atualizarUsuario,
    deletarConta
    
}
