import React from 'react';
import './main.site.css';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/SideBar';
import style from './App.module.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Profile from './Components/Profile/Profile';
import MessagePageContainer from "./Components/MessagePage/MessagePageContainer";
// import UsersContainer from "./Components/UsersPage/UsersContainer";
import SetUsersPageContainer from "./Components/UsersPage/SetUsersPageContainer";
import FriendsPageContainer from "./Components/FriendsPage/FriedsPageContainer";
import Login from "./Login/Login";
import LoginInfo from "./Login/LoginInfo";
import ChangedProfileInfo from "./Components/Profile/ChangedProfileInfo/ChangedProfileInfo";
import TestComponent from "./Components/Test/UserComponent";
import ChangedProfileInfoContainer from "./Components/Profile/ChangedProfileInfo/ChangedProfileInfoContainer";
import LoginRDXForm from "./Login/LoginRDXForm";



const App = (props) => {
    return (
      <BrowserRouter>
      <div className={style.wrapper}>
        <Header/>
      
       <div className={style.content}>
          <SideBar/>
        <div className={style.wrapper_page}>
          <Route path='/profilePage' render = {() => <Profile />}/>
          <Route path='/messagesPage' render = {() => <MessagePageContainer />}/>
          <Route path='/UsersPage' render = {() => <SetUsersPageContainer />}/>
          <Route path='/FriendsPage' render = {() => <FriendsPageContainer />}/>
          <Route path='/login' render = {() => <Login />}/>
          <Route path='/loginRDX' render = {() => <LoginRDXForm />}/>
          <Route exact path='/user/:userId?' render = {() => <ChangedProfileInfo />}/>
          <Route path='/task' render = {() => <TestComponent />}/>
          {/* <Route exact path='/#settingsPage' component = {Settings}/> */}
        </div>
        </div>
      </div>
      </BrowserRouter>
     );    
  }

export default App;
