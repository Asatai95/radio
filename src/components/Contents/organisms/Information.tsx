import React from 'react'
import { css } from '@emotion/core'

export const Contact = () => {
    return (
        <div css={styled.information} className="main_information page">
            <div css={styled.infobox}>
                <div css={styled.sharebox} className="share_box">
                    <h2 css={styled.h2}>Share</h2>
                    <p css={styled.sharetext}>僕らのラジオをシェア、いいね！してもらえるとうれしいです!!</p>
                    <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fawapocke%2F&width=161&layout=button_count&action=like&size=large&show_faces=true&share=true&height=46&appId=2165553107045876" width="200" height="60" css={facebook} scrolling="no" allow="encrypted-media"></iframe>
                </div>
                <div css={styled.podcast}>
                    <h2 css={styled.podcasth2}>Podcasts</h2>
                    <div css={styled.bgimg}>
                        <img css={styled.bgpodcastimg} src="https://res.cloudinary.com/dh50en6xf/image/upload/v1589609430/gatsby-source-cloudinary/istockphoto-1071765944-612x612_mo2es6.jpg" alt=""/>
                    </div>
                    <div css={styled.castlist}>
                        <ul css={styled.podcastul}>
                            <li>
                                <a css={styled.podcastapple} href="https://podcasts.apple.com/us/podcast/awamori-in-the-pocket/id1485462376?ign-mpt=uo%3D4" target="_blank">Apple Podcasts</a>
                            </li>
                            <li>
                                <a css={styled.podcastbreaker} href="https://www.breaker.audio/awamori-in-the-pocket" target="_blank">Breaker</a>
                            </li>
                            <li>
                                <a css={styled.podcastgoogle} href="https://podcasts.google.com/?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy9mYTc2NmVjL3BvZGNhc3QvcnNz" target="_blank">Google Podcasts</a>
                            </li>
                            <li>
                                <a css={styled.podcastpca} href="https://pca.st/2kvhfna5" target="_blank">Pocket Casts</a>
                            </li>
                            <li>
                                <a css={styled.podcastradiopublic} href="https://radiopublic.com/awamori-in-the-pocket-6B0yxa" target="_blank">RadioPublic</a>
                            </li>
                            <li>
                                <a css={styled.podcastspotify} href="https://open.spotify.com/show/74ChfX0zYfFfJMcXzA01Yx" target="_blank">Spotify</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div css={styled.formcontent}className="google_form">
                <h2 css={styled.h2}>Contact</h2>
                <p css={styled.p}>
                    番組へのご意見、ご感想は以下のフォームよりお送りください。<br />
                    どんな些細なご意見でもお待ちしています。なお、ご感想は番組内でご紹介させていただくことがあります。おたよりをもらえると、素直に嬉しいです。
                </p>
                <div css={styled.contact} className="contact_form_box">
                    <iframe css={styled.googlePc} src="https://docs.google.com/forms/d/e/1FAIpQLSeUjZumzA-zrJ439t9rgE95nuTKK_9EJAu0VfvfiBfhC5ckig/viewform?embedded=true" width="640" height="800" frameBorder="0" marginHeight="0" marginWidth="0">読み込んでいます…</iframe>
                    <iframe css={styled.googleSp} src="https://docs.google.com/forms/d/e/1FAIpQLSeUjZumzA-zrJ439t9rgE95nuTKK_9EJAu0VfvfiBfhC5ckig/viewform?embedded=true" width="340" height="1050" frameBorder="0" marginHeight="0" marginWidth="0">読み込んでいます…</iframe>
                </div>
            </div>
        </div>
    )
}

const facebook  =  css`
    border:none;
    overflow:hidden;
`

const styled = {
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
        @media (max-width: 480px) {
            height: auto;
            width: 100%;
            text-align: center;
        }
        @media screen and (max-width: 896px) and (min-width: 481px) {
            width: 100%;
            height: auto;
            text-align: center;
        }
    `,
    googleSp: css`
        margin: auto;
        display: none;
        @media (max-width: 480px) {
            display: block;
        }
    `,
    googlePc: css`
        margin: auto;
        @media (min-width: 480px) {
            display: block;
        }
        @media (max-width: 480px) {
            display: none;
        }
        @media screen and (max-width: 896px) and (min-width: 481px) {
            width: 100%!important;
        }
    `,
    infobox: css`
        width: 80%;
        height: 450px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        @media (max-width: 480px) {
            width: 90%;
            display: block;
            height: auto;
        }
        @media screen and (max-width: 896px) and (min-width: 481px) {
            display: block;
            height: auto;
        }
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
        @media (max-width: 480px) {
            font-size: 16px;
        }
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
        @media (max-width: 480px) {
            width: 100%;
        }
        @media screen and (max-width: 896px) and (min-width: 481px) {
            width: 100%;
        }
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
        @media (max-width: 480px) {
            width: 90%;
        }
        @media screen and (max-width: 1200px) and (min-width: 897px) {
            width: 70%;
        }
        @media screen and (max-width: 896px) and (min-width: 481px) {
            width: 90%;
        }
    `,
}
