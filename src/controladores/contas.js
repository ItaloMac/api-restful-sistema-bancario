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
    const dadosDaNovaConta = req.body.usuario
    
    const novaConta = {
        numero: new Date().getTime().toString(),
        saldo: 0,
        usuario: {
            nome: dadosDaNovaConta.nome,
            cpf: dadosDaNovaConta.cpf,
            data_nascimento:dadosDaNovaConta.data_nascimento,
            telefone: dadosDaNovaConta.telefone,
            email: dadosDaNovaConta.email,
            senha:dadosDaNovaConta.senha
        }
    }
    
    contas.push(novaConta)
    console.log(novaConta,typeof novaConta.numero)

    return res.status(201).json(contas)
}

function atualizarUsuario (req, res) {
    const { numeroConta } = req.params;
    const { nome, cpf, data_nascimento,telefone, email, senha} = req.body.usuario;

    let contaBanco = contas.find(conta => conta.numero === numeroConta)       
      
      contaBanco.usuario.nome = nome
      contaBanco.usuario.cpf = cpf
      contaBanco.usuario.data_nascimento = data_nascimento
      contaBanco.usuario.telefone = telefone
      contaBanco.usuario.email = email
      contaBanco.usuario.senha = senha

    return res.status(201).send(contaBanco)
}

function deletarConta (req, res) {
   
}




module.exports = {
    listarContasBancarias,
    criarContaBancaria,
    atualizarUsuario,
    deletarConta
    
}
