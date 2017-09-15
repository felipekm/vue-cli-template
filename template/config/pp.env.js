var merge   = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV : '"pre-production"',
  PORT     : 8084,
  API_KEY  : '"https://api-pp.pling.net.br/api/v1/"'
})
