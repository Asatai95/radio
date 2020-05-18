import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../templates/Layout"
import { Section01 } from "../organisms/Section01"

type Props = {
  data: string;
}

const Component: React.FC<Props> = ({data}) => {
  const content = data;
  console.log(content)
  return(
    <Layout>
       <Section01 children={content}/>
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
