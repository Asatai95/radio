import * as React from "react"
import { graphql } from "gatsby"
import { IndexQuery_ } from '../../../../types/graphql-types'
import { Layout } from "../templates/Layout"
import { Section01 } from "../organisms/Section01"
import { Section02 } from "../organisms/Section02"
import { Section03 } from "../organisms/Section03"
import { Section04 } from "../organisms/Section04"
import { Section05 } from "../organisms/Section05"

type Props = {
  data ?: IndexQuery_
}

const Component: React.FC<Props> = ({ data }) => {
  return(
    <Layout>
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      {/* <>
        <p>{data.site?.siteMetadata?.title}</p>
      </> */}
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
