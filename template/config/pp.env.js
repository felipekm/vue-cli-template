var merge   = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV : '"pre-production"',
  PORT     : {{port}},
  API_KEY  : '"https://api-pp.pling.net.br/api/v1/"'
})
