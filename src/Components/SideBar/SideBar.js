import React from 'react';
import style from './SideBar.module.css';
import {NavLink} from 'react-router-dom';

const SideBar = () => {
	return (
			<div className={style.sideBar}>
        <span className={style.menu}>
          <NavLink to="/profilePage" activeClassName={style.active}>Профиль</NavLink></span>
				<span className={style.menu}>
					<NavLink to="/messagePage" activeClassName={style.active}>Сообщения</NavLink>
        </span>
				<span className={style.menu}>
          <NavLink to="/friendPage" activeClassName={style.active}>Друзья</NavLink>
        </span>
				<span className={style.menu}>
  				<NavLink to="/audioPage" activeClassName={style.active}>Музыка</NavLink>
				</span>
				<span className={style.menu}>
          <NavLink to="/settingsPage">Настройки</NavLink>
        </span>
			</div>
	);
}

export default SideBar;

