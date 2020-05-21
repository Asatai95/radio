import React, { useState } from 'react'
import { css, keyframes } from '@emotion/core'
import { Information } from '../molecules/Information'
import { useStaticQuery, graphql } from 'gatsby'
import { scrolldown } from "../../../styles/Shared"
import { Pagination } from "../molecules/Pagination"

interface Layoutprops {
    readonly children?: React.ReactNode | readonly React.ReactNode[]
}

export const Section01 =  ({children}: Layoutprops) => {
    const [typeValue, setValue] = useState("")
    const data = useStaticQuery(graphql`
        query {
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
            allContentfulNextDate {
                edges {
                    node {
                        date(formatString: "MM/DD")
                    }
                }
            }
        }
    `)

    const item = data.allContentfulInformation.edges;
    const query = item.map((d, index) => {
        return d.node;
    })

    const handleClick = (e) => {
        e.preventDefault();

        if(e.target.textContent === "All") {
            var dataItem = query;
        } else {
            var dataItem = query.filter((n) => {
                return n.type === e.target.textContent;
            })
        }

        return setValue(dataItem);
    }

    const typeList = item.map((y, key) => {
        const itemTypeList = y.node.type;
        return itemTypeList;
    })

    const date = data.allContentfulNextDate.edges[0];

    return (
        <section css={SectionContent.main} className="section-information-home" id="information">
            <div css={SectionContent.next} className="next-stream">
                <span css={SectionContent.date} className="next-stream_date">
                    次回の収録日は
                    <span css={SectionContent.text} id="js-next">{date.node.date}</span>
                    です。
                </span>
                <br />
            </div>
            <div css={SectionContent.linner} className="l-inner">
                <div css={SectionContent.clearfix} className="l-container clearfix">
                    <div css={SectionContent.clearfixleft} className="l-left">
                        <ul css={SectionContent.navinformation} className="nav-information nav-btnlist">
                            <li css={SectionContent.navinformationli}>
                                <a href="#" onClick={(e) => handleClick(e)} css={SectionContent.iconlinkbtn} className="cursor-react cursor-react-btn infoLinkitem active">All</a>
                            </li>
                            { typeList.find((d) => d === "News") && (
                                <li css={SectionContent.navinformationli}>
                                    <a href="#" onClick={(e) => handleClick(e)} css={SectionContent.iconlinkbtn} className="cursor-react cursor-react-btn infoLinkitem">News</a>
                                </li>
                            )}
                            { typeList.find((d) => d === "Radio") && (
                                <li css={SectionContent.navinformationli}>
                                    <a href="#" onClick={(e) => handleClick(e)} css={SectionContent.iconlinkbtn} className="cursor-react cursor-react-btn infoLinkitem">Radio</a>
                                </li>
                            )}
                        </ul>
                    </div>
                    <Information children={typeValue} />
                </div>
                <Pagination props={children} />
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
            <p css={[scrolldown, SectionContent.scroll]} className="scrolldown hide-sml bar">
                INFORMATION
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
        @media (max-width: 480px) {
            padding-top: 230px!important;
        }
        @media (max-width: 800px) {
            padding-top : 50px;
            padding-bottom: 60px;
        }
        @media screen and (max-width: 896px) and (min-width: 481px) {
            padding-top: 230px!important;
        }
        padding-top: 300px;
        padding-bottom: 150px;
        overflow: hidden;
    `,
    haedline: css`
        @media screen and (max-width: 1100px) and (min-width: 801px) {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        @media (max-width: 800px) {
            margin-bottom: 26px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        margin-bottom: 50px;
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
    headlinelight: css`
        margin-top: 13px;
    `,
    iconline: css`
        float: left;
        margin-top: 24px;
    `,
    iconlink: css`
        @media (max-width: 800px) {
            width : 33px;
            height: 33px;
            padding-top: 6px;
        }
        position: relative;
        display: block;
        width: 41px;
        height: 41px;
        line-height: 1;
        padding-top: 9px;
        text-align: center;
        border: 2px solid rgb(32,166,242,.8);
        border-radius: 50%;
        transition: background .3s ease-out, border .3s ease-out;
    `,
    iconlinkbtn: css`
        position: relative;
        display: inline-block;
        min-width: 73px;
        height: 35px;
        border: 2px solid #1e1e1e;
        border-radius: 19px;
        text-align: center;
        padding: 0 18px;
        transition: background .3s ease-out, border .3s ease-out
    `,
    clearfix: css`
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        min-height: 1%;
        width: 90%;
        margin : auto;
        margin-bottom: 100px;
        @media screen and (max-width: 480px) {
            margin-bottom: 80px;
        }
    `,
    clearfixleft: css`
        @media screen and (max-width: 800px) {
            float: none;
            max-width: 100%;
            width: 100%;
            margin-bottom: 35px;
        }
        @media screen and (max-width: 1100px) and (min-width: 801px){
            float: none;
            max-width: 100%;
            width: 100%;
            margin-bottom: 50px;
        }
        float: left;
        max-width: 500px;
        width: 32.89%;
    `,
    navinformation: css`
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        height: 50px;
        @media (max-width: 480px) {
            margin: 0;
            justify-content: center;
        }
    `,
    navinformationli: css`
        margin: 0 15px;
    ` ,
    linner: css`
        padding-right: 0px!important;
        @media screen and (max-width: 480px) {
            padding: 0;
        }
        @media screen and (max-width: 896px) and (min-width: 481px) {
            padding: 0;
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
        top: 300px;
        bottom: unset!important;
        position: fixed!important;
        width: 110px!important;
    `
};