import React from "react"
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { css } from '@emotion/core'

export const Pagination = ( item ) => {
  const nextPath = item.props.pageContext.nextPagePath;
  const prevPath = item.props.pageContext.previousPagePath;

	return (
		<div className="pageBt" css={styled.box}>
			{prevPath ? <a href={prevPath}><Button className={BtStyle().buttonBack}>PREVIOUS</Button></a> : <div css={styled.blackBox}></div> }
      <div>
        <p css={styled.p}>
          <span>{item.props.pageContext.humanPageNumber}</span> / {item.props.pageContext.numberOfPages}
        </p>
      </div>
			{nextPath ? <a href={nextPath}><Button className={BtStyle().buttonNext}>NEXT</Button></a> : <div css={styled.blackBox}></div> }
		</div>
	)
}

const styled = {
	box: css`
		width: 80%;
		display: flex;
		align-items: center;
		justify-content: space-around;
		margin: auto;
		padding-top: 50px;
    border-top: 3px solid rgb(81,165,255, .6);
    @media (max-width: 480px) {
      width: 100%;
      padding-top: 30px;
    }
  `,
  p : css`
    margin: 0;
    font-weight: 800;
    font-size: 18px;
  `,
  blackBox: css`
    width: 150px;
    height: 45px;
  `
}

const BtStyle = makeStyles({
    buttonBack: {
      color: "#fff",
      background: "linear-gradient(45deg, rgb(33, 150, 243) 30%, rgb(33, 203, 243) 90%)",
      width: "150px",
      height: "45px",
      border: "solid rgba(0,0,0,.21)",
      borderWidth: "1px 1px 4px",
      padding: "0px 8px",
      textShadow: "0 1px 0 rgba(0,0,0,.15)",
      transition: ".8s",
      borderRadius: "30px",
    },
    buttonDisable: {
      background: "rgba(0, 0, 0, 0.26)",
      width: "150px",
      height: "45px",
      border: "none",
      padding: "0px 8px",
      textShadow: "0 1px 0 rgba(0,0,0,.15)",
      borderRadius: "30px",
      cursor: "auto",
    },
    buttonNext: {
      color: "#fff",
      background: "linear-gradient(225deg, rgb(33, 150, 243) 30%, rgb(33, 203, 243) 90%)",
      width: "150px",
      height: "45px",
      border: "solid rgba(0,0,0,.21)",
      borderWidth: "1px 1px 4px",
      padding: "0px 8px",
      textShadow: "0 1px 0 rgba(0,0,0,.15)",
		  transition: ".8s",
		  borderRadius: "30px",
    }
})