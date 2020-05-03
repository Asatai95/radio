/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

'use strict'
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'esnext',
  },
})
exports.createPages = require('./gatsby-node-api/author').createPages

exports.createPages = require('./gatsby-node-api/top').createPages