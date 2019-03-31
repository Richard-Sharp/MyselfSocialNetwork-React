import React from 'react';
import './main.site.css';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/SideBar';
import style from './App.module.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Profile from './Components/Profile/Profile';
import MessagePageContainer from "./Components/MessagePage/MessagePageContainer";
import UsersContainer from "./Components/UsersPage/UsersContainer";


const App = (props) => {
    return (
      <BrowserRouter>
      <div className={style.wrapper}>
        <Header/>
      
       <div className={style.content}>
          <SideBar/>
        <div className={style.wrapper_page}>
          <Route path='/profilePage' render = {() => <Profile />}/>
          <Route path='/messagePage' render = {() => <MessagePageContainer />}/>
          <Route path='/UsersPage' render = {() => <UsersContainer />}/>
          {/* <Route exact path='/#settingsPage' component = {Settings}/> */}
        </div>
        </div>
      </div>
      </BrowserRouter>
     );    
  }

export default App;
