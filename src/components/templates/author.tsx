import * as React from "react"
import { Link } from "gatsby"
import { Layout } from "./layout"
import { AuthorContext } from "../../../gatsby-node"

type Props = {
    pathContext: AuthorContext
}

const Author: React.FC<Props> = ({ pathContext }) => {
    const contentItem = pathContext.author
    console.log(contentItem)
    return (
        <Layout>
            <h1>Author name is {contentItem.name}</h1>
            <p className="text" dangerouslySetInnerHTML={{__html: contentItem.biography.childMarkdownRemark.html}}></p>
            <ul>
                <li><Link to="/authors/">Back to authors</Link></li>
                <li><Link to="/">Back to top</Link></li>
            </ul>
        </Layout>
    )
}

export default Author;