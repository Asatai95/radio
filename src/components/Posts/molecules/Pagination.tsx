import { Link } from "gatsby"
import React from "react"

interface Layoutprops {
  readonly props?: React.ReactNode | readonly React.ReactNode[]
}

export const Pagination = ({ props }: Layoutprops) => {
	const pageContext = props;
    const previousPagePath = pageContext;
    const nextPagePath = pageContext;

	return (
		<div>
			{previousPagePath ? <Link to={previousPagePath}>前のページ</Link> : null }
			{nextPagePath ? <Link to={nextPagePath}>次のページ</Link> : null }
		</div>
	)
}
