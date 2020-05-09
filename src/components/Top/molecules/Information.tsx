import React from 'react'
import { css } from '@emotion/core'

export const Information = () => {
    return (
        <ul css={styled.informationohome} className="information-list information-home l-right">
            <li css={styled.li}>
                <a css={styled.cursor} href="#" className="cursor-react">
                    <div css={styled.imgbox} className="imgbox">
                        {/* <img src="" alt=""/> */}
                    </div>
                    <div css={styled.metabox} className="metabox">
                        <div className="blink">
                            <p css={styled.metainfo} className="metainfo f-light">2019.09.04 - Media</p>
                            <p css={styled.metainfo} className="ttl">【WEB掲載】デビュー曲「宇宙」の制作とCHRONICLEが目指す表現の追求【インタビュー】</p>
                        </div>
                    </div>
                </a>
            </li>
            <li css={styled.li}>
                <a href="#" css={styled.cursor} className="cursor-react">
                    <div css={styled.imgbox} className="imgbox">
                        {/* <img src="" alt=""/> */}
                    </div>
                    <div css={styled.metabox} className="metabox">
                        <div className="blink">
                            <p css={styled.metainfo} className="metainfo f-light">2019.09.04 - Radio</p>
                            <p css={styled.metainfo} className="ttl">【WEB掲載】デビュー曲「宇宙」の制作とCHRONICLEが目指す表現の追求【インタビュー】</p>
                        </div>
                    </div>
                </a>
            </li>
            <li css={styled.li}>
                <a href="#" css={styled.cursor} className="cursor-react">
                    <div css={styled.imgbox} className="imgbox">
                        {/* <img src="" alt=""/> */}
                    </div>
                    <div css={styled.metabox} className="metabox">
                        <div className="blink">
                            <p css={styled.metainfo} className="metainfo f-light">2019.09.04 - Blog</p>
                            <p css={styled.metainfo} className="ttl">【WEB掲載】デビュー曲「宇宙」の制作とCHRONICLEが目指す表現の追求【インタビュー】</p>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    )
}

const styled = {
    informationohome: css`
        @media screen and (max-width: 800px){
            float: none;
            width: 100%;
        }
        @media screen and (max-width: 1100px) and (min-width: 801px){
            float: none;
            width: 100%;
        }
        @media screen and (min-width: 1101px){
            float: left;
            width: calc(100% - 32.89%);
        }
    `,
    li: css`
        margin-bottom: 3px;
    ` ,
    cursor: css`
        display: flex;
        justify-content: flex-start;
        align-items: stretch;
    ` ,
    imgbox: css`
        flex: 0 0 284px;
        overflow: hidden;
    `,
    corsorimg: css`
        transform: scale(1);
        transform-origin: center center;
        transition: transform .4s ease-out;
    `,
    metabox: css`
        width: 100%;
        padding: 33px 40px 20px;
        background-color: #232323;
        position: relative;
    `,
    metainfo: css`
        position: relative;
        z-index: 9;
    `
}