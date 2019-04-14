import React from 'react';
import style from './Profile.module.css';
import RecordsWallContainer from "./RecordsWall/RecordsWallContainer";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";


const Profile = () => {

	return (
			<div>
				<div className={style.profile}>
				</div>
					<ProfileInfoContainer/>
					<RecordsWallContainer/>
			</div>
	);
}

export default Profile;