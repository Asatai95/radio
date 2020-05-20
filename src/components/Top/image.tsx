import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
  return (
    <>
      <Img fixed={data.placeholderImage02.childImageSharp.fixed} />
      <Img fluid={data.placeholderImage01.childImageSharp.fluid} />
    </>
  )
}
