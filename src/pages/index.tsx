import * as React from "react"
import { Link, graphql } from "gatsby"
// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
import {IndexHogeQuery} from '../types/graphql-types.d';

type Props = {
  data: IndexHogeQuery
}

const Component: React.FC<Props> = ({ data }) => (
  <div>
    <h1>Hi People</h1>
    <p>
      Welcome to your new Gatsby site.
      <strong>{data.site?.siteMetadata?.title}</strong> site.
    </p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export const pageQuery = graphql`
  query IndexHoge {
    site {
      siteMetadata {
        title
      }
    }
  }
`

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link>
//   </Layout>
// )

export default Component
