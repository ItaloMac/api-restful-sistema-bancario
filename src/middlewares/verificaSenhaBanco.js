function verificaSenhaBanco (req,res, next) {
    const { senha_banco } = req.query
    if (senha_banco === "Cubos123Bank") {
        next()
    }
      else {
         return res.status(403).json("A senha do banco informada é inválida!")
     }
}


module.exports = {
    verificaSenhaBanco
}