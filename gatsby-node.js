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

const path = require("path")
const { paginate } = require("gatsby-awesome-pagination")

exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions

	const buildPagination = posts => {
		paginate({
			createPage,
			items: posts,
			itemsPerPage: 10,
			pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? "/" : "/page"),
			component: path.resolve('src/components/Posts/organisms/Section01.tsx')
		})
	}

	return graphql(`
			{
				allContentfulPosts(sort: { fields: [id], order: DESC }) {
					edges {
						node {
							thumbnail {
								file {
									url
								}
							}
							title
							postExcerpt
							createdAt
						}
					}
        		}
			}
		`).then(result => {
			if (result.errors) {
				return Promise.reject(result.errors)
			}
			const posts = result.data.allContentfulPosts.edges
			buildPagination(posts)
		})
}

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions
	const postTemplate = path.resolve(`./src/components/Contents/pages/index.tsx`)
	return new Promise((resolve, reject) => {
	  graphql(`
		{
			allContentfulPosts(sort: { fields: [id], order: DESC }) {
				edges {
					node {
						id
						thumbnail {
							file {
								url
							}
						}
						title
						postExcerpt
						createdAt
						childContentfulPostsContentRichTextNode {
							content
						}
					}
				}
			}
		}
	  `).then(result => {
		result.data.allHnStory.edges.forEach(edge => {
		  const node = edge.node
		  createPage({
			path: `/posts/${node.id}`,
			component: postTemplate
		  })
		})
		resolve()
	  })
	})
  }