import { css } from '@emotion/core';

export const outer = css`
  position: relative;
  padding: 0 5vw;
`;

export const inner = css`
  margin: 0 auto;
  max-width: 1040px;
  width: 100%;
`;

export const innertop = css`
  height: 100vh!important;
  min-height: 500px;
`

export const bghead = css`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`

export const linner = {
  linner01: css`
    position: relative;
    width: 86%;
    max-width: 1430px;
    height: 100%;
    margin-top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  `,
  linnerimg: css`
    width : 400px;
  `
}

export const playbt = {
  link: css`
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    color: #e6e6e6;
    font-size: 16px;
  `,
  circle: css`
    position: relative;
    display: inline-block;
    width: 53px;
    height: 53px;
    margin-right: 16px;
    padding-top: 0;
    border: 1px solid rgb(32,166,242,.8);
    border-radius: 50%;
    text-align: center;
    transition: border .2s ease-out, background .2s ease-out;
  `,
  text: css`
    color : rgb(32,166,242,.8);
    font-size: 20px;
    position: relative;
  `,
  img: css`
    width: 13px;
    height: 15px;
    position: absolute;
    top: 0;
    right: -4px;
    left: 0;
    bottom: 0;
    margin: auto!important;
  `
}

export const scrolldown = css`
  font-size: 15px;
  width: 100px;
  text-align: center;
  position: absolute;
  z-index: 2;
  bottom: 0;
  right: 0;
  transform: rotate(90deg);
  transform-origin: center center;
  margin-bottom: 77px;
`

export const social = {
  shareicon :css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
  `,
  ul: css`
    font-weight: 300;
  `,
  nav: css`
  position: fixed;
  z-index: 4;
  bottom: 40px;
  left: 40px;
  `
}

export const bg_img = css`
  min-width: 100%;
  min-height: 100%;
  height: 1080px;
  width: 100%;
  position: absolute;
  top: 45%;
  left: 50%;
  right: 0%;
  bottom: 0%;
  transform: translate(-50%, -50%);
`

export const sectionlinkhome =  css`
  width: 45%;
  position: relative;
  overflow: hidden;
`

export const headline = css`
  font-size: 41px;
  letter-spacing: 0.05em;
`

export const flight = css`
  font-weight: 800;
`

export const showsml = css`
  display: none;
`