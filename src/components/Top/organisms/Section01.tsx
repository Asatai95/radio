
import React from 'react'
import { css, keyframes } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'
import { innertop, bghead, linner, playbt, scrolldown, flight } from "../../../styles/Shared"

export const Section01 =  () => {
    const data = useStaticQuery(graphql`
        query {
            allCloudinaryMedia {
                edges {
                    node {
                      secure_url
                    }
                }
            }
        }
    `);

    const clImage = data.allCloudinaryMedia.edges;

    return (
        <section css={SectionContent.main} className="section-head section-head-home">
            <div css={innertop} className="inner">
                <div css={bghead} className="bg-head">
                    <div css={SectionContent.bgColor} className="bg-color"></div>
                    <div css={SectionContent.bgimgitem} className="bg_img_item">
                        <video css={SectionContent.video} autoPlay loop muted playsInline src="https://res.cloudinary.com/dh50en6xf/video/upload/c_fill,h_766/v1589470905/gatsby-source-cloudinary/my_media_bg_xemqa6.mp4"></video>
                    </div>
                </div>
                <div css={linner.linner01} className="l-inner">
                    <div css={SectionContent.boxcopy} className="box-copy">
                        <p>
                            <a css={playbt.link} className="playbtn js-playbtn-head cursor-react cursor-react-btn" href="https://anchor.fm/pockeawa" target="_blink">
                                <span css={playbt.circle} className="circle">
                                  <img css={playbt.img} src={clImage[1].node.secure_url} alt="" />
                                </span>
                                <span css={playbt.text} className="text">Play</span>
                            </a>
                        </p>
                        <div css={flight} className="copy f-light">
                          <img css={linner.linnerimg} src={clImage[8].node.secure_url} alt="" />
                        </div>
                    </div>
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
        @media (min-width: 801px) {
            position : relative;
        }
    `,
    boxcopy: css`
        @media (min-width: 801px) {
            margin-top: 200px;
        }
    `,
    scroll: css`
        @media (max-width: 1100px) {
            right: -2%;
        }
        @media screen and (max-width: 896px) and (min-width: 481px) {
            top: 250px;
            bottom: unset!important;
            position: fixed;
        }
        @media (max-width: 480px) {
            top: 0;
            top: 600px;
        }
        display: block;
        -webkit-animation-name: ${blockkeyframe};
        animation-name: ${blockkeyframe};
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
        bottom: 0px!important;
    `,
    video: css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 100%;
        min-height: 100%;
    `,
    bgColor: css`
        width: 100%;
        height: 100%;
        background: rgb(255,255,255,.3);
        position : absolute;
        z-index: 8;
    `,
    bgimgitem: css`
        z-index: 5;
    `
};