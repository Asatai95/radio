import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

export const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage01: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 200, maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      },
      placeholderImage02: file(relativePath: { eq: "gatsby-icon.png" }){
        childImageSharp {
          fixed(width: 200, height: 200){
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <>
      <Img fixed={data.placeholderImage02.childImageSharp.fixed} />
      <Img fluid={data.placeholderImage01.childImageSharp.fluid} />
    </>
  )
}

// export const cloudinaryImg = () => {
//   const data = useStaticQuery(graphql`
//     query CloudinaryImages {
//       allCloudinaryMedia {
//           edges {
//               node {
//                 secure_url
//               }
//           }
//       }
//     }
//   `)
//   console.log(data)
//   // const img = data;
// }

