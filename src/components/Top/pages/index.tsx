import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../templates/Layout"
import { Section01 } from "../organisms/Section01"
import { Section02 } from "../organisms/Section02"
import { Section03 } from "../organisms/Section03"
import { Section04 } from "../organisms/Section04"
import { Section05 } from "../organisms/Section05"

type Props = {}

const Component: React.FC<Props> = () => {
  return(
    <Layout>
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
    </Layout>
  )
}

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
