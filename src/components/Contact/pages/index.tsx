import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../templates/Layout"
import { Section01 } from '../organisms/Section01'
import { Section02 } from "../organisms/Section02"
import { MainImg } from "../organisms/MainImg"

type Props = {}

const Component: React.FC<Props> = () => {
  return(
    <Layout>
        <MainImg />
        <Section01 />
        <Section02 />
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
