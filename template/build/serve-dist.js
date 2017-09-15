process.env.NODE_ENV = ''
require('dotenv').config()

const
  serve = require('serve'),
  config = require('../config')

serve('dist/', {
  port: config.build.env.PORT
})
