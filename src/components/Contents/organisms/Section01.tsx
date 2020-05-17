
import React from 'react'
import { css, keyframes } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'
import { scrolldown } from "../../../styles/shared"
// import { BLOCKS, MARKS } from '@contentful/rich-text-types';
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const Section01 = () => {

    const data = useStaticQuery(graphql`
        query {
            allContentfulNextDate {
                edges {
                    node {
                        date(formatString: "MM/DD")
                    }
                }
            }
            allContentfulPosts(sort: {fields: [title], order: DESC}) {
              nodes {
                childContentfulPostsContentRichTextNode {
                  content
                }
              }
            }
        }
    `);
    const content = data.allContentfulPosts.nodes;
    console.log(content)
    const date = data.allContentfulNextDate.edges[0];
    console.log(date)
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
            <div css={SectionContent.posts} id="posts">

            </div>
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
        @media (max-width: 800px) {
            padding-top : 41px;
        }
        @media (min-width: 801px) {
            position : relative;
            padding: 50px 0;
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
        overflow: unset;
        float: left;
        width: 100%;
    `,
    postheader: css`
        width: 85%;
        margin: 20px auto;
        margin-bottom: 0px;
    `,
    img: css`
        width: 100%;
        border-radius: 43px;
        height: 280px;
        margin-bottom: 20px;
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