const path = require("path")
import { GatsbyNode } from "gatsby"
import { ContentfulAuthorConnection, ContentfulAuthor, } from "../types/graphql-types"

type Result = {
    allContentfulAuthor: ContentfulAuthorConnection
}

export type AuthorContext = {
    author: ContentfulAuthor
}

const query = `
{
  allContentfulAuthor {
    edges {
      node {
        id
        name
        biography {
            childMarkdownRemark {
                html
            }
        }
      }
    }
  }
}
`

export const createPages: GatsbyNode["createPages"] = async ({
    graphql,
    actions: { createPage },
}) => {
    const result = await graphql<Result>(query)
    if (result.errors || !result.data) {
        console.log(result)
        throw result.errors
    }
    const { edges } = result.data.allContentfulAuthor
    if (!edges || !edges) {
        throw new Error("undefined authors")
    }
    console.log("edges")
    console.log(edges)
    const postTemplate = path.resolve("./src/components/pages/author.tsx")
    edges.forEach(edge => {
        createPage<AuthorContext>({
            path: `/author/`,
            component: postTemplate,
            context: { author: edge.node },
        })
    })
}