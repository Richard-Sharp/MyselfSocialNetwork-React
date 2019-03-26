import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
	//let profile = props.profileInfo.profile;
	return (
			<div className={`${style.prof_settings} ${style.profile_Description}`}>

				<div className={style.avatar}>
					<img className={style.ava}
							 src='https://img2.freepng.ru/20180402/ogw/kisspng-computer-icons-user-profile-clip-art-user-avatar-5ac208105c03d6.9558906215226654883769.jpg'
							 alt="avatar"/>
				</div>

				<div className={style.description}>
            <span>
            <h3>{`${props.profileInfo.profilePage.profile.name} ${props.profileInfo.profilePage.profile.surname}`}</h3>
            <p>Дата рождения: {props.profileInfo.profilePage.profile.date_brth} </p>
            <p>Пол: {props.profileInfo.profilePage.profile.male}</p>
            <p>Образование: {props.profileInfo.profilePage.profile.education}</p>
            </span>
				</div>
			</div>
				);
				}

export default ProfileInfo;
