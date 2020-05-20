import { css } from '@emotion/core';

export const navbar = css`
    background: transparent;
    height: 100px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 85%;
`

export const naviItem = {
    naviBt : css`
        width: 50px;
        height: 30px;
        position: relative;
        border-color: transparent!important;
    `,
    menuicon:css`
        width: 50px;
        height: 30px;
        position: fixed;
        z-index: 99;
        top:60px;
        right: 80px;
    `,
    navitorigger01: css`
        display: inline-block;
        position: absolute;
        z-index: 3;
        right: 0;
        width: 100%;
        height: 1px;
        background-color: rgb(255,255,255);
        border-radius: 8px;
        will-change: transform;
        transition: transform .2s ease-out, width .2s ease-out, opacity .2s ease-out;
        top: 0;
        width: 100%;
    `,
    navitorigger02 : css`
        display: inline-block;
        position: absolute;
        z-index: 3;
        right: 0;
        width: 100%;
        height: 1px;
        background-color: rgb(255,255,255);
        border-radius: 8px;
        will-change: transform;
        transition: transform .2s ease-out, width .2s ease-out, opacity .2s ease-out;
        top: 13px;
        width: calc(100% - 5px);
    `,
    navitorigger03: css`
        display: inline-block;
        position: absolute;
        z-index: 3;
        right: 0;
        width: 100%;
        height: 1px;
        background-color: rgb(255,255,255);
        border-radius: 8px;
        will-change: transform;
        transition: transform .2s ease-out, width .2s ease-out, opacity .2s ease-out;
        bottom: 0;
        width: calc(100% - 10px);
    `
}

export const headeritem = {
    div: css`
        justify-content: flex-end;
    `,
    li: css`
        margin: auto;
        color: #222;
        transition: color .2s ease-out;
    `,
    a: css`
        text-decoration: none;
    `
}