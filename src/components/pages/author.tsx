import * as React from "react"
import { Link } from "gatsby"
import { Layout } from "../templates/Layout"
import { AuthorContext } from "../../../gatsby-node-api/"

export type Props = {
    pathContext: AuthorContext
}

const Author: React.FC<Props> = ({ pathContext }) => {
    const contentItem = pathContext.author
    return (
        <Layout>
            <h1>Author name is {contentItem.name}</h1>
            <div className="text" dangerouslySetInnerHTML={{__html: contentItem.biography.childMarkdownRemark.html}} />
            <ul>
                <li><Link to="/authors/">Back to authors</Link></li>
                <li><Link to="/">Back to top</Link></li>
            </ul>
        </Layout>
    )
}

export default Author;