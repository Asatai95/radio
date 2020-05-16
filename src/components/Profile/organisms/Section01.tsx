
import React from 'react'
import { css, keyframes } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'
// // import { LunrSearch } from '../molecules/lunrsearch'
import { scrolldown } from "../../../styles/shared"

export const Section01 =  () => {

    const data = useStaticQuery(graphql`
        query {
            cloudinaryMedia(public_id: {eq: "gatsby-source-cloudinary/awamori_img_ipbl30"}) {
                secure_url
              }
          }
          `
    );
    const clImage = data.cloudinaryMedia.secure_url;

    return (
        <section css={SectionContent.section} className="section-head section-head-home">
            <div css={SectionContent.homebgimg} className="homebgimg">
                <img css={SectionContent.bgtop} src={clImage} alt=""/>
            </div>
            <div css={SectionContent.block}>
                <div className="section-title">
                    <h2 css={SectionContent.h2}>Awamori in The Pocket</h2>
                </div>
                <div css={SectionContent.body} className="sectionbody">
                    <p css={SectionContent.p}>
                        このラジオは、ディープな沖縄の観光情報を沖縄在住の若者がお届けする番組です。<br />
                        方言、地元ゆかりの観光スポット、居酒屋、食事処など、観光関連の情報をゆんたくしていきます。<br />
                        毎週ラジオをポッドキャストにて配信できるように頑張ります。
                    </p>
                    <p css={SectionContent.p}>
                        このラジオでは、「作業しながら聴くのにちょうどいい」とか「仕事、学校から帰宅途中の暇つぶし」とか「晩酌の時間に聴く」などの時間に僕らのラジオを聴いていただけると嬉しいです。御堅い観光関連情報ラジオよりも情報量は少ないけど、不思議とクセになる。そんな、視聴者の皆様にとって「この時間には自然とこのラジオを聴きたくなる」となりますように。
                    </p>
                </div>
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
    section: css`
        height: 90vh;
        display: flex;
        align-items: center;
        position: relative;
    `,
    body: css`
        margin: 60px auto;
        margin-top: 0;
    `,
    block: css`
        width: 80%;
        margin: auto;
    `,
    h2: css`
        font-size: 40px;
        font-weight: 800;
        margin-bottom: 80px;
        text-align: center;
    `,
    p: css`
        font-size: 20px;
        font-weight: 800;
        text-align: center;
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
        bottom: 35px!important;
    `,
    homebgimg: css`
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        margin: auto;
        z-index: -1;
    `,
    bgtop: css`
        margin: 0;
        width: 100%;
        height: 111%;
        text-align: center;
    `
};