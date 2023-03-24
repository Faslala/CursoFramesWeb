const express = require('express')

module.exports = function(server){

  const router = express.Router()
  server.use('/api', router)

//   pq se eu colocar api no lugar de teste nao funciona?
//   router.route('/test').get(function(req, res) { res.send('testando o roteamento /api/teste')})

  // rotas da API
  const billingCycleService = require('../api/billingCycle/billingCycleService')
  billingCycleService.register(router, '/billingCycles')

  const billingSummaryService = require('../api/billingSummary/billingSummaryService')
  router.route('/billingSummary').get(billingSummaryService.getSummary)
}