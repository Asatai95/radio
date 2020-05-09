
import React from 'react'
import { css } from '@emotion/core'
import { Gallery } from '../molecules/Gallery'
// import { useStaticQuery, graphql } from 'gatsby'
// // import { LunrSearch } from '../molecules/lunrsearch'
// import { innertop, bghead, linner, playbt, scrolldown, bg_img } from "../../../styles/shared"

export const Section02 =  () => {

    return (
        <main>
            <section css={SectionContent.main} className="section-discography-home">
                <div className="l-container l-inner clearfix">
                    <div css={SectionContent.boxheadline} className="box-headline l-left">
                        <h3>RADIO</h3>
                    </div>
                    <ul css={[SectionContent.navdiscography, SectionContent.navbtnlist]} className="nav-discography nav-btnlist l-right">
                        <li css={SectionContent.navdiscographyli}>
                            <a css={SectionContent.cursorreactbtn} className="cursor-react cursor-react-btn" href="#">All</a>
                        </li>
                    </ul>
                    <div css={SectionContent.discographylist} className="discography-list discography-list-home">
                        <ul>
                            <li css={SectionContent.discographylistli}>
                                <a className="cursor-react" href="#">
                                    <div className="metabox">
                                        <p className="metainfo">PodCast</p>
                                        <p className="sttl">ラジオをPodCastにて配信</p>
                                        <h4 className="ttl f-light">Awamori in The Pocket</h4>
                                        <p className="ttl-sub">今日も誰かを笑顔に</p>
                                    </div>
                                    <div className="thumbnail-list js-home-discography-slider swiper-container swiper-container-horizontal swiper-container-free-mode">
                                        <div className="swiper-wrapper"></div>
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
            width: 310px;
        }
        float: left;
        max-width: 500px;
        width: 32.89%;
    `,
    iconLink: css`
        @media screen and (min-width: 801px) {
            margin-top: 10px;
        }
    `,
    navbtnlist: css`
        float: left;
        margin-top: 24px;
    `,
    navdiscography: css`
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    `,
    navdiscographyli: css`
        margin-right: 25px;
    ` ,
    cursorreactbtn: css`
        position: relative;
        display: inline-block;
        min-width: 73px;
        height: 38px;
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
    `
};