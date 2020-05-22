
import React, {useState, useEffect} from 'react'
import { css, keyframes } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'
import { scrolldown } from "../../../styles/Shared"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface Layoutprops {
    readonly children?: React.ReactNode | readonly React.ReactNode[]
}

export const Section01 = ({children}: Layoutprops) => {
    const [protocols, setProtocol] = useState("")
    const [hostnames, setHostname] = useState("")
    useEffect(() => {
        setProtocol(location.protocol)
        setHostname(location.hostname)
    }, [])

    const itemLink = (listItem) => {
        var protocol = protocols;
        var host = hostnames;
        if(host === "localhost"){
            host = "localhost:8000";
        }
        window.location.href = `${protocol}//${host}/posts/${listItem}`
    }
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
                try{
                    if (node.data.uri.indexOf("anchor.fm") !== -1){
                        return(
                            <iframe height="102" width="700" src={node.data.uri} frameBorder="0" scrolling="no"></iframe>
                        )
                    } else {
                        return(
                            <a href={node.data.uri} target="_blink">{children}</a>
                        )
                    }
                } catch {
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
            allContentfulPosts(sort: { fields: [title], order: ASC }) {
                edges {
                    node {
                      title
                      id
                    }
                }
            }
        }
    `);
    const date = data.allContentfulNextDate.edges[0];
    const image = children.allContentfulPosts.edges[0].node.thumbnail[0].file.url;

    const handleNextClick = (e) => {
        e.preventDefault();
        const id = children.allContentfulPosts.edges[0].node.id;
        const item = data.allContentfulPosts.edges;
        const ids = item.map((d) => {
            var datas = d.node.id;
            return datas;
        })
        const index = ids.indexOf(id);
        if (index === ids.length -1){
            return false;
        }
        const listItem = ids[index + 1];
        itemLink(listItem)
    };

    const handlePreClick = (e) => {
        e.preventDefault();
        const id = children.allContentfulPosts.edges[0].node.id;
        const item = data.allContentfulPosts.edges;
        const ids = item.map((d) => {
            var datas = d.node.id;
            return datas;
        })
        const index = ids.indexOf(id);
        if (index === 0){
            return false;
        }
        const listItem = ids[index - 1];
        itemLink(listItem)
    }
    const linkItempre = () => {
        const id = children.allContentfulPosts.edges[0].node.id;
        const item = data.allContentfulPosts.edges;
        const ids = item.map((d) => {
            var datas = d.node.id;
            return datas;
        })
        const index = ids.indexOf(id);
        var previousBtitem = true;
        if (index === 0){
            previousBtitem = false;
        }
        return previousBtitem;
    }

    const linkItemne = () => {
        const id = children.allContentfulPosts.edges[0].node.id;
        const item = data.allContentfulPosts.edges;
        const ids = item.map((d) => {
            var datas = d.node.id;
            return datas;
        })
        const index = ids.indexOf(id);
        var nextBtitem = true;
        if (index === ids.length - 1){
            nextBtitem = false;
        }
        return nextBtitem;
    }

    const handledisAbledClick = (e) => {
        e.preventDefault();
        return false;
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
            <div css={SectionContent.posts} id="posts">
                <div css={SectionContent.imgBox}>
                    <img css={SectionContent.img} src={image} alt=""/>
                </div>
                {docs}
                <div css={SectionContent.BtBox} className="pageBt">
                    {linkItempre() === true && (
                        <a href="#" onClick={(e) => handlePreClick(e)}>
                            <Button className={BtStyle().buttonBack}>PREVIOUS</Button>
                        </a>
                    )}
                    {linkItempre() === false && (
                        <a href="#" onClick={(e) => handledisAbledClick(e)} css={disabledBt}>
                            <Button disabled={true} className={BtStyle().buttonDisable}>PREVIOUS</Button>
                        </a>
                    )}
                    <a href="/posts" css={backListlink} className="backlink">
                        <Button className={BtStyle().buttonBacklist}>Back List</Button>
                    </a>
                    {linkItemne() === true && (
                        <a href="#" onClick={(e) => handleNextClick(e)}>
                            <Button className={BtStyle().buttonNext}>NEXT</Button>
                        </a>
                    )}
                    {linkItemne() === false && (
                        <a href="#" onClick={(e) => handledisAbledClick(e)} css={disabledBt}>
                            <Button disabled={true} className={BtStyle().buttonDisable}>NEXT</Button>
                        </a>
                    )}
                </div>
            </div>
            <div className="sideBar">
                <ul className="banner-list">
                    <li>
                        <a href="https://www.facebook.com/awapocke/" target="_blink">
                            <img src="https://res.cloudinary.com/dh50en6xf/image/upload/v1589876664/gatsby-source-image/f_logo_RGB-Blue_58_a5hpfv.png" alt=""/>
                        </a>
                    </li>
                    <li>
                        <a href="https://anchor.fm/pockeawa" target="_blink">
                            <img src="https://res.cloudinary.com/dh50en6xf/image/upload/v1589891899/gatsby-source-image/unnamed_woquid.png" alt=""/>
                        </a>
                    </li>
                </ul>
            </div>
            <p css={[scrolldown, SectionContent.scroll]} className="scrolldown hide-sml bar radio">
                RADIO
            </p>
        </section>
    )
}

const BtStyle = makeStyles({
    buttonBack: {
        color: "#fff",
        background: "linear-gradient(45deg, rgb(33, 150, 243) 30%, rgb(33, 203, 243) 90%)",
        width: "150px",
        height: "45px",
        border: "solid rgba(0,0,0,.21)",
        borderWidth: "1px 1px 4px",
        padding: "0px 8px",
        textShadow: "0 1px 0 rgba(0,0,0,.15)",
        transition: ".8s",
        borderRadius: "30px",
    },
    buttonDisable: {
        background: "rgba(0, 0, 0, 0.26)",
        width: "150px",
        height: "45px",
        border: "none",
        padding: "0px 8px",
        textShadow: "0 1px 0 rgba(0,0,0,.15)",
        borderRadius: "30px",
    },
    buttonNext: {
        color: "#fff",
        background: "linear-gradient(225deg, rgb(33, 150, 243) 30%, rgb(33, 203, 243) 90%)",
        width: "150px",
        height: "45px",
        border: "solid rgba(0,0,0,.21)",
        borderWidth: "1px 1px 4px",
        padding: "0px 8px",
        textShadow: "0 1px 0 rgba(0,0,0,.15)",
        transition: ".8s",
        borderRadius: "30px",
    },
    buttonBacklist: {
        color: "#222",
        background: "rgb(255,255,255)",
        width: "150px",
        height: "45px",
        border: "solid rgba(0,0,0,.21)",
        borderWidth: "1px 1px 4px",
        padding: "0px 8px",
        textShadow: "0 1px 0 rgba(0,0,0,.15)",
        transition: ".8s",
        borderRadius: "30px",
    }
})

const backListlink = css`
    text-decoration: none;
`

const disabledBt = css`
    pointer-events: none;
`

const blockkeyframe =keyframes`
    0% {opacity: 0}
    100% {opacity: 1}
`

const SectionContent = {
    main : css`
        @media (max-width: 480px) {
            padding-top: 250px!important;
        }
        @media (max-width: 800px) {
            padding-top : 41px;
        }
        @media (min-width: 801px) {
            position : relative;
            padding-top: 300px;
            padding-bottom: 0;
        }
        @media screen and (max-width: 896px) and (min-width: 481px) {
            padding-top: 250px!important;
        }
    `,
    BtBox: css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 85%;
        margin: 70px auto;
        margin-bottom: 0;
        @media (max-width: 480px) {
            width: 100%;
        }
        @media screen and (max-width: 896px) and (min-width: 481px) {
            width: 100%;
        }
    `,
    imgBox: css`
        width: 70%;
        height: 350px;
        margin: 70px auto;
        margin-top: 0;
        border-radius: 5px;
        @media (max-width: 480px) {
            width: 100%;
            height: 300px;
        }
        @media screen and (max-width: 1200px) and (min-width: 897px) {
            width: 90%;
        }
        @media screen and (max-width: 896px) and (min-width: 481px) {
            width: 90%;
        }
    `,
    img: css`
        width: 100%;
        height: 100%;
        border-radius: 5px;
        @media (max-width: 480px) {
            width: 100%;
        }
        @media screen and (max-width: 1200px) and (min-width: 897px) {
            width: 100%;
        }
        @media screen and (max-width: 896px) and (min-width: 481px) {
            width: 100%;
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
       @media (max-width: 480px) {
           width: 90%;
       }
       @media screen and (max-width: 896px) and (min-width: 481px) {
            width: 80%;
        }
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
        top: 400px;
        bottom: unset!important;
        position: fixed!important;
    `
};