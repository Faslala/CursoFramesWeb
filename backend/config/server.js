const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

server.listen(port, function(){
  console.log(`BACKEND is running on port ${port}.`)
})

// server.use( function (req, res){
//   res.send("Este é um teste para verificar se o browser está funcionando na porta 3003")
// })

module.exports = server