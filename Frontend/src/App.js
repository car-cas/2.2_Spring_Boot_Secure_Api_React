import React from 'react';
import { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import {Login} from "./components/Login";
import Home from "./components/Home";
import {NewTask} from "./components/NewTask";
import {FilterTask} from "./components/FilterTask";
import {UserProfile} from "./components/UserProfile";

class App extends Component{
    constructor(props) {
        super(props);
        localStorage.setItem('email', "admin");
        localStorage.setItem('password', "admin");
  }

  render(){
    const LoginView = () => (
      <Login />
    );
    const NewTaskView = () => (
      <NewTask />
    );
    const FilterTaskView = () => (
      <FilterTask />
    );
    const UserProfileView = () => (
      <UserProfile />
    );
    if(!localStorage.getItem("isLoggedIn")){
      return (
        <Router>
          <div className="App">   
            <Route exact path="/" component={LoginView} />          
            <Route exact path="/Login" component={LoginView} />
            <Route exact path="/UserProfile" component={UserProfileView} />
          </div>
        </Router>
      );
    }else{
      return(
        <Router>
          <div className="App">
            <Home />
            <Route exact path="/NewTask" component={NewTaskView} />
            <Route exact path="/FilterTask" component={FilterTaskView} />
            <Route exact path="/UserProfile" component={UserProfileView} />
          </div>
        </Router>
      )
    }
  }
}

export default App;
