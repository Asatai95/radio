import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../templates/Layout"
import { Section01 } from "../organisms/Section01"
import { Section02 } from "../organisms/Section02"
import { MainImg } from "../organisms/MainImg"

type Props = {
  readonly data?: string;
}

const Component: React.FC<Props> = ({data}) => {
  const content = data;
  return(
    <Layout>
        <MainImg />
        <Section01 children={content}/>
        <Section02 />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String) {
    allContentfulInformation {
        edges {
          node {
            thumbnail {
              file {
                url
              }
              title
            }
            postExcerpt
            createdAt
            id
          }
        }
    }
  }
`

export default Component
