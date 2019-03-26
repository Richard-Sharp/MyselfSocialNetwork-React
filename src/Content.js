import React from 'react';
import SideBar from './sideBar';
import Profile from './Profile';
import Records from './Records';
import style from './site.module.css';



const Content = () => {
   return (
    
   <div className = {style.content}>
	    <SideBar/>
        <Profile/>
        <Records/>
	</div>
    );
    }

export default Content;

