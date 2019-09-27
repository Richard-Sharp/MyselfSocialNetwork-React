export const getUsers = (state) => {
	return state.setUsersPage.items;
};

export const getPageSize = (state) => {
	return state.setUsersPage.pageSize;
};

export const getTotalItemsCount = (state) => {
	return state.setUsersPage.totalItemsCount;
};

export const getIsFetching = (state) => {
	return state.setUsersPage.isFetching;
};

export const geFollowingInProgress = (state) => {
	return state.setUsersPage.followingInProgress;
};

export const getCurrentPage = (state) => {
	return state.setUsersPage.currentPage;
};

