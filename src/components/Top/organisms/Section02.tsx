
import React from 'react'
import { css } from '@emotion/core'
import { Gallery } from '../molecules/Gallery'
import { flight } from "../../../styles/Shared"
// import { useStaticQuery, graphql } from 'gatsby'
// // import { LunrSearch } from '../molecules/lunrsearch'

export const Section02 =  () => {
    return (
        <main>
            <section css={SectionContent.main} className="section-discography-home">
                <div className="l-container l-inner clearfix">
                    <div css={SectionContent.boxheadline} className="box-headline l-left">
                        <h3 css={SectionContent.h3}>RADIO</h3>
                        <p css={[ SectionContent.iconlinklight, flight ]} className="icon-link f-light">
                            <a css={SectionContent.iconcursorreactbtn} className="cursor-react cursor-react-btn" href="#">+</a>
                        </p>
                    </div>
                    <ul css={SectionContent.navdiscography} className="nav-discography nav-btnlist l-right">
                        <li css={SectionContent.navdiscographyli}>
                            <a css={SectionContent.cursorreactbtn} className="cursor-react cursor-react-btn" href="#">All</a>
                        </li>
                    </ul>
                    <div css={SectionContent.discographylist} className="discography-list discography-list-home">
                        <ul>
                            <li css={SectionContent.discographylistli}>
                                <a className="cursor-react" href="#">
                                    <div css={SectionContent.metabox} className="metabox">
                                        <p css={SectionContent.metainfo} className="metainfo">PodCast</p>
                                        <p css={SectionContent.sttl} className="sttl">ラジオをPodCastにて配信</p>
                                        <h4 css={[ SectionContent.flight, flight ]} className="ttl f-light">Awamori in The Pocket</h4>
                                        <p css={SectionContent.ttlsub} className="ttl-sub">今日も誰かを笑顔に</p>
                                    </div>
                                    <div className="thumbnail-list js-home-discography-slider swiper-container swiper-container-horizontal swiper-container-free-mode">
                                        <div className="swiper-wrapper"></div>
                                        <span css={SectionContent.swipernotification} className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className="l-container-link-home">
                <Gallery />
            </div>
        </main>
    )
}

const SectionContent = {
    main : css`
        @media (max-width: 800px) {
            padding-top : 20px;
        }
        @media (min-width: 801px) {
            padding-top: 174px;
        }
    `,
    boxheadline: css`
        @media (max-width: 1100px) {
            width: 230px;
        }
        float: left;
        max-width: 500px;
        width: 32.89%;
    `,
    h3: css`
        font-size: 41px;
        font-weight: 800;
        letter-spacing: 0.05em;
    `,
    iconlinklight: css`
        @media screen and (min-width: 801px){
            margin-top: 10px;
        }
        font-weight: 300;
    `,
    iconlink: css`
        @media screen and (max-width: 800px) {
            width: 33px;
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
        border: 2px solid rgba(255, 255, 255, 0.18);
        border-radius: 50%;
        transition: background .3s ease-out, border .3s ease-out;
    `,
    navdiscography: css`
        @media screen and (max-width: 800px) {
            width: calc(100% + 60px);
            float: none;
            margin-top: 26px;
            margin-left: -30px;
            padding-left: 30px;
            overflow-y: scroll;
            -webkit-overflow-scrolling: touch;
        }
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        float: left;
        margin: auto;
        margin-top: 7px;
    `,
    navdiscographyli: css`
        margin-right: 25px;
        margin-bottom: 0;
    ` ,
    iconcursorreactbtn: css`
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
    cursorreactbtn: css`
        position: relative;
        display: inline-block;
        min-width: 73px;
        height: 35px;
        border: 2px solid #1e1e1e;
        border-radius: 19px;
        text-align: center;
        padding: 0 18px;
        transition: background .3s ease-out, border .3s ease-out;
    `,
    discographylist: css`
        margin-top: 84px;
        border-bottom: 1px solid #333;
        overflow: hidden;
        width: 100%;
    `,
    discographylistli: css`
        position: relative;
        overflow: hidden;
    `,
    metabox: css`
        max-width: 1480px;
        width: calc(86% + 60px);
        margin: 0 auto;
        padding-top: 30px;
        padding-left: 30px;
        padding-right: 30px;
        position: absolute;
        z-index: 4;
        left: 50%;
        transform: translateX(-50%);
    ` ,
    metainfo: css`
        margin-bottom: 13px;
        font-size: 14px;
    `,
    sttl: css`
        margin-bottom: -7px;
        font-size: 13px;
        line-height: 1.4;
    `,
    flight: css`
        font-size: 31px;
        margin-bottom: -10px;
    `,
    ttlsub: css`
        font-size: 14px;
        margin-top: -10px;
    `,
    thumbnaillist: css`
        width: 1992px;
        position: relative;
        pointer-events: none;
        left: 0px;
    `,
    swipernotification: css`
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: none;
        opacity: 0;
        z-index: -1000;
    `
};