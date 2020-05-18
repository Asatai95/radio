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
	const docError = () => {
		const errorTemplate = path.resolve(`./src/components/Top/pages/index.tsx`)
		createPage({
			path: `/404/`,
			component: errorTemplate,
			context: {}
		})
	}
	const docTop = () => {
		const IndexTemplate = path.resolve(`./src/components/Top/pages/index.tsx`)
		createPage({
			path: `/`,
			component: IndexTemplate,
			context: {}
		})
	}

	const docProfile = () => {
		const IndexTemplate = path.resolve(`../src/components/Profile/pages/index.tsx`)
		createPage({
			path: `/about/`,
			component: IndexTemplate,
			context: {}
		})
	}

	const docPost = () => {
		const IndexTemplate = path.resolve(`../src/components/Posts/pages/index.tsx`)
		createPage({
			path: `/posts/`,
			component: IndexTemplate,
			context: {}
		})
	}

	const postTemplate = path.resolve(`./src/components/Contents/pages/index.tsx`)
	const docs = new Promise((resolve, reject) => {
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
							json
						}
					}
				}
			}
		}
	  `).then(result => {
		result.data.allContentfulPosts.edges.forEach(edge => {
		  const node = edge.node
		  createPage({
			path: `/posts/${node.id}`,
			component: postTemplate,
			context: {
				id: node.id
			}
		  })
		})
		resolve()
	  })
	})
	return Promise.all([docs, docPost, docProfile, docTop, docError]);
  }