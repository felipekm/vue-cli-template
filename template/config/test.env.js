var merge = require('webpack-merge')
var devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV : '"testing"',
  PORT     : {{port}},
  API_KEY  : '"http://api-dev.pling.net.br/api/v1/"'
})
