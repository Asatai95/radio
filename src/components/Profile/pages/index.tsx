import * as React from "react"
import { useStaticQuery ,graphql } from "gatsby"
import { IndexQuery_ } from '../../../../types/graphql-types'
import { Layout } from "../templates/Layout"
import { Section01 } from '../organisms/Section01'
type Props = {
  data ?: IndexQuery_
}

const Component: React.FC<Props> = ({ data }) => {
  return(
    <Layout>
        <Section01 />
    </Layout>
  )
}

export const pageQuery = useStaticQuery(graphql`
  query IndexDivQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Component
