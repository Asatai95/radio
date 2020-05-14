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

// exports.createPages = require('./gatsby-node-api/profile').createProfile
// exports.createPages = require('./gatsby-node-api/author').createPages
// exports.createPages = require('./gatsby-node-api/top').createPages

// const path = require(`path`)

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   const blogPostTemplate = path.resolve(`src/components/Profile/pages/index.tsx`)

//   return graphql(`
//     query loadPagesQuery ($limit: Int!) {
//       allSitePage {
//         edges {
//           node {
//             path
//             component
//             pluginCreator {
//               name
//               pluginFilepath
//             }
//           }
//         }
//         nodes {
//           id
//         }
//       }
//     }
//   `, { limit: 1000 }).then(result => {
//     if (result.errors) {
//       throw result.errors
//     }
//     console.log(result)

//     result.data.allSitePage.edges.forEach(edge => {
//       createPage({
//         path: `${edge.node.path}`,
//         component: blogPostTemplate,
//         context: {},
//       })
//     })
//   })
// }
