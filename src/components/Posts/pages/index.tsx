import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../templates/Layout"
import { Section01 } from '../organisms/Section01'
import { Section02 } from '../organisms/Section02'

type Props = {}

const Component: React.FC<Props> = () => {
  return(
    <Layout>
        <Section01 />
        <Section02 />
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexPostsTitle {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Component
