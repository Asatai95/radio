const path = require(`path`)
import { GatsbyNode } from "gatsby"

export const createPages: GatsbyNode["createPages"] = async ({
     actions, page
}) => {
    const {createPage} = actions
    console.log(page)
    // function createContentListPages({ itemTotal, prefix, component, context, limit = 10 }) {
    //     const pageTotal = Math.ceil(itemTotal / limit)
    //     for (let page = 1; page <= pageTotal; page++) {
    //         const path = page > 1 ? `${prefix}/${page}` : `${prefix}`
    //         const skip = (page - 1) * limit
    //         createPage({
    //             path,
    //             component,
    //             context: {
    //                 ...context,
    //                 itemTotal,
    //                 limit,
    //                 page,
    //                 pageTotal,
    //                 prefix,
    //                 skip
    //             }
    //         })
    //     }
    // }
    console.log(__dirname)
    const IndexTemplate = path.resolve(`../src/components/Top/pages/index.tsx`)
    createPage({
        path: `/about`,
        component: IndexTemplate,
        context: {}
    })
}