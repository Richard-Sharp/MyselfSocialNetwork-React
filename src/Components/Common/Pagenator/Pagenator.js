import React from 'react';
import style from './Pagenator.module.css'

const Pagenator = ({currentPage, totalItemsCount, pageSize, onPageChanged}) => {
	let pagesCount = Math.ceil(totalItemsCount / pageSize);
	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}

	return <div className={style.pagesWrapper}>
		{pages.map(p => {
			return <button
					onClick={() => {
						onPageChanged(p)
					}}
					className={currentPage === p && style.selectedPage}>{p}</button>
		})}
	</div>
}

export default Pagenator;