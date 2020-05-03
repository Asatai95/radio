import React from 'react'
import { css } from '@emotion/core'
import "../../styles/cursor"

const style = {
    cursor: css`
        transform: translate(0,0);
        pointer-events: none;
        position: fixed;
        top: -4px;
        left: -4px;
        width: 8px;
        height: 8px;
        background: rgba(0,0,0,0.75);
        border-radius: 50%;
        z-index: 999;
        transition: width .3s, height .3s, top .3s, left .3s;

        &.hov_{
            top: -12px;
            left: -12px;
            width: 32px;
            height: 32px;
            background: rgba(200,50,50,0.75);
        }
    `
};

export const CursoPoint = () => {
    return (
        <div css={style.cursor} className="cursor-pointer" id="cursor-pointer"></div>
    )
}
