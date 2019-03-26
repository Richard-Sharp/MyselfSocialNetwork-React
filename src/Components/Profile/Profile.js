import React from 'react';
import style from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import RecordsWallContainer from "./RecordsWall/RecordsWallContainer";


const Profile = (props) => {

	return (
			<div>
				<div className={style.profile}>
					{/*<img className={style.profileImg} src="../../img/profile-img.jpg" alt=""/>*/}
					{/*<img className={style.profileImg}> scr	*/}
					{/*</img>*/}
				</div>
					{/*<ProfileInfo/>*/}
					<RecordsWallContainer/>
			</div>
	);
}

export default Profile;