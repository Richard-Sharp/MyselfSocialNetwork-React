import SNAxios from "./SNAxios";


//Получение списка всех пользователей, подписка/отписка:
export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return SNAxios.get(`users?page=${currentPage}&count=${pageSize}`)
				.then(response => {
					return response.data;
				});
	},
	subScribeUser(userId) {
		return SNAxios.post('follow/' + userId)
				.then(response => {
					return response.data;
				});
	},
	unSubscribeUser(userId) {
		return SNAxios.delete('follow/' + userId)
				.then(response => {
					return response.data;
				});
	}
}

//Получение данных профиля пользователя, получение статуса, обновление статуса:
export const profileAPI = {
	getProfile(userId) {
		return SNAxios.get('profile/' + userId);
	},
	getStatus(userId) {
		return SNAxios.get('profile/status/' + userId);
	},
	updateStatus(status) {
		return SNAxios.put('profile/status/', {status: status});
	}

}

//Получение списка "друзей"(подписанных пользователей), отписка от друга
export const friendsAPI = {
	getFriends() {
		return SNAxios.get("users?count=100")
				.then(response => {
					return response.data;
				});
	},
	unSubscribeFriend(userId) {
		return SNAxios.delete('follow/' + userId)
				.then(response => {
					return response.data;
				});
	}
}

//Авторизация пользователя, получение информации об аккаунте, выход из учетной записи
export const loginAPI = {
	loginACC(login, password, rememberMe = false) {
		return SNAxios.post('auth/login', {
			email: login,
			password: password,
			rememberMe: rememberMe
		})
				.then(response => {
					return response.data;
				});
	},
	authMe() {
		return SNAxios.get('auth/me')
				.then(response => {
					return response.data;
				});
	},
	authLogOut() {
		return SNAxios.post('auth/logout')
				.then(response => {
					return response.data;
				});
	}
}

//Диалоги, получение всех чатов, сообщений от разных пользователей, информации о сообщении:
export const dialogsAPI = {
	getDialogs() {
		return SNAxios.get('dialogs')
				.then(response => {
					return response.data;
				});
	},
	startDialogs(userId) {
		return SNAxios.put('dialogs/' + userId)
				.then(response => {
					return response.data;
				});
	},
	getMessages(userId) {
		return SNAxios.get('dialogs/' + userId + '/messages')
				.then(response => ({
					messages: response.data.items,
					totalCount: response.data.totalCount
				}));
	},
	sendMessages(userId, body) {
		return SNAxios.post('dialogs/' + userId + '/messages', {body})
				.then(response => {
					return response.data;
				});
	},
	getNewMessagesCount() {
		return SNAxios.get('dialogs/messages/new/count')
				.then(response => {
					return response.data;
				});
	},
	getMessagesNewerThen(userId, date) {
		return SNAxios.get(`dialogs/${userId}/messages/new?newerThen=${date}`)
				.then(response => {
					return response.data;
				});
	}

}