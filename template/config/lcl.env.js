var merge   = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV : '"local"',
  PORT     : 2332,
  API_KEY  : '"http://localhost:5000/api/v1/"'
})
