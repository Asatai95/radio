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

	const docTop = path.resolve(`./src/components/Top/pages/index.tsx`)
	const docProfile = path.resolve(`./src/components/Profile/pages/index.tsx`)
	const docPost = path.resolve(`./src/components/Posts/pages/index.tsx`)
	const docInfo = path.resolve(`./src/components/Information/pages/index.tsx`)

	const postTemplate = path.resolve(`./src/components/Contents/pages/index.tsx`)
	const docsInfo = path.resolve(`./src/components/InfoPost/pages/index.tsx`)
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
		})

		graphql(`
			{
				allContentfulInformation {
					edges {
						node {
							createdAt(formatString: "YYYY.MM.DD")
							postExcerpt
							type
							id
						}
					}
				}
			}
		`).then(result => {
			result.data.allContentfulInformation.edges.forEach(edge => {
				const node = edge.node
				createPage({
					path: `/posts/${node.id}`,
					component: docsInfo,
					context: {
						id: node.id
					}
				})
			})
		})

		graphql(`
			{
				site {
					siteMetadata {
						title
					}
				}
			}
		`).then(res => {
			console.log(res)
			const data = `Awamori in the Pocket`;
			createPage({
				path: `/about/`,
				component: docProfile,
				context: {
					tite: data
				}
			})
			createPage({
				path: `/posts/`,
				component: docPost,
				context: {
					tite: data
				}
			})
			createPage({
				path: `/`,
				component: docTop,
				context: {
					tite: data
				}
			})
			createPage({
				path: `/info/`,
				component: docInfo,
				context: {
					tite: data
				}
			})
		})
		resolve()
	})
	return Promise.all([docs]);
  }