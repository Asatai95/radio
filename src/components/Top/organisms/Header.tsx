
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
    <nav css={navbar} className="navbar navbar-expand-lg navbar-light">
      <TitleLink to="/" className="navbar-brand" css={headerLogo}>
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
        <ul className="navbar-nav mr-auto">
          <li css={headeritem.li} className="nav-item active">
            <a css={headeritem.a} className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
          </li>
          <li css={headeritem.li} className="nav-item">
            <a css={headeritem.a} className="nav-link" href="#">Gallery</a>
          </li>
          <li css={headeritem.li} className="nav-item dropdown">
            <a css={headeritem.a} className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li css={headeritem.li} className="nav-item">
            <a css={headeritem.a} className="nav-link disabled" href="#">Disabled</a>
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
const headerLogo = css`
  position: fixed;
  z-index: 10;
`