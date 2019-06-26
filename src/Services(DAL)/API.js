import SNAxios from "./SNAxios";

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