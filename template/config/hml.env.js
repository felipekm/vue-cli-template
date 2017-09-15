var merge   = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV : '"homolog"',
  PORT     : 8084,
  API_KEY  : '"https://api-hml.pling.net.br/api/v1/"'
})
