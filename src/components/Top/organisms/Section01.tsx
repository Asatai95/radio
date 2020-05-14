
import React from 'react'
import { css, keyframes } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'
// // import { LunrSearch } from '../molecules/lunrsearch'
import { innertop, bghead, linner, playbt, scrolldown, bg_img, flight } from "../../../styles/shared"

export const Section01 =  () => {
    const data = useStaticQuery(graphql`
        query CloudinaryImages {
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
                      <div className="bg_img_item">
                          {/* <img css={bg_img} src={clImage[3].node.secure_url} alt="" /> */}
                          <video src="https://res.cloudinary.com/dh50en6xf/video/upload/v1589470905/gatsby-source-cloudinary/my_media_bg_xemqa6.mp4"  muted webkit-playsinline playsinline autoplay loop></video>
                      </div>
                </div>
                <div css={linner.linner01} className="l-inner">
                    <div css={SectionContent.boxcopy} className="box-copy">
                        <p>
                            <a css={playbt.link} className="playbtn js-playbtn-head cursor-react cursor-react-btn" href="https://anchor.fm/pockeawa/episodes/Awamori-in-The-Pocket--1-e7vhpj">
                                <span css={playbt.circle} className="circle">
                                  <img css={playbt.img} src={clImage[0].node.secure_url} alt="" />
                                </span>
                                <span css={playbt.text} className="text">Play</span>
                            </a>
                        </p>
                        <div css={flight} className="copy f-light">
                          <img css={linner.linnerimg} src={clImage[6].node.secure_url} alt="" />
                        </div>
                    </div>
                </div>
                <ul className="banner-list">
                    <li></li>
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
        @media (max-width: 800px) {
            padding-top : 41px;
        }
        @media (min-width: 801px) {
            position : relative;
        }
    `,
    boxcopy: css`
        @media (min-width: 801px) {
            margin-top: 168px;
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
    `
};