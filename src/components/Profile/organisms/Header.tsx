
import React from 'react'
import styled from '@emotion/styled'
import { Link, useStaticQuery, graphql } from 'gatsby'
// import { LunrSearch } from '../molecules/lunrsearch'
import { navbar, naviItem, headeritem} from "../../../styles/Header"
import Img from "gatsby-image"
import { css } from '@emotion/core'
// import { LunrSearch } from "../molecules/lunrsearch"

interface HeaderProps {
  readonly title: string
}

export const Header : React.FC<HeaderProps> = ({ title }: HeaderProps) => {
  const data = useStaticQuery(graphql`
    query {
      LogoImage: file(relativePath: { eq: "Logo.png" }) {
        childImageSharp {
          fixed(width: 345, height: 20) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  console.log(data)
  return (
    <nav css={[navbar, design.nav]} className="navbar navbar-expand-lg navbar-light">
      <TitleLink to="/" className="navbar-brand" css={design.headerLogo}>
        <Img fixed={data.LogoImage.childImageSharp.fixed} />
      </TitleLink>
      <div css={naviItem.menuicon} className="cursor-react menu-icon">
        <button css={naviItem.naviBt} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-torigger-icon" css={naviItem.navitorigger01}></span>
          <span className="navbar-torigger-icon" css={naviItem.navitorigger02}></span>
          <span className="navbar-torigger-icon" css={naviItem.navitorigger03}></span>
        </button>
      </div>

      <div css={headeritem.div} className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul css={design.ul} className="navbar-nav mr-auto">
          <li css={headeritem.li} className="nav-item">
            <a css={headeritem.a} className="nav-link active" href="/about">AWAPOKE</a>
          </li>
          <li css={headeritem.li} className="nav-item">
            <a css={headeritem.a} className="nav-link" href="/posts">RADIO</a>
          </li>
          <li css={headeritem.li} className="nav-item">
            <a css={headeritem.a} className="nav-link" href="/info">INFORMATION</a>
          </li>
          <li css={headeritem.li} className="nav-item">
            <a css={headeritem.a} className="nav-link" href="/contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

const TitleLink = styled(Link)`
  color: #222;
  &:active,
  &:hover {
    color: #fff;
  }
`

const design = {
  nav: css`
    width: 100%;
    background: rgb(32,166,242,.6)!important;
    position: relative;
  `,
  headerLogo: css`
    position: relative;
  `,
  ul: css`
    position: relative!important;
    top: unset!important;
  `
}