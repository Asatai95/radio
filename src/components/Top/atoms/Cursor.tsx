import React from 'react'
import { css, keyframes } from '@emotion/core'
import "../../../styles/Cursor"

const anim = keyframes({
    from: {
        background: 'rgba(30,144, 255, 0.05)',
    },
    to: {
        background: 'rgba(30,144, 255, 0.1)',
    },
});

const style = {
    cursor: css`
        animation: ${anim} 2s ease infinite;
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

        &.hov_{
            top: -20px;
            left: -20px;
            width:40px;
            height: 40px;
            background: rgba(30,144, 255,0.8);
        }
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

export const CursoPoint = () => {
    return (
        <div>
            <div css={style.cursor} className="cursor-pointer" id="cursor-pointer"></div>
            <div css={style.pointer} className="pointer" id="pointer"></div>
        </div>
    )
}
