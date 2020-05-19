import React from 'react'
import { css } from '@emotion/core'

export const Section03 =  () => {
    return(
        <section css={styled.section} className="section-contact-common" id="contact">
            <div css={styled.sectionbox}>
                <a css={styled.link} href="/contact" className="cursor-react-blue">
                    <p css={styled.p} className="align-c f-light">CONTACT US</p>
                </a>
            </div>
        </section>
    )
}

const styled = {
    section: css`
        height: 280px;
        overflow: hidden;
    `,
    link: css`
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(32,166,242,.5);
        color: #222;
        height: 100%;
        font-size: 34px;
        transition: background .3s ease-out;
    `,
    sectionbox: css`
        height: 100%;
    `,
    p: css`
        font-weight: 800;
    `,
}