import React from 'react';
import SNAxios from "../../Services/SNAxios";
import {baseUserImg} from "../../Services/BaseImgs";


let style = {
	width: '100px',
	height: '100px'
};

let SetUsers = (props) => {

	// let loadUsers = () => {
	// 	// let usersFromServer = [{fullName: 'Dima',	photo: "https://img2.freepng.ru/20180402/ogw/kisspng-computer-icons-user-profile-clip-art-user-avatar-5ac208105c03d6.9558906215226654883769.jpg"}]
	// }

		SNAxios
				.get("users?count=100")
				.then( (response) => {
					if(response.data.error) {
						alert(response.data.error);
					} else {
						props.setUsers(response.data.items);
					}
				});


	let unSubcribe = (user) => {
		SNAxios.delete('follow/' + user.id)
				.then( response => {
					props.unSubscribe(user.id);
				})
				.catch( (response) => {
					alert(response.message);
				})
		SNAxios
				.get("users?count=100")
				.then((response) => {
					props.setFriends(response.data.items);
				})
				.catch( (response) => {
					alert(response.message);
				})

	};
	let subcribeUser = (e) => {
		let clickedButton = e.target;
		let userId = +clickedButton.dataset.userId
		SNAxios.post('follow/' + userId)
				.then(response => {
					props.subscribeU(userId);

				})
				.catch( (response) => {
						alert(response.message);
						// if(response.response.status == 401) {
						// 	alert('Ошибка')
						// }
				})
		SNAxios
				.get("users?count=100")
				.then((response) => {
					props.setFriends(response.data.items);
				})
				.catch( (response) => {
					alert(response.message);
				})
	};

	return <div>
		{/*<div>*/}
			{/*<button onClick={loadUsers}>Load Users</button>*/}
		{/*</div>*/}
		{
			props.users.map(user => <div key={user.id}>
				<img style={style} src={user.photos.small ? user.photos.small : baseUserImg} alt=""/>
				<span>{user.name}</span>
				{user.followed ? <button onClick={() => unSubcribe(user)}>Отписаться</button> : <button data-user-id={user.id} onClick={subcribeUser}>Подписаться</button>}
			</div>)
		}

	</div>
}

export default SetUsers;