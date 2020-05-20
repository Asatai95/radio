
'use strict'
require('ts-node').register({
  compilerOptions: {
    module: 'commonjs',
    target: 'esnext',
  },
})

const path = require("path")
const { paginate } = require("gatsby-awesome-pagination")

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions

	const docTop = path.resolve(`./src/components/Top/pages/index.tsx`)
	const docProfile = path.resolve(`./src/components/Profile/pages/index.tsx`)
	const docContact = path.resolve(`./src/components/Contact/pages/index.tsx`)

	const postTemplate = path.resolve(`./src/components/Contents/pages/index.tsx`)
	const docsInfo = path.resolve(`./src/components/InfoPost/pages/index.tsx`)
	const docs = new Promise((resolve, reject) => {

		graphql(`
			{
				allContentfulPosts(sort: { fields: [title], order: DESC }) {
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
				allContentfulInformation(sort: { fields: [createdAt], order: DESC }) {
					edges {
						node {
							createdAt(formatString: "YYYY.MM.DD")
							postExcerpt
							type
							id
							childContentfulInformationContentRichTextNode {
								json
							}
							thumbnail {
								file {
								  url
								}
							}
						}
					}
				}
			}
		`).then(result => {
			if (result.errors) {
				return Promise.reject(result.errors)
			}

			const posts = result.data.allContentfulPosts.edges
			paginate({
				createPage,
				items: posts,
				itemsPerPage: 10,
				pathPrefix: ({ pageNumber, numberOfPages }) => pageNumber === 0 ? '/posts' : '/posts/page',
				component: path.resolve('./src/components/Posts/pages/index.tsx')
			})

			const postItems = result.data.allContentfulInformation.edges
			paginate({
				createPage,
				items: postItems,
				itemsPerPage: 7,
				pathPrefix: ({ pageNumber, numberOfPages }) => pageNumber === 0 ? '/info' : '/info/page',
				component: path.resolve('./src/components/Information/pages/index.tsx')
			})
		})

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
							childContentfulInformationContentRichTextNode {
								json
							}
						}
					}
				}
			}
		`).then(result => {
			result.data.allContentfulInformation.edges.forEach(edge => {
				const node = edge.node
				createPage({
					path: `/info/${node.id}`,
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
			const data = `Awamori in the Pocket`;
			createPage({
				path: `/about/`,
				component: docProfile,
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
				path: `/contact/`,
				component: docContact,
				context: {
					tite: data
				}
			})
		})
		resolve()
	})
	return Promise.all([docs]);
  }