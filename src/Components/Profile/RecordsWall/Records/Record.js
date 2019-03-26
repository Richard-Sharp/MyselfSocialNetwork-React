import React from 'react';
import style from './Records.module.css';

const Record = (props) => {
	return (
			<div className={style.record}>
				<img
						src='https://img2.freepng.ru/20180401/klw/kisspng-user-profile-computer-icons-clip-art-profile-5ac092f6f2d337.1560498715225699749946.jpg'
						alt=""/>
				<div>
					<p className={style.name}>{props.userName}:</p>
					<p>{props.record}</p>
				</div>
			</div>
	);
}

export default Record;

