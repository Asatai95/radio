
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { navbar, naviItem, headeritem} from "../../../styles/Header"
import Img from "gatsby-image"
import { css } from '@emotion/core'

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

  return (
    <nav css={navbar} className="navbar navbar-expand-lg navbar-light">
      <a href="/" className="navbar-brand" css={TitleLink}>
        <Img fixed={data.LogoImage.childImageSharp.fixed} />
      </a>
      <div css={naviItem.menuicon} className="cursor-react menu-icon">
        <button css={naviItem.naviBt} id="hamburger" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-torigger-icon first" css={naviItem.navitorigger01}></span>
          <span className="navbar-torigger-icon middle" css={naviItem.navitorigger02}></span>
          <span className="navbar-torigger-icon last" css={naviItem.navitorigger03}></span>
        </button>
      </div>

      <div css={headeritem.div} className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul css={styled.ul} className="navbar-nav mr-auto">
          <li css={headeritem.li} className="nav-item">
            <a css={headeritem.a} className="nav-link active" href="/">TOP</a>
          </li>
          <li css={headeritem.li} className="nav-item">
            <a css={headeritem.a} className="nav-link" href="/about">AWAPOKE</a>
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

const TitleLink = css`
  color: #222;
  top: 50px;
  position: fixed;
  z-index: 80;
  @media screen and (max-width: 480px) {
    display: none;
  }
  @media screen and (max-width: 992px) and (min-width: 897px) {
    position: fixed!important;
    z-index: 80!important;
  }
  @media screen and (max-width: 896px) and (min-width: 481px) {
    top: 20px;
  }
  &:active,
  &:hover {
    color: #fff;
  }

`;

const styled = {
  ul: css`
    @media screen and (max-width: 480px) {
      transition: .5s;
      top: 0!important;
      background: rgb(0,0,0,.8);
      width: 200px!important;
      left: 0;
      padding: 50px 0;
      border-radius: 5px;
      transform: translate(-250px,-250px);
      position: fixed!important;
    }
    @media screen and (min-width: 993px){
      top: 55px!important;
    }
    @media screen and (max-width: 992px) and (min-width: 897px) {
      transition: .5s;
      top: 0!important;
      background: rgb(0,0,0,.8);
      width: 200px!important;
      left: 0;
      padding: 50px 0;
      border-radius: 5px;
      transform: translate(-250px,-250px);
      position: fixed!important;
    }
    @media screen and (max-width: 896px) and (min-width: 481px) {
      transition: .5s;
      top: 0!important;
      background: rgb(0,0,0,.8);
      width: 200px!important;
      left: 0;
      padding: 50px 0;
      border-radius: 5px;
      transform: translate(-250px,-250px);
      position: fixed!important;
    }
  `,
}