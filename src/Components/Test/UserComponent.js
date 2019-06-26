import React from 'react';
import {NavLink, Route} from "react-router-dom";
import UserTestContainer from "./UserTestContainer";


const TestComponent = (props) => {

	return <div>

		<div>
			<NavLink to="/test">Test Users</NavLink>
		</div>

		<div>
			<Route path='/test' render = {() => <UserTestContainer />}/>
		</div>
		<UserTestContainer />
	</div>
}

export default TestComponent;