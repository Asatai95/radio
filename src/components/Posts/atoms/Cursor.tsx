import React from 'react'
import { css } from '@emotion/core'

const style = {
    cursor: css`
        background: rgb(30, 144, 255, 0.1);
        transform: translate(0,0);
        pointer-events: none;
        position: fixed;
        top: -27px;
        left: -26px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        z-index: 999;
        transition: width .3s, height .3s, top .3s, left .3s;
        border: 1px solid rgba(30, 144, 255, 0.3);
    `,
    pointer: css`
        width: 8px;
        height: 8px;
        background: rgba(30,144, 255, .6);
        border-radius: 50%;
        pointer-events: none;
        transform: translate(0px, 0px);
        position: fixed;
        top: -4px;
        right: 0px;
        left: -4px;
        bottom: 0px;
        z-index: 999;
        transition: width .3s, height .3s, top .3s, left .3s;
    `
};

export const CursorPoint = () => {
    return (
        <div>
            <div css={style.cursor} className="cursor-pointer" id="cursor-pointer"></div>
            <div css={style.pointer} className="pointer" id="pointer"></div>
        </div>
    )
}


