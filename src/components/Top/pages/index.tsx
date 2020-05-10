import * as React from "react"
import { Link, graphql } from "gatsby"
import { IndexQuery_ } from '../../../../types/graphql-types'
import { Layout } from "../templates/Layout"
import { Section01 } from "../organisms/Section01"
import { Section02 } from "../organisms/Section02"
import { Section03 } from "../organisms/Section03"

type Props = {
  data ?: IndexQuery_
}

const Component: React.FC<Props> = ({ data }) => {
  console.log("data")
  console.log(data)
  return(
    <Layout>
      <Section01 />
      <Section02 />
      <Section03 />
      <>
        <p>{data.site?.siteMetadata?.title}</p>
      </>
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