import React from 'react'
import { css } from '@emotion/core'

export const Contact = () => {
    return (
        <div css={styled.information} className="main_information page">
            <div css={styled.sharebox} className="share_box">
                <h2 css={styled.h2}>Share</h2>
                <p css={styled.p}>僕らのラジオをシェア、いいね！してもらえるとうれしいです！</p>
                <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fawapocke%2F&amp;width=161&amp;layout=button_count&amp;action=like&amp;size=large&amp;show_faces=true&amp;share=true&amp;height=46&amp;appId=2165553107045876" width="200" height="60" css={facebook} scrolling="no" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
            <div css={styled.sharebox}className="google_form">
                <h2 css={styled.h2}>Contact</h2>
                <p css={styled.p}>
                    番組へのご意見、ご感想は以下のフォームよりお送りください。<br />
                    どんな些細なご意見でもお待ちしています。なお、ご感想は番組内でご紹介させていただくことがあります。おたよりをもらえると、素直に嬉しいです。
                </p>
                <div css={styled.contact} className="contact_form_box">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeUjZumzA-zrJ439t9rgE95nuTKK_9EJAu0VfvfiBfhC5ckig/viewform?embedded=true" width="640" height="800" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
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
    information : css`
        display: flex;
        align-content: center;
        flex-direction: column;
        height: 1200px;
        margin: 50px auto;
        margin-bottom: 0;
    `,
    sharebox: css`
        width: 80%;
        margin: auto;
        marign-bottom: 0;
    `,
    h2: css`
        font-size: 1.6rem;
        font-weight: 800;
    `,
    p : css`
        margin: 30px auto;
        margin-bottom: 10px;
        padding: 0;
        font-size: 17px;
        font-weight: 800;
    `,
    contact: css`
        text-align: center;
        padding-top: 30px;
    `,
}