import React from 'react';
import style from "./usersPage.module.css"
import Pagenator from "../Common/Pagenator/Pagenator";
import User from "./User";

const SetUsersPage = ({currentPage, totalItemsCount, pageSize, onPageChanged, ...props}) => {

	return <div className={style.wrapper}>

		<Pagenator currentPage={currentPage}
							 totalItemsCount={totalItemsCount}
							 pageSize={pageSize}
							 onPageChanged={onPageChanged}/>

		<div className={style.usersWrapper}>
			{props.users.map(user =>
						<User user={user}
									key={user.id}
									followingInProgress={props.followingInProgress}
									subScribeUser={props.subScribeUser}
									unSubcribeUser={props.unSubcribeUser}
									isAuth={props.isAuth}
									authRedirect={props.authRedirect}	/>
			)}
		</div>
	</div>
}

export default SetUsersPage;