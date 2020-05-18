
import React from 'react'
import { css, keyframes } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'
import { scrolldown } from "../../../styles/shared"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface Layoutprops {
    readonly children?: React.ReactNode | readonly React.ReactNode[]
}

export const Section01 = ({children}: Layoutprops) => {

    const contents = children.allContentfulPosts.edges[0].node.childContentfulPostsContentRichTextNode.json;

    const Bold = ({ children }: Layoutprops) => <span css={SectionContent.bold} className="bold">{children}</span>
    const Text = ({ children }: Layoutprops) => <p className="align-center">{children}</p>

    const options =  {
        renderMark: {
            [MARKS.BOLD]: text => <Bold>{text}</Bold>,
        },
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
            [INLINES.HYPERLINK]: (node, children) => {
                if (node.data.uri.indexOf("anchor.fm") !== -1){
                    return(
                        <iframe height="102" width="700" src={node.data.uri} frameBorder="0" scrolling="no"></iframe>
                    )
                } else {
                    return(
                        <a href={node.data.uri} target="_blink">{children}</a>
                    )
                }
            },
        },
        renderText: text => text.replace('!', '?'),
    }
    const item = documentToReactComponents(contents, options)
    const docs = item.map((d) => {
        return d;
    })
    const data = useStaticQuery(graphql`
        query {
            allContentfulNextDate {
                edges {
                    node {
                        date(formatString: "MM/DD")
                    }
                }
            }
            allContentfulPosts {
                edges {
                  node {
                    id
                  }
                }
              }
        }
    `);
    const date = data.allContentfulNextDate.edges[0];
    const image = children.allContentfulPosts.edges[0].node.thumbnail[0].file.url;

    const handleClick = (e) => {
        e.preventDefault();
        const id = children.allContentfulPosts.edges[0].node.id;
        console.log(id)
        const item = data.allContentfulPosts.edges;
        const ids = item.map((d) => {
            var datas = d.node.id;
            return datas;
        })
        const index = ids.indexOf(id);
        var flag = true;
        if (index === ids.length -1){
            flag = false;
        }
        const listItem = ids[index];
        console.log(listItem)
        var protocol = location.protocol;
        var host = location.hostname ;
        if(host === "localhost"){
            host = "localhost:8000";
        }
        window.location.href = `${protocol}//${host}/posts/${listItem}`
    };
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
                <div css={SectionContent.imgBox}>
                    <img css={SectionContent.img} src={image} alt=""/>
                </div>
                {docs}
                <div css={SectionContent.BtBox} className="pageBt">
                    <a href="#" onClick={(e) => handleClick(e)}>
                        <Button className={BtStyle().buttonBack}>PREVIOUS</Button>
                    </a>
                    <a href="#">
                        <Button className={BtStyle().buttonNext}>NEXT</Button>
                    </a>
                </div>
            </div>
            <p css={[scrolldown, SectionContent.scroll]} className="scrolldown hide-sml">
                ScrollDown
            </p>
        </section>
    )
}

const BtStyle = makeStyles({
    buttonBack: {
        color: "#fff",
        background: "linear-gradient(45deg, rgb(33, 150, 243) 30%, rgb(33, 203, 243) 90%)",
        width: "150px",
        height: "40px",
        border: "solid rgba(0,0,0,.21)",
        borderWidth: "1px 1px 4px",
        padding: "0px 8px",
        textShadow: "0 1px 0 rgba(0,0,0,.15)",
        transition: ".8s",
    },
    buttonNext: {
        color: "#fff",
        background: "linear-gradient(225deg, rgb(33, 150, 243) 30%, rgb(33, 203, 243) 90%)",
        width: "150px",
        height: "40px",
        border: "solid rgba(0,0,0,.21)",
        borderWidth: "1px 1px 4px",
        padding: "0px 8px",
        textShadow: "0 1px 0 rgba(0,0,0,.15)",
        transition: ".8s",
    }
})

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
            padding-bottom: 0;
        }
    `,
    BtBox: css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 85%;
        margin: 50px auto;
        margin-bottom: 0;
    `,
    imgBox: css`
        width: 70%;
        height: 350px;
        margin: 70px auto;
        margin-top: 0;
        border-radius: 5px;
    `,
    img: css`
        width: 100%;
        height: 100%;
        border-radius: 5px;
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
    bold: css`
        font-weight: 800;
    `,
    posts: css`
       display: flex;
       align-items: flex-start;
       justify-content: center;
       width: 60%;
       height: 100%;
       flex-direction: column;
       margin: auto;
       padding: 30px 0;
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