import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../templates/Layout"
import { Section01 } from "../organisms/Section01"
import { Section02 } from "../organisms/Section02"
import { Section03 } from "../organisms/Section03"
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
        <Section03 />
        <Section02 />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String) {
    allContentfulInformation(filter: { id: { eq: $id } }) {
        edges {
          node {
            thumbnail {
              file {
                url
              }
            }
            childContentfulInformationContentRichTextNode {
                json
            }
            type
            postExcerpt
            createdAt(formatString: "YYYY.MM.DD")
            id
          }
        }
    }
  }
`

export default Component
