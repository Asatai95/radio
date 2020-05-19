import React from 'react'
import { css } from '@emotion/core'

export const Section01 = () => {
    return (
        <section css={styled.main} className="section-head section-head-home">
            <div css={styled.information} className="main_information page">
                <div css={styled.formcontent}className="google_form">
                    <h2 css={styled.h2}>Contact</h2>
                    <p css={styled.p}>
                        番組へのご意見、ご感想は以下のフォームよりお送りください。<br />
                        どんな些細なご意見でもお待ちしています。なお、ご感想は番組内でご紹介させていただくことがあります。おたよりをもらえると、素直に嬉しいです。
                    </p>
                    <div css={styled.contact} className="contact_form_box">
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeUjZumzA-zrJ439t9rgE95nuTKK_9EJAu0VfvfiBfhC5ckig/viewform?embedded=true" width="640" height="800" frameBorder="0" marginHeight="0" marginWidth="0">読み込んでいます…</iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

const styled = {
    main : css`
        padding-top : 150px;
        @media (min-width: 801px) {
            position : relative;
            padding: 50px 0;
            padding-top : 250px;
        }
    `,
    bgimg: css`
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        z-index: 1;
        background: rgb(255,255,255);
    `,
    bgpodcastimg: css`
        margin: 0;
        width: 100%;
        height: 100%;
        opacity: .2;
    `,
    castlist: css`
        z-index: 5;
        position: absolute;
        top: 70px;
        width: 100%;
        text-align: center;
    `,
    information : css`
        display: flex;
        align-items: center;
        flex-direction: column;
        height: 100%;
        margin: 50px auto;
        margin-bottom: 0;
    `,
    sharebox: css`
        width: 48%;
        text-align: left;
        margin: unset;
        height: 350px;
    `,
    infobox: css`
        width: 80%;
        height: 450px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    `,
    h2: css`
        font-size: 1.6rem;
        font-weight: 800;
        margin-bottom: 30px;
    `,
    podcasth2: css`
        font-size: 1.6rem;
        font-weight: 800;
        margin-bottom: 30px;
        z-index: 10;
        position: absolute;
        top: 20px;
        text-align: center;
        width: 100%;
    `,
    p : css`
        margin: 30px auto;
        margin-bottom: 10px;
        padding: 0;
        font-size: 17px;
        font-weight: 800;
    `,
    sharetext: css`
        margin: 30px auto;
        padding: 0;
        font-size: 17px;
        font-weight: 800;
    `,
    contact: css`
        text-align: center;
        padding-top: 30px;
    `,
    podcast: css`
        width: 35%;
        height: 350px;
        position: relative;
    `,
    podcastul: css`
        margin: unset;
    `,
    podcastapple: css`
        color: #a260bf;
        font-size: 20px;
        font-weight: 800;
    `,
    podcastbreaker: css`
        font-size: 20px;
        font-weight: 800;
        color: rgb(32,166,242);
    `,
    podcastgoogle: css`
        color: #DD5144;
        font-size: 20px;
        font-weight: 800;
    `,
    podcastpca: css`
        color: #FF9900;
        font-size: 20px;
        font-weight: 800;
    `,
    podcastradiopublic: css`
        color : #BD081C;
        font-size: 20px;
        font-weight: 800;
    `,
    podcastspotify: css`
        color : #0F9D58;
        font-size: 20px;
        font-weight: 800;
    `,
    formcontent: css`
        margin: unset;
        margin-top: 50px;
        text-align: center;
        width: 50%;
        height: auto;
    `,
}
