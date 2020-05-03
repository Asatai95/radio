/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from "gatsby"
import { IndexQuery_ } from '../../../types/graphql-types'
import { css } from '@emotion/core'
import { Header } from "../organisms/header"
import "../../styles/layout.css"
// import { Image } from "../image"
import 'bootstrap/dist/css/bootstrap.min.css'
// import Author from "./author"
import { CursoPoint } from "../atoms/Cursor"
import { Footer } from "../organisms/footer"

const style = {
  wrapper: css`
    margin: 0 auto,
    maxWidth: 960,
    padding: 0 1.0875rem 1.45rem,
    background: 0,0,0 ;
  `
}
interface Layoutprops {
  readonly children?: React.ReactNode | readonly React.ReactNode[]
}

export const Layout = ({ children }: Layoutprops) => {
  const data = useStaticQuery<IndexQuery_>(graphql`
    query IndexDivQueryItem {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
`)

  return (
    <div className="contentBlock">
      <div className="backImage"></div>
      <CursoPoint />
      <div className="container">
        <Helmet
          titleTemplate={`%s - ${data.site.siteMetadata.title}`}
          defaultTitle={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            {
              name: 'keywords',
              content: 'gatsby, gatsbyjs, sample, demo, typescript',
            },
          ]}
        />
        <Header title={data.site.siteMetadata.title} />
        <div css={style.wrapper}>
          {children}
        </div>
        <Footer />
      </div>
    </div>
  )
}

