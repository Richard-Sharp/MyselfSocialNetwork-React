import React from 'react';
import './main.site.css';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/SideBar';
import style from './App.module.css';
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';
import Profile from './Components/Profile/Profile';
import MessagePageContainer from "./Components/MessagePage/MessagePageContainer";
// import UsersContainer from "./Components/UsersPage/UsersContainer";
import SetUsersPageContainer from "./Components/UsersPage/SetUsersPageContainer";
import FriendsPageContainer from "./Components/FriendsPage/FriedsPageContainer";
import ChangedProfileInfo from "./Components/Profile/ChangedProfileInfo/ChangedProfileInfo";
import TestComponent from "./Components/Test/UserComponent";
import LoginContainer from "./Login/LoginContainer";
import Task5 from "./Components/TestTasks/Task5/Task5";
import DialogsPageProdaction from "./Components/DialogsPage/DialogsPageContainer";
import LoginRDXForm from "./Login/LoginRDXForm";
import CircleDraw from "./Components/TASKS/SimpleDrawingTool/SimpleDrawingTool";
import {infoMeThunkCreator} from "./Redux/AuthReducer";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializedAppTC} from "./Redux/AppReducer";
import Preloader from "./Components/Common/Preloader/Preloader";



class App extends React.Component {
	componentWillMount() {
		this.props.initializedAppTC();
	}

  render() {
	  if(!this.props.initialized) {
	    return <div>
				<Preloader/>
      </div>

    }

    return (

      <div className={style.wrapper}>
        <Header/>
      
       <div className={style.content}>
          <SideBar/>
        <div className={style.wrapper_page}>
          <Switch>
          <Route path='/profilePage' render = {() => <Profile />}/>
          <Route path='/messagesPage' render = {() => <MessagePageContainer />}/>
          <Route path='/dialogsPage/:userId?' render = {(props) => <DialogsPageProdaction userId={props.match.params.userId}/>}/>
          <Route path='/UsersPage' render = {() => <SetUsersPageContainer />}/>
          <Route path='/FriendsPage' render = {() => <FriendsPageContainer />}/>
          <Route path='/login' render = {() => <LoginContainer />}/>
          <Route path='/loginRDX' render = {() => <LoginRDXForm />}/>
          <Route exact path='/user/:userId?' render = {() => <ChangedProfileInfo />}/>
          <Route path='/task' render = {() => <TestComponent />}/>
          {/*<Route path='/reduxform' render = {() => <ReduxFormContainer />}/>*/}
          <Route path='/testtasks' render = {() => <Task5 />}/>
          <Route path='/circledraw' render = {() => <CircleDraw />}/>
          {/* <Route exact path='/#settingsPage' component = {Settings}/> */}

          <Route render = {() => <div>404: PAGE NOT FOUND</div>} />
					</Switch>
        </div>
        </div>
      </div>

     );    
  }}

  let mapStateToProps = (state) => ({
		initialized: state.AppPage.initialized
  })

export default compose (
    withRouter,
    connect(mapStateToProps, {infoMeThunkCreator, initializedAppTC}))(App);
