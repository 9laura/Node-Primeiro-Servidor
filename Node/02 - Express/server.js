//SERVER.JS
//npm init -y => INICIA O PROJETO DO NODE
//npm install express => INSTALA O EXPRESS

const express = require("express");
const app = express()
//localhost:3000 => endereço do servidor
app.get("/", function(req, res) {
    res.send("Servidor rodando!")
    }) // CTRL C PARA PARAR O SERVIDOR
app.listen(3000, function() {
    console.log("Servidor rodando na porta 3000")
})

