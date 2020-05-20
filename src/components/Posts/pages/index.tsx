import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../templates/Layout"
import { Section01 } from '../organisms/Section01'
import { Section02 } from '../organisms/Section02'
import { MainImg } from "../organisms/MainImg"

interface Layoutprops {
  readonly children?: React.ReactNode | readonly React.ReactNode[]
}

const Component: React.FC<Layoutprops> = (children) => {
  return(
    <Layout>
        <MainImg />
        <Section01 children={children}/>
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
