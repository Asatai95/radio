/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

// import React from "react"
// import { Helmet } from 'react-helmet'
// import { useStaticQuery, graphql } from "gatsby"
// // import { SiteMetadataQuery } from 'generated/types/gatsby'
// import { css } from '@emotion/core'
// import { Header } from "../organisms/header"
// import "../../styles/layout.css"

// const wrapper = css`
//     margin: 0 auto,
//     maxWidth: 960,
//     padding: 0 1.0875rem 1.45rem,
// `
// interface Layoutprops {
//   readonly children?: React.ReactNode | readonly React.ReactNode[]
// }

// export const Layout = ({ children }: Layoutprops) => {
//   const data = useStaticQuery<SiteMetadataQuery>(graphql`
//     query SiteMetadata {
//       site {
//         siteMetadata {
//           title
//           description
//           authors {
//             name
//             slug
//           }
//         }
//       }
//     }
// `)

//   return (
//     <main>
//       <Helmet
//         titleTemplate={`%s - ${data.site.siteMetadata.title}`}
//         defaultTitle={data.site.siteMetadata.title}
//         meta={[
//           {
//             name: 'description',
//             content: data.site.siteMetadata.description,
//           },
//           {
//             name: 'keywords',
//             content: 'gatsby, gatsbyjs, sample, demo, typescript',
//           },
//         ]}
//       />
//       <Header siteTitle={data.site.siteMetadata.title} />
//       <div css={wrapper}>{children}</div>
//     </main>
//   )
// }

