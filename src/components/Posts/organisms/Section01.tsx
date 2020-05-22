
import React, {useState, useEffect} from 'react'
import { css, keyframes } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'
import { scrolldown } from "../../../styles/Shared"
import { Pagination } from "../molecules/Pagination"

interface Layoutprops {
    readonly children?: React.ReactNode | readonly React.ReactNode[]
}

export const Section01 = ({children} : Layoutprops) => {
    const [protocols, setProtocol] = useState("")
    const [hostnames, setHostname] = useState("")
    useEffect(() => {
        setProtocol(location.protocol)
        setHostname(location.hostname)
    }, [])

    const link = (d) => {
        var protocol = protocols;
        var host = hostnames;
        if(host === "localhost"){
            host = "localhost:8000";
        }
        return `${protocol}//${host}/posts/${d}`;
    }
    const data = useStaticQuery(graphql`
        query{
            allContentfulPosts(sort: { fields: [createdAt], order: ASC }) {
                edges {
                    node {
                        thumbnail {
                            file {
                                url
                            }
                        }
                        id
                        title
                        postExcerpt
                        createdAt
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
        }
    `);

    const item = data.allContentfulPosts.edges;
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

                {
                    postItem.map((d, index) => {
                        return (
                            <div key={index} css={SectionContent.post} className="post postContentImg">
                                <div css={SectionContent.postcontent} className="post-content">
                                    <a href={link(d.node.id)}>
                                        <img className="postImg" css={SectionContent.img} src={d.node.thumbnail[0].file.url} alt=""/>
                                    </a>
                                </div>
                                <div css={SectionContent.postheader} className="post-header">
                                    <h2 css={SectionContent.h2}>
                                        <a className="postImgLink" css={SectionContent.link} href={link(d.node.id)}>
                                            {d.node.title}
                                        </a>
                                    </h2>
                                    <p css={SectionContent.p}>
                                        {d.node.postExcerpt}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
                {elm()}
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
            <Pagination props={children} />
            <p css={[scrolldown, SectionContent.scroll]} className="scrolldown hide-sml bar radio">
                RADIO
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
        padding-top : 300px;
        @media (max-width: 480px) {
            padding-top: 200px!important;
        }
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
        @media (max-width: 480px) {
            margin: 20px 20px;
        }
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
        top: 300px;
        bottom: unset!important;
        position: fixed!important;
    `
};