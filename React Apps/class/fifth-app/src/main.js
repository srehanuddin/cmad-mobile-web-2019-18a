import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home'
import Login from './login'


function Main (props) {
    const isLoggedIn = props.isLoggedIn
    if(isLoggedIn){
      return <Home />
    }
    return <Login />
}

export default Main;
