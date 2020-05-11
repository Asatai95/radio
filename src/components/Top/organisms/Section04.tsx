import React from 'react'
import { css } from '@emotion/core'
// import { flight } from "../../../styles/shared"

export const Section04 =  () => {
    return(
        <section css={styled.section} className="section-contact-common">
            <div css={styled.sectionbox}>
                <a css={styled.link} href="#" className="cursor-react-blue">
                    <p className="align-c f-light">CONTACT US</p>
                </a>
            </div>
        </section>
    )
}

const styled = {
    section: css`
        height: 240px;
    `,
    link: css`
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #161616;
        height: 100%;
        font-size: 34px;
        transition: background .3s ease-out;
    `,
    sectionbox: css`
        height: 100%;
    `
}