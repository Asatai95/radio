import React from 'react'
import { css } from '@emotion/core'
import { Information } from '../molecules/Information'
// import { useStaticQuery, graphql } from 'gatsby'
// // import { LunrSearch } from '../molecules/lunrsearch'
import { flight } from "../../../styles/shared"

export const Section03 =  () => {

    return (
        <section css={SectionContent.main} className="section-information-home">
            <div className="l-inner">
                <div css={SectionContent.haedline} className="box-headline">
                    <h3 css={[ SectionContent.headlinelight, flight ]} className="headline f-light">INFORMATION</h3>
                    <p css={flight} className="icon-link f-light">
                        <a href="#" css={SectionContent.iconlink} className="cursor-react cursor-react-btn">+</a>
                    </p>
                </div>
                <div css={SectionContent.clearfix} className="l-container clearfix">
                    <div css={SectionContent.clearfixleft} className="l-left">
                        <ul css={SectionContent.navinformation} className="nav-information nav-btnlist">
                            <li css={SectionContent.navinformationli}>
                                <a href="#" css={SectionContent.iconlinkbtn} className="cursor-react cursor-react-btn">All</a>
                            </li>
                            <li css={SectionContent.navinformationli}>
                                <a href="#" css={SectionContent.iconlinkbtn} className="cursor-react cursor-react-btn">News</a>
                            </li>
                            <li css={SectionContent.navinformationli}>
                                <a href="#" css={SectionContent.iconlinkbtn} className="cursor-react cursor-react-btn">Radio</a>
                            </li>
                        </ul>
                    </div>
                    <Information />
                </div>
            </div>
        </section>
    )
}

const SectionContent = {
    main : css`
        @media (max-width: 800px) {
            padding-top : 50px;
            padding-bottom: 60px;
        }
        padding-top: 90px;
        padding-bottom: 141px;
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
        margin-bottom: 36px;
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
        @media screen and (min-width: 1101px) {
            display: flex;
            align-items: flex-start;
        }
        min-height: 1%;
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
        @media screen and (max-width: 800px){
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: calc(100% + 60px);
            float: none;
            margin-top: 26px;
            margin-left: -30px;
            padding-left: 30px;
            overflow-y: scroll;
            -webkit-overflow-scrolling: touch;
        }
        @media screen and (max-width: 1100px) and (min-width: 801px){
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
        }
    `,
    navinformationli: css`
        @media screen and (max-width: 800px) {
            margin-right: 15px;
            margin-bottom: 0;
        }
        @media screen and (max-width: 1100px) and (min-width: 801px){
            margin-right: 15px;
        }
        @media screen and (min-width: 1101px){
            margin-bottom: 27px;
        }
    ` ,

};