import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../templates/Layout"
import { Section01 } from "../organisms/Section01"
import { Section02 } from "../organisms/Section02"
import { Contact } from "../organisms/Information"
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
       <Contact />
       <Section02 />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String) {
    allContentfulPosts(filter: { id: { eq: $id } }) {
      edges {
        node {
          id
          thumbnail {
            file {
              url
            }
          }
          title
          postExcerpt
          createdAt
          childContentfulPostsContentRichTextNode {
            json
          }
        }
      }
    }
  }
`

export default Component
