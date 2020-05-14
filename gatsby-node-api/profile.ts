const path = require(`path`)
import { GatsbyNode } from "gatsby"

export const createProfile: GatsbyNode["createPages"] = async ({
    actions: { createPage },
}) => {
    console.log("createpage")
    const IndexTemplate = path.resolve(`../src/components/Profile/pages/index.tsx`)
    createPage({
        path: `/about/`,
        component: IndexTemplate,
        context: {}
    })
}