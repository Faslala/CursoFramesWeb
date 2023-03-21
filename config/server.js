const port = 3003

// Eh um middleware que vai fazer o parser do corpo da requisicao
const bodyParser = require("body-parser")
const express = require('express')
const server = express()

// - use vai usar todas as requisicoes do front mesmo que nao seja url.
// - bodyparser vai verificar se o dado veio de um formulario ou qualquer outra coisa, se for formulario vai 
// usar urlencoded para interpertar e se nao for formulario, o json vai transformar em um objeto para ser usado

server.use(bodyParser.urlencoded({ extended: true}))
server.use(bodyParser.json())

// versao atual
// app.use(bodyParser.urlencoded({ extended: true}))
// app.use(bodyParser.json())

server.listen(port, function() {
    console.log(`BACKEND is running on port ${ port }.`)
})

module.exports = server