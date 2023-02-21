
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-oidc-context.cjs.production.min.js')
} else {
  module.exports = require('./react-oidc-context.cjs.development.js')
}
