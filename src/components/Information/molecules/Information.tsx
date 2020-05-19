
import React from 'react'
import { css, keyframes } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'
// // import { LunrSearch } from '../molecules/lunrsearch'
import { scrolldown, flight } from "../../../styles/Shared"
// import { Pagination } from "../molecules/Pagination"
import Img from "gatsby-image"

export const Information = (props) => {
    const data = useStaticQuery(graphql`
        query{
            allContentfulInformation {
                edges {
                    node {
                        createdAt(formatString: "YYYY.MM.DD")
                        postExcerpt
                        type
                        id
                    }
                }
            }
            allContentfulNextDate {
                edges {
                    node {
                        date(formatString: "MM/DD")
                    }
                }
            }
            LogoImage: file(relativePath: { eq: "Logo.png" }) {
                    childImageSharp {
                        fixed(width: 230) {
                            ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    const item = data.allContentfulInformation.edges;
    var flag = false;
    if (item.length % 2 === 1){
        flag = true;
    }
    var elm = () => {}
    if (flag === true){
        var elm = () => {
            return <div css={SectionContent.space}></div>
        }
    }
    const postItem = item.map((d) => {
        if (d.node.postExcerpt !== undefined){
            return d;
        }
    })

    const date = data.allContentfulNextDate.edges[0];

    const link = (d) => {
        var protocol = location.protocol;
        var host = location.hostname ;
        if(host === "localhost"){
            host = "localhost:8000";
        }
        return `${protocol}//${host}/info/${d}`;
    }
    return (
        <section css={SectionContent.main} className="section-head section-head-home">
            <div css={SectionContent.next} className="next-stream">
                <span css={SectionContent.date} className="next-stream_date">
                    次回の収録日は
                    <span css={SectionContent.text} id="js-next">{date.node.date}</span>
                    です。
                </span>
                <br />
            </div>
            <div css={SectionContent.posts} id="postsImg">

                <ul css={style.informationohome} className="information-list information-home l-right">
                    {
                        postItem.map((d, index) => {
                            const n = d.node;
                            return (
                                <li key={index} className="feedInfo" css={style.li}>
                                    <a css={style.cursor} href={link(d.node.id)} className="cursor-react" id="informationlink">
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
                {elm()}
            </div>
            {/* <Pagination props={props}/> */}
            <p css={[scrolldown, SectionContent.scroll]} className="scrolldown hide-sml">
                ScrollDown
            </p>
        </section>
    )
}

const blockkeyframe =keyframes`
    0% {opacity: 0}
    100% {opacity: 1}
`

const SectionContent = {
    main : css`
        padding-top : 250px;
        @media (min-width: 801px) {
            position : relative;
            padding: 50px 0;
            padding-top : 250px;
        }
    `,
    next: css`
        margin: 50px auto;
        text-align: center;
        margin-top: 0;
        -webkit-animation-name: fadeIn;
        animation-name: fadeIn;
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
    `,
    date: css`
        display: inline-block;
        text-align: center;
        font-size: 1.1rem;
        font-weight: bold;
        letter-spacing: 0.1rem;
    `,
    text: css`
        margin-right: 5px;
        margin-left: 5px;
        background-color: rgb(81, 165, 255);
        padding: 5px 10px;
        color: #fff;
        border-radius: 3px;
    `,
    posts: css`
        float: unset;
        align-items: center;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: auto;
    `,
    post: css`
        width: 450px;
        margin: 20px 80px;
        margin-bottom: 50px;
    `,
    space: css`
        width: 450px;
        margin: 20px 80px;
        margin-bottom: 50px;
    `,
    postcontent: css`
        float: left;
        width: 100%;
        overflow: hidden;
        border-radius: 10px;
        margin-bottom: 20px;
        text-shadow: 0 1px 0 rgba(81,165,255,.15);
        border: solid rgba(81,165,255,.21);
        border-width: 2px 2px 5px;
    `,
    postheader: css`
        width: 85%;
        margin: 20px auto;
        margin-bottom: 0px;
    `,
    img: css`
        width: 100%;
        height: 280px;
        margin-bottom: 20px;
        transition: .8s;
        margin: 0;
    `,
    h2: css`
        font-size: 19px;
        font-weight: 800;
    `,
    link: css`
        color: #0066c0;
    `,
    p:css`
        font-size: 12px;
        font-weight: 800;
        color: #666666;
        padding: 0;
    `,
    scroll: css`
        @media (max-width: 1100px) {
            right: -2%;
        }
        display: block;
        -webkit-animation-name: ${blockkeyframe};
        animation-name: ${blockkeyframe};
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
        top: 500px;
        bottom: unset!important;
    `
};

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