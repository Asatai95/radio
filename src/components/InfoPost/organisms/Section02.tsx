import React from 'react'
import { css, keyframes } from '@emotion/core'

export const Section02 =  () => {
    return(
        <section css={styled.section} className="section-sns-common" id="sns">
            <div css={tips.block} className="tips">
                <div css={tips.facebook} className="facebook-feed">
                    <div>
                        <p css={tips.feedtext}>Facebook</p>
                    </div>
                    <div css={tips.facebookfeed}>
                        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fawapocke%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=731219860982553" width="340" height="500" css={facebookstyle} scrolling="no" allow="encrypted-media"></iframe>
                    </div>
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

const facebookstyle = css`
    border:none;
    overflow:hidden;
`

const styled = {
    section: css`
        display: block;
        margin: 50px 0;
    `,
}

const tips = {
    block: css`
        display: flex;
        justify-content: space-around;
        width: 80%;
        margin: 30px auto;
        overflow: hidden;
        margin-top: 50px;
        margin-bottom: 100px;
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
        max-height: 500px;
        max-width : 500px;
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
