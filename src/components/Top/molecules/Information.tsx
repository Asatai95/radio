import React, {useState} from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { flight } from '../../../styles/Shared'
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

const onhandle = (event) =>{
    console.log(event.target.name)
}

export const Information = () => {
    const [mouse, setMouse] = useState("")
    const data = useStaticQuery(graphql`
        query {
            LogoImage: file(relativePath: { eq: "Logo.png" }) {
                    childImageSharp {
                        fixed(width: 250) {
                            ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)

    const handleEvent =() =>{
        console.log("test")
    }

    return (
        <ul css={style.informationohome} className="information-list information-home l-right">
            <li className="feedInfo" css={style.li}>
                <a css={style.cursor} href="#" className="cursor-react" id="informationlink">
                    <div css={style.imgbox} className="imgbox">
                        <Img fixed={data.LogoImage.childImageSharp.fixed} />
                    </div>
                    <div css={style.metabox} className="metabox">
                        <div className="blink">
                            <p css={[ style.metainfo, flight ]} className="metainfo f-light">2019.09.04 - Media</p>
                            <p css={style.metainfo} className="ttl">【WEB掲載】デビュー曲「宇宙」の制作とCHRONICLEが目指す表現の追求【インタビュー】</p>
                        </div>
                    </div>
                </a>
            </li>
            <li css={style.li}>
                <a href="#" css={style.cursor} className="cursor-react">
                    <div css={style.imgbox} className="imgbox">
                        <Img fixed={data.LogoImage.childImageSharp.fixed} />
                    </div>
                    <div css={style.metabox} className="metabox">
                        <div className="blink">
                            <p css={[ style.metainfo, flight ]} className="metainfo f-light">2019.09.04 - Radio</p>
                            <p css={style.metainfo} className="ttl">【WEB掲載】デビュー曲「宇宙」の制作とCHRONICLEが目指す表現の追求【インタビュー】</p>
                        </div>
                    </div>
                </a>
            </li>
            <li css={style.li}>
                <a href="#" css={style.cursor} className="cursor-react">
                    <div css={style.imgbox} className="imgbox">
                        <Img fixed={data.LogoImage.childImageSharp.fixed} />
                    </div>
                    <div css={style.metabox} className="metabox">
                        <div className="blink">
                            <p css={[ style.metainfo, flight ]} className="metainfo f-light">2019.09.04 - Blog</p>
                            <p css={style.metainfo} className="ttl">【WEB掲載】デビュー曲「宇宙」の制作とCHRONICLEが目指す表現の追求【インタビュー】</p>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    )
}

const style = {
    informationohome: css`
        @media screen and (max-width: 800px){
            float: none;
            width: 100%;
        }
        @media screen and (max-width: 1100px) and (min-width: 801px){
            float: none;
            width: 100%;
        }
        @media screen and (min-width: 1101px){
            float: left;
            width: calc(100%);
        }
    `,
    li: css`
        margin-bottom: 3px;
    ` ,
    cursor: css`
        display: flex;
        justify-content: flex-start;
        align-items: stretch;
    ` ,
    imgbox: css`
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 284px;
        overflow: hidden;
        background-color : #cccccc;
    `,
    corsorimg: css`
        transform: scale(1);
        transform-origin: center center;
        transition: transform .4s ease-out;
    `,
    metabox: css`
        width: 100%;
        padding: 23px 40px 20px;
        background-color: rgb(32,166,242,.5);
        position: relative;
    `,
    metainfo: css`
        position: relative;
        z-index: 9;
        color : #222;
        fint-size: 16px;
    `
}