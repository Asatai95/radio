import React from 'react'
import { css } from '@emotion/core'
import { flight } from '../../../styles/Shared'
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

interface Layoutprops {
    readonly children?: React.ReactNode | readonly React.ReactNode[]
}

export const Information = ({ children }: Layoutprops) => {

    const data = useStaticQuery(graphql`
        query {
            LogoImage: file(relativePath: { eq: "Logo.png" }) {
                    childImageSharp {
                        fixed(width: 230) {
                            ...GatsbyImageSharpFixed
                    }
                }
            }
            allContentfulInformation {
                edges {
                    node {
                        id
                        createdAt(formatString: "YYYY.MM.DD")
                        postExcerpt
                        type
                    }
                }
            }
        }
    `)

    if (children.length > 0 && children !== ""){
        var item = children.slice( 0, 7 );
    } else {
        var item = data.allContentfulInformation.edges.slice( 0, 7 );
    }

    return (
        <ul css={style.informationohome} className="information-list information-home l-right">
            {
                item.map((d, index) => {
                    if (d.node){
                        var n = d.node;
                    } else {
                        var n = d;
                    }
                    return (
                        <li key={index} className="feedInfo" css={style.li}>
                            <a css={style.cursor} href={link(n.id)} className="cursor-react" id="informationlink">
                                <div css={style.imgbox} className="imgbox">
                                    <Img fixed={data.LogoImage.childImageSharp.fixed} />
                                </div>
                                <div css={style.metabox} className="metabox">
                                    <div className="blink">
                                        <p css={[ style.metainfo, flight ]} className="metainfo f-light">{n.createdAt} - {n.type}</p>
                                        <p css={style.metainfo} className="ttl">{n.postExcerpt}</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}

const link = (d) => {
    if (typeof location !== "undefined") {
        var protocol = location.protocol;
        var host = location.hostname ;
        if(host === "localhost"){
            host = "localhost:8000";
        }
        return `${protocol}//${host}/info/${d}`;
    }
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
        height: 160px;
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