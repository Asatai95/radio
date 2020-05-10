import React from 'react'
import { css } from '@emotion/core'
import { sectionlinkhome, flight, showsml, headline } from "../../../styles/Shared"

export const Gallery = () => {
    return (
        <>
            <div css={styled.linkhome}>
                <div css={[styled.contenthome , sectionlinkhome]} className="section-contents-home section-link-home item-fadein is-visible is-animate-done">
                    <div className="box-headline">
                        <h3 css={[flight, headline, styled.headlineh3]} className="headline f-light">Title</h3>
                        <p css={styled.headlinetext}>SubTitle</p>
                        <p css={[showsml ,flight]} className="icon-link f-light show-sml">
                            <a href="#" css={styled.showsmllink}>+</a>
                        </p>
                    </div>
                    <a href="#" className="cursor-react">
                        <div css={styled.imgbox} className="imgbox"></div>
                    </a>
                </div>
                <div css={[styled.contenthome , sectionlinkhome]} className="section-biography-home section-link-home item-fadein is-visible is-animate-done">
                    <div className="box-headline">
                        <h3 css={[flight, headline, styled.headlineh3]} className="headline f-light">Title</h3>
                        <p css={styled.headlinetext}>SubTitle</p>
                        <p css={[showsml, flight]} className="icon-link f-light show-sml">
                            <a href="#" css={styled.showsmllink}>+</a>
                        </p>
                    </div>
                    <a href="#" className="cursor-react">
                        <div css={styled.imgbox} className="imgbox"></div>
                    </a>
                </div>
            </div>
            <div css={styled.linkhome}>
                <div css={[styled.contenthome , sectionlinkhome]} className="section-contents-home section-link-home item-fadein is-visible is-animate-done">
                    <div className="box-headline">
                        <h3 css={[flight, headline, styled.headlineh3]} className="headline f-light">Title</h3>
                        <p css={styled.headlinetext}>SubTitle</p>
                        <p css={[showsml ,flight]} className="icon-link f-light show-sml">
                            <a href="#" css={styled.showsmllink}>+</a>
                        </p>
                    </div>
                    <a href="#" className="cursor-react">
                        <div css={styled.imgbox} className="imgbox"></div>
                    </a>
                </div>
                <div css={[styled.contenthome , sectionlinkhome]} className="section-biography-home section-link-home item-fadein is-visible is-animate-done">
                    <div className="box-headline">
                        <h3 css={[flight, headline, styled.headlineh3]} className="headline f-light">Title</h3>
                        <p css={styled.headlinetext}>SubTitle</p>
                        <p css={[showsml ,flight]} className="icon-link f-light show-sml">
                            <a href="#" css={styled.showsmllink}>+</a>
                        </p>
                    </div>
                    <a href="#" className="cursor-react">
                        <div css={styled.imgbox} className="imgbox"></div>
                    </a>
                </div>
            </div>
        </>
    );
}

const styled = {
    contenthome: css`
        opacity: unset;
        transform: unset;
        will-change: unset;
        transition: opacity .6s ease-in-out, transform .6s ease-in-out;
        margin: 5px;
    `,
    headlineh3: css`
        @media screen and (max-width: 800px){
            font-size: 26px;
        }
        @media screen and (min-width: 801px){
            display: block;
            position: absolute;
            z-index: 2;
            top: 81px;
            top: 16%;
            left: calc((100vw - 86vw) / 2);
        }
    `,
    headlinetext: css`
        position : absolute;
        top: 35%;
        left: calc((100vw - 86vw) / 2);
        display: block;
        z-index: 10;
    `,
    showsmllink: css`
        position: relative;
        display: block;
        width: 41px;
        height: 41px;
        line-height: 1;
        padding-top: 9px;
        text-align: center;
        border: 2px solid rgba(255, 255, 255, 0.18);
        border-radius: 50%;
        transition: background .3s ease-out, border .3s ease-out;
    `,
    imgbox: css`
        display: block;
        position: relative;
        padding-top: 57.52%;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        transform: scale(1);
        transform-origin: center center;
        transition: transform .4s ease-out;
        background-image: url(http://www.chronicle.city/wp-content/uploads/2019/06/character02B.png);
    `,
    linkhome: css`
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-wrap: wrap;
    `
}