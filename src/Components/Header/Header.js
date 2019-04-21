import React from 'react';
import style from './Header.module.css';
import LoginInfoContainer from "../../Login/LoginInfo";


const Header = () => {
   return (
    <div className = {style.header}>
		 	<div>
				<LoginInfoContainer/>
			</div>
	  </div>
  );
}

export default Header;
