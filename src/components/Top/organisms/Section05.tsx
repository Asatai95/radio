import React from 'react'
import { css, keyframes } from '@emotion/core'
// import { flight } from "../../../styles/shared"

export const Section05 =  () => {
    return(
        <section css={styled.section} className="section-sns-common">
            <div css={instagramfield.block} id="instagram_field" className="instagram_block">
                <div css={instagramfield.title} className="instagram_field_title">
                    <p css={instagramfield.titletext}>
                        <a css={instagramfield.titlelink} href="https://www.instagram.com/awamori_in_the_pocket/">@awamori_in_the_pocket</a>
                        <span css={instagramfield.titlespan}>on Instagram</span>
                    </p>
                </div>
                <div css={instagramfield.viewblock} className="insta_view_block">
                    <div css={instagramfield.mainbox} className="main_box"></div>
                </div>
            </div>
            <div css={tips.block} className="tips">
                <div css={tips.facebook} className="facebook-feed">
                    <div>
                        <p css={tips.feedtext}>FaceBook</p>
                    </div>
                    <div css={tips.facebookfeed}></div>
                </div>
                <div css={tips.support} className="support-title">
                    <div>
                        <p css={tips.title}>Awamori in The Pocket</p>
                    </div>
                    <div>
                        <div className="user_info_block">
                            <div css={tips.backbg}>
                                <div css={tips.userinfo} className="user_info">
                                    <div className="user_image">
                                        <img css={tips.userimg} src="https://res.cloudinary.com/hchyaihwv/image/upload/v1572704906/iob6zfw5ipv0sffihf9s.jpg" alt="" />
                                    </div>
                                    <div className="user_image_bottom">
                                        <img css={tips.userimg} src="https://res.cloudinary.com/hchyaihwv/image/upload/v1572704897/sbyavoe1ulg7vbjbkvkr.jpg" alt="" />
                                        <img css={tips.userimg} src="https://res.cloudinary.com/hchyaihwv/image/upload/v1572704968/acvgh4hcnmccxobtvrmt.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div css={tips.usertext} className="user_info_text">
                                <p css={tips.userinfotext}>
                                    「 沖縄 」をメインテーマに「ゆんたく」します
                                    <br />
                                    僕らはたくさんの人と交流し、人と人がつながり
                                    <br />
                                    広い輪を創れたらと考えています
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const blockkeyframe =keyframes`
    0% {opacity: 0}
    100% {opacity: 1}
`

const styled = {
    section: css`
        display: block;
    `,
}

const instagramfield = {
    block: css`
        height: 400px;
        transition: all 1.5s ease-in-out;
    `,
    title: css`
        padding: 30px;
    `,
    titletext: css`
        text-align: center;
        color: #222;
        font-size: 25px;
        font-weight: 800;
        padding-bottom: 0;
    `,
    titlelink: css`
        z-index: 50;
        transition: all 1s ease;
    `,
    titlespan: css`
        color: #666666;
    `,
    viewblock: css`
        display: block;
        -webkit-animation-name: ${blockkeyframe};
        animation-name: ${blockkeyframe};
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
    `,
    mainbox: css`
        display: flex;
        align-items: center;
        justify-content: center;
    `
}

const tips = {
    block: css`
        display: flex;
        justify-content: space-around;
        width: 80%;
        margin: 30px auto;
        overflow: hidden;
        margin-top: 100px;
        margin-bottom: 50px;
        z-index: 50;
    `,
    facebook: css`
        z-index: 50;
    `,
    feedtext: css`
        font-size: 25px;
        font-weight: bold;
    `,
    facebookfeed: css`
        height: 500px;
        width : 500px;
    `,
    support: css`
        z-index: 50;
    `,
    title: css`
        font-size: 25px;
        font-weight: 800;
    ` ,
    userinfo: css`
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background: url("https://res.cloudinary.com/dq14n6i0f/image/upload/v1573822260/main_view_back_img.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
    `,
    userimg: css`
        width: 120px;
        height: 120px;
        border: none;
        border-radius: 100px;
        margin: 10px;
    `,
    usertext: css`
        margin: 30px 0;
    `,
    userinfotext: css`
        font-size: 18px;
        font-weight: 800;
        padding: 0;
        line-height: 2.5rem;
    `,
    backbg: css`
        background: url("https://res.cloudinary.com/hchyaihwv/image/upload/e_art:peacock,q_100/v1572851882/IMG_0033.jpg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        border-radius: 5px;
    `
}