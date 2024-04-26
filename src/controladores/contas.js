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
