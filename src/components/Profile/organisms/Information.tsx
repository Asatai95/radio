import React from 'react'
import { css } from '@emotion/core'

export const Contact = () => {
    return (
        <div css={styled.information} className="main_information page">
            <div css={styled.sharebox} className="share_box">
                <h2 css={styled.h2}>Share</h2>
                <p css={styled.p}>僕らのラジオをシェア、いいね！してもらえるとうれしいです！</p>
            </div>
            <div css={styled.sharebox}className="google_form">
                <h2 css={styled.h2}>Contact</h2>
                <p css={styled.p}>
                    番組へのご意見、ご感想は以下のフォームよりお送りください。<br />
                    どんな些細なご意見でもお待ちしています。なお、ご感想は番組内でご紹介させていただくことがあります。おたよりをもらえると、素直に嬉しいです。
                </p>
                <div css={styled.contact} className="contact_form_box">

                </div>
            </div>
        </div>
    )
}

const styled = {
    information : css`
        display: flex;
        align-content: center;
        flex-direction: column;
        height: 1200px;
        margin: 50px auto;
    `,
    sharebox: css`
        width: 80%;
        margin: auto;
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
    `,
    contact: css`
        text-align: center;
    `,
}