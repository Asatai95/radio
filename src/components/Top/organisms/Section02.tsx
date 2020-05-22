
import React from 'react'
import { css } from '@emotion/core'
import { Gallery } from '../molecules/Gallery'
import { flight } from "../../../styles/Shared"
import { useStaticQuery, graphql } from 'gatsby'

export const Section02 =  () => {
    const data = useStaticQuery(graphql`
        query{
            allContentfulPosts {
                edges {
                    node {
                        id
                        title
                        thumbnail {
                            fixed(width: 300, height: 300) {
                                src
                            }
                        }
                    }
                }
            }
        }
    `);
    const content = data.allContentfulPosts.edges.slice( -5 );
    const contentImg = content.map((d, n)=>{
        const img = d.node.thumbnail;
        for(var i=0; i < img.length; i++){
            return <li key={n} css={SectionContent.wrapsli}><img css={SectionContent.imgs} src={img[i].fixed.src} alt="" /></li>
        }
    })

    return (
        <main>
            <section css={SectionContent.main} className="section-discography-home"  id="radio">
                <div css={SectionContent.clearfix} className="l-container l-inner clearfix">
                    <div css={SectionContent.boxheadline} className="box-headline l-left">
                        <h3 css={SectionContent.h3}>RADIO</h3>
                    </div>
                    <ul css={SectionContent.navdiscography} className="nav-discography nav-btnlist l-right">
                        <li css={SectionContent.navdiscographyli}>
                            <a css={SectionContent.cursorreactbtn} className="cursor-react cursor-react-btn" href="/posts">All</a>
                        </li>
                    </ul>
                    <div css={SectionContent.discographylist} className="discography-list discography-list-home item" id="react-link-item">
                        <div css={SectionContent.slide_bg} className="bgslideImg"></div>
                        <div css={SectionContent.discographylistli}>
                            <a className="cursor-react link-item" href="/posts">
                                <div css={SectionContent.metabox} className="metabox">
                                    <p css={SectionContent.sttl} className="sttl">ラジオをPodCastにて配信</p>
                                    <h4 css={[ SectionContent.flight, flight ]} className="ttl f-light">Awamori in The Pocket</h4>
                                    <p css={SectionContent.ttlsub} className="ttl-sub">今日も誰かを笑顔に</p>
                                </div>
                                <div className="thumbnail-list js-home-discography-slider swiper-container swiper-container-horizontal swiper-container-free-mode">
                                    <div className="loop_wrap swiper-wrapper" css={SectionContent.swiperwrapper}>
                                        <ul css={SectionContent.wraps} className="item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev">
                                            {contentImg}
                                        </ul>
                                        <ul css={SectionContent.wraps} className="item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev">
                                            {contentImg}
                                        </ul>
                                    </div>
                                    <span css={SectionContent.swipernotification} className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                                </div>
                            </a>
                        </div>
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
            padding-top: 120px;
        }
    `,
    clearfix: css`
        margin: 0;
        padding: 0;
        width : 100%;
    `,
    boxheadline: css`
        @media (max-width: 1100px) {
            width: 230px;
        }
        @media (max-width: 480px) {
            float: none;
            margin-bottom: 25px;
            margin-left: 30px;
        }
        float: left;
        max-width: 500px;
        width: 23%;
        margin-left: 100px;
        margin-bottom: 30px;
    `,
    h3: css`
        font-size: 41px;
        font-weight: 800;
        letter-spacing: 0.05em;
        @media screen and (max-width: 896px) and (min-width: 481px){
            font-size: 40px;
        }
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
        @media screen and (max-width: 896px) and (min-width: 481px){
            width: 15%;
            height: 58px;
            display: flex;
            align-items: center;
            float: none;
            margin-left: -30px;
            padding-left: 30px;
            padding-top: 0;
        }
        @media screen and (max-width: 480px){
            height: 58px;
            display: flex;
            align-items: center;
            float: none;
            width: auto;
            padding-left: 30px;
            margin-bottom: 30px;
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
        @media screen and (max-width: 480px) {
            padding: 2px 18px;
        }
    `,
    discographylist: css`
        border-bottom: 1px solid #333;
        overflow: hidden;
        width: 100%;
        position: relative;
    `,
    discographylistli: css`
        position: relative;
        overflow: hidden;
    `,
    metabox: css`
        max-width: 1480px;
        width: calc(86% + 60px);
        margin: 0 auto;
        padding-top: 60px;
        padding-left: 30px;
        padding-right: 30px;
        position: absolute;
        z-index: 4;
        left: 50%;
        transform: translateX(-50%);
        @media screen and (max-width: 480px) {
            padding-top: 35px;
        }
        @media screen and (max-width: 992px) and (min-width: 897px) {
            padding-top: 75px;
        }
        @media screen and (max-width: 896px) and (min-width: 481px) {
            padding-top: 55px;
        }
    ` ,
    metainfo: css`
        margin-bottom: 13px;
        font-size: 14px;
        color: #fff;
    `,
    sttl: css`
        margin-bottom: 0px;
        font-size: 16px;
        line-height: 1.4;
        color: #fff;
    `,
    flight: css`
        font-size: 35px;
        margin-bottom: 15px;
        color: #fff;
        @media screen and (max-width: 480px) {
            font-size: 25px;
        }
    `,
    ttlsub: css`
        font-size: 15px;
        margin-top: -10px;
        color: #fff;
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
    `,
    wraps: css`
        display: flex;
        flex-flow: row nowrap;
        width: 100%;
        margin: 0;
        padding: 0;
    `,
    imgs: css`
        width: auto;
        height: 100%;
    `,
    wraps_sub: css`
        display: flex;
        flex-flow: row nowrap;
        width: 100%;
        overflow: hidden;

    `,
    imgSub: css`
        width: auto;
        height: 100%;
    `,
    slide_bg: css`
        width: 100%;
        height: 100%;
        position: absolute;
        background: rgb(0,0,0,.8);
        z-index: 3;
        transition: .8s;
        @media screen and (max-width: 480px){
            background: rgb(0,0,0,.6);
        }
    `,
    swiperwrapper: css`
        position: relative;
        display: -webkit-flex;
        display: flex;
        width: 100vw;
        height: 300px;
        left: 50%;
        margin-left: -50vw;
        overflow: hidden;
        @media screen and (max-width: 480px){
            height: 210px;
        }
        @media screen and (max-width: 992px) and (min-width: 897px) {
            height: 250px;
        }
        @media screen and (max-width: 896px) and (min-width: 481px) {
            height: 200px;
            width: 150vw;
        }
    `,
    wrapsli: css`
        display: inline-block;
        width: calc(100vw / 2);
        min-width: 150px;
        margin: 0 0 0 0;
        list-style: none;
        text-align: center;
        @media screen and (max-width: 480px){
            width: calc(100vw / 4);
            min-width: 200px;
        }
    `
};