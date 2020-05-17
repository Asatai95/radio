import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../templates/Layout"
import { Section01 } from "../organisms/Section01"

type Props = {}

const Component: React.FC<Props> = () => {
  return(
    <Layout>
       <Section01 />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Component
