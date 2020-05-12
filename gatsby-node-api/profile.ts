const path = require("path")
import { GatsbyNode } from "gatsby"

export const createPages: GatsbyNode["createPages"] = async ({
    actions: { createPage },
}) => {
    const IndexTemplate = path.resolve('./src/components/Profile/pages/index.tsx')
    createPage({
        path: `/about/`,
        component: IndexTemplate,
        context: {}
    })
}