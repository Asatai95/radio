import * as React from "react"
import { useStaticQuery ,graphql } from "gatsby"
import { Layout } from "../templates/Layout"
import { Section01 } from '../organisms/Section01'
import { Section02 } from "../organisms/Section02"
import { Contact } from "../organisms/Information"
import { Section03 } from "../organisms/Section03"

type Props = {}

const Component: React.FC<Props> = () => {
  return(
    <Layout>
        <Section01 />
        <Section02 />
        <Contact />
        <Section03 />
    </Layout>
  )
}

export const pageQuery = useStaticQuery(graphql`
  query IndexProfileTitle {
    site {
      siteMetadata {
        title
      }
    }
  }
`)

export default Component
