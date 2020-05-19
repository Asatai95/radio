import { Link } from "gatsby"
import React from "react"
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { css } from '@emotion/core'

interface Layoutprops {
  readonly props?: React.ReactNode | readonly React.ReactNode[]
}

export const Pagination = ({ props }: Layoutprops) => {
	const previousPagePath = props;
	const nextPagePath = props;
	console.log("props")
	console.log(props)
	return (
		<div className="pageBt" css={styled.box}>
			{previousPagePath ? <Link to={previousPagePath}><Button className={BtStyle().buttonBack}>PREVIOUS</Button></Link> : null }
			{nextPagePath ? <Link to={nextPagePath}><Button className={BtStyle().buttonNext}>NEXT</Button></Link> : null }
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