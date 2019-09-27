import React from 'react';
import {withRouter} from "react-router-dom";
import SNAxios from "../../../Services(DAL)/SNAxios";
import {baseUserImg} from "../../../Services(DAL)/BaseImgs";

// import style from './ChangedProfileInfo.module.css'


class ChangedProfileInfo extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			profile: null,
			editMode: false,
			me: null,
			isOwner: false,
			userAvatar: ''
		}
	}

	componentDidMount() {
		let userIdFromURL = this.props.match.params.userId;
		let profilePromise = SNAxios
				.get('profile/' + userIdFromURL)
				.then((res) => {
					this.setState({profile: res.data});
					this.setState({userAvatar: res.data.photos.large});
				});
		let mePromise = SNAxios
				.get('auth/me')
				.then((res) => {
					this.setState({me: res.data.data});
				});
		Promise.all([profilePromise, mePromise]).then(() => {
			let {profile, me} = this.state;
			if (!!me && !!profile && me.id === profile.userId) {
				this.setState({isOwner: true});
			}
		})
	}

	onEditClick = () => {
		this.setState({editMode: true});
	}
	onContactsChange = (newValue, contatctKey) => {
		this.state.profile.contacts[contatctKey] = newValue;
		this.forceUpdate();
	}
	onNameChange = (newValue) => {
		this.state.profile.fullName = newValue;
		this.forceUpdate();
	}
	onAboutMeChange = (event) => {
		this.state.profile.aboutMe = event;
		this.forceUpdate();
	}
	onLookingForAJobChange = (event) => {
		this.state.profile.lookingForAJob = event;
		this.forceUpdate();
	}
	onLookingForAJobDescriptionChange = (event) => {
		this.state.profile.lookingForAJobDescription = event;
		this.forceUpdate();
	}
	onSaveClick = () => {
		SNAxios
				.put('profile', this.state.profile)
				.then((res) => {

				});
		this.setState({editMode: false})
	}

	onPhotoChange = (e) => {
	debugger;
		this.state.userAvatar = e.target.files[0];
		this.setState({userAvatar: e.target.files[0]})


		// this.state.profile.photos.large = 'http://pastilastore.ru/assets/images/products/5318/dsc-0072.png';

	}

	uploadPhoto = () => {
		let formData = new FormData();
		formData.append("image", this.state.userAvatar);
		SNAxios
				.put('profile/photo', formData, {
					headers: {
						'Content-type': 'multipart/form-data'
					}
				})
				.then((res) => {

				});
		this.setState({editMode: false})
	}

	render() {
		let {profile, isOwner, editMode} = this.state;

		// if(!!me && !!profile && me.id === profile.userId) {
		// 	isOwner = true;
		// }
		if (profile) {
			return <div>
				<h2>
					{/*{this.state.profile.fullName}*/}
					{editMode ? <input
									value={profile.fullName}
									onChange={(e) => {
										let newName = e.target.value;
										this.onNameChange(newName);
									}}/>
							: this.state.profile.fullName}
					{(isOwner && !editMode) && <button onClick={this.onEditClick}>Edit</button>}
				</h2>
				<div>
					<div>
						{editMode ? <textarea
										cols="30" rows="3"
										value={profile.aboutMe}
										onChange={(e) => {
											this.onAboutMeChange(e.currentTarget.value);
										}}/>
								: profile.aboutMe}
					</div>
					{
						Object.keys(profile.contacts).map(key => {
							return <div>
								<b>{key}: </b>
								{editMode ? <input
												value={profile.contacts[key]}
												onChange={(e) => {
													let newValue = e.target.value;
													this.onContactsChange(newValue, key);
												}}/> :
										<span>{profile.contacts[key]}</span>}
							</div>
						})
					}
					<div><b>Мои навыки: </b>
						{editMode ? <textarea
										cols="30" rows="3"
										value={profile.lookingForAJobDescription}
										onChange={(e) => {
											this.onLookingForAJobDescriptionChange(e.currentTarget.value);
										}}/>
								: profile.lookingForAJobDescription}
					</div>
					{editMode ? <input
									type="checkbox" checked={profile.lookingForAJob}
									onChange={(e) => {
										this.onLookingForAJobChange(e.currentTarget.checked)
									}
									}/>
							: <div>{profile.lookingForAJob && 'Я ищу работу!'}</div>}
					{editMode && <button onClick={this.onSaveClick}>Save</button>}
				</div>
				<div>
					{this.state.userAvatar ? <img src={this.state.userAvatar} alt="avatar"/>
					: <img src={baseUserImg} alt="avatar"/>}

					<input type="file" id='photo'
								onChange={(e) => {
									this.onPhotoChange(e)}
								}/>
					<button onClick={() => this.uploadPhoto(this.userAvatar)}>Обновить фото</button>
				</div>
			</div>
		} else {
			return <div>User not found...</div>
		}
	}
}

export default withRouter(ChangedProfileInfo);


//
// const ChangedProfileInfo = (props) => {
// 	//let profile = props.profileInfo.profile;
// 	return (
// 			<div className={`${style.prof_settings} ${style.profile_Description}`}>
//
// 				<div className={style.avatar}>
// 					<img className={style.ava}
// 							 src='https://img2.freepng.ru/20180402/ogw/kisspng-computer-icons-user-profile-clip-art-user-avatar-5ac208105c03d6.9558906215226654883769.jpg'
// 							 alt="avatar"/>
// 				</div>
//
// 				<div className={style.description}>
//             <span>
//             <h3>{`${props.name} ${props.surname}`}</h3>
//             <p>Дата рождения: {props.date_brth} </p>
//             <p>Пол: {props.male}</p>
//             <p>Образование: {props.education}</p>
//             </span>
// 				</div>
// 			</div>
// 				);
// 				}
//
// export default ChangedProfileInfo;
