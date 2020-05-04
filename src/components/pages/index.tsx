import * as React from "react"
import { Link, graphql } from "gatsby"
import { IndexQuery } from '../../../types/graphql-types'
import { Layout } from "../templates/layout"
import { Section01 } from "../organisms/top_01"

type Props = {
  data : IndexQuery
}

const Component: React.FC<Props> = ({ data }) => (
  <Layout>
    <Section01 />
    <div>
      <h1>Hi People</h1>
      <p>
        Welcome to your new Gatsby site.
        <strong>{data.site?.siteMetadata?.title}</strong> site.
      </p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </div>
  </Layout>
)

export const pageQuery = graphql`
  query IndexDivQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Component
