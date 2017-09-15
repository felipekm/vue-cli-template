var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  PORT     : 8084,
  API_KEY  : '"http://api-dev.pling.net.br/api/v1/"'
})
