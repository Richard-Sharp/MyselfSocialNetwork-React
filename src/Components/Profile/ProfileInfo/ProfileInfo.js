import React from 'react';
import style from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileStatusWithHook from "./ProfileStatus/ProfileStatusWithHook";

const ProfileInfo = (props) => {
	//let profile = props.profileInfo.profile;
	return (
			<>
			<div className={`${style.prof_settings} ${style.profile_Description}`}>

				<div className={style.avatar}>
					<img className={style.ava}
							 src='https://img2.freepng.ru/20180402/ogw/kisspng-computer-icons-user-profile-clip-art-user-avatar-5ac208105c03d6.9558906215226654883769.jpg'
							 alt="avatar"/>
				</div>

				<div className={style.description}>
            <span>
            <h3>{`${props.name} ${props.surname}`}</h3>
            <p>Дата рождения: {props.date_brth} </p>
            <p>Пол: {props.male}</p>
            <p>Образование: {props.education}</p>
            </span>
				</div>
			</div>
			<div>
				<ProfileStatus status={props.status} updateUserStatus={props.updateUserStatusThunkCreator}/>
				<ProfileStatusWithHook status={props.status} updateUserStatus={props.updateUserStatusThunkCreator}/>
			</div>
				</>
			);
				}

export default ProfileInfo;
