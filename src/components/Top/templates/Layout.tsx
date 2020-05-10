/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from "gatsby"
// import { IndexQuery_ } from '../../../types/graphql-types'
import { css } from '@emotion/core'
import { Header } from "../organisms/Header"
import "../../../styles/layout.css"
// import { Image } from "../image"
import 'bootstrap/dist/css/bootstrap.min.css'
// import Author from "./author"
import { CursoPoint } from "../atoms/Cursor"
import { Footer } from "../organisms/Footer"
import { social, flight } from "../../../styles/Shared"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const style = {
  wrapper: css`
    margin: 0 auto,
    maxWidth: 960,
    padding: 0 1.0875rem 1.45rem,
    background: 0,0,0 ;
  `,
  container: css`
    padding: 0;
    background: rgb(255,255,255,.9);
  `
}
interface Layoutprops {
  readonly children?: React.ReactNode | readonly React.ReactNode[]
}

export const Layout = ({ children }: Layoutprops) => {
  console.log(children)
  const data = useStaticQuery(graphql`
    query IndexDivQueryItem {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  console.log("data")
  console.log(data)
  return (
    <div className="contentBlock">
      <div className="backImage"></div>
      <CursoPoint />
      <div css={style.container} className="container">
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
        <nav css={[social.nav, navside]} className="nav-side">
          <ul css={[ social.ul, flight ]} className="social-list icon-list f-light">
            <li>
              <a css={social.shareicon} href="#" className="cursor-react-sml" target="_blank">
                {/* <FontAwesomeIcon icon={['fab', 'apple']} /> */}
              </a>
            </li>
            <li>
              <a css={social.shareicon} href="#" className="cursor-react-sml" target="_blank">
                {/* <FontAwesomeIcon icon={['fab', 'microsoft']} /> */}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

const navside = css`
  @media screen and (max-width: 800px){
    bottom: initial;
    left: 19px;
    top: 20px;
    z-index: 101;
  }
  @media screen and (max-width: 1500px) and (min-width: 801px){
    left: 2%;
  }
`