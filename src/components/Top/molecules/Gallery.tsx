import React from 'react'
import { css } from '@emotion/core'
import { sectionlinkhome } from "../../../styles/Shared"
import { useStaticQuery, graphql } from 'gatsby'

export const Gallery = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulPosts {
                edges {
                    node {
                        title
                        postExcerpt
                        createdAt(formatString: "YYYY/MM/DD")
                        thumbnail {
                            fixed(width: 720, height: 400) {
                                src
                            }
                        }
                    }
                }
            }
        }
    `)
    const item01 = data.allContentfulPosts.edges.slice( -2 );
    const item02 = data.allContentfulPosts.edges.slice( -4, -2 );

    return (
        <>
            <div css={styled.linkhome}>
                {
                    item01.map((d) => {
                        const n = d.node;
                        return (
                            <div css={[styled.contenthome , sectionlinkhome]} className="section-contents-home section-link-home item-fadein is-visible is-animate-done content">
                                <div css={styled.headline} className="box-headline">
                                    <h3 css={styled.headlineh3} className="headline f-light">{n.title}</h3>
                                    <p css={styled.headlinetext}>{n.postExcerpt}</p>
                                    <p css={styled.headlinetext}>{n.createdAt}</p>
                                </div>
                                <a href="#" className="cursor-react">
                                    <div css={styled.imgbox} className="imgbox cursor-react-imgbox">
                                        <img css={styled.imgitem} src={n.thumbnail[0].fixed.src} alt=""/>
                                    </div>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
            <div css={styled.linkhome}>
                {
                    item02.map((x) => {
                        const m = x.node;
                        return (
                            <div css={[styled.contenthome , sectionlinkhome]} className="section-contents-home section-link-home item-fadein is-visible is-animate-done content">
                                <div css={styled.headline} className="box-headline">
                                    <h3 css={styled.headlineh3} className="headline f-light">{m.title}</h3>
                                    <p css={styled.headlinetext}>{m.postExcerpt}</p>
                                    <p css={styled.headlinetext}>{m.createdAt}</p>
                                </div>
                                <a href="#" className="cursor-react">
                                    <div css={styled.imgbox} className="imgbox cursor-react-imgbox">
                                        <img css={styled.imgitem} src={m.thumbnail[0].fixed.src} alt=""/>
                                    </div>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

const styled = {
    contenthome: css`
        opacity: unset;
        transform: unset;
        will-change: unset;
        transition: opacity .6s ease-in-out, transform .6s ease-in-out;
        margin: 0px;
    `,
    headline: css`
        position: absolute;
        z-index: 2;
        top: 16%;
        left: calc((100vw - 90vw) / 2);
    `,
    headlineh3: css`
        @media screen and (max-width: 800px){
            font-size: 20px;
            font-weight: 800;
            color: #fff;
        }
        @media screen and (min-width: 801px){
            display: block;
            z-index: 2;
            font-size: 25px;
            font-weight: 800;
            color: #fff;
            margin-bottom: 15px;
        }
    `,
    headlinetext: css`
        font-weight: 800;
        color: #fff;
        z-index: 10;
        margin: 0;
    `,
    showsmllink: css`
        position: relative;
        display: block;
        width: 41px;
        height: 41px;
        line-height: 1;
        padding-top: 9px;
        text-align: center;
        border: 2px solid rgba(255, 255, 255, 0.18);
        border-radius: 50%;
        transition: background .3s ease-out, border .3s ease-out;
    `,
    imgbox: css`
        display: block;
        position: relative;
        overflow: hidden;
    `,
    imgitem: css`
        transform: scale(1);
        transform-origin: center center;
        transition: transform .4s ease-out;
        margin-bottom: 0;
    `,
    linkhome: css`
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-wrap: wrap;
    `
}