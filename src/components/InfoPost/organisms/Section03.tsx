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
        margin-bottom: 80px;
        @media (max-width: 480px) {
            height: 200px;
            padding: 0.5em 1em;
            text-decoration: none;
            background: rgb(32,166,242,.5);
            color: #FFF;
            border-bottom: solid 4px #627295;
            border-radius: 3px;
        }
        @media screen and (max-width: 896px) and (min-width: 481px) {
            height: 200px;
            width: 95%;
            padding: 0.5em 1em;
            text-decoration: none;
            background: rgb(32,166,242,.5);
            color: #FFF;
            border-bottom: solid 4px #627295;
            border-radius: 3px;
            margin: auto;
        }
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
        @media (max-width: 480px) {
            background-color: unset;
        }
        @media screen and (max-width: 896px) and (min-width: 481px) {
            background-color: unset;
        }
    `,
    sectionbox: css`
        height: 100%;
    `,
    p: css`
        font-weight: 800;
    `,
}