import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home'
import Login from './login'
import LoginButton from './loginBtn';
import LogoutButton from './logoutBtn';
import Main from './main';


class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
    this.handleLoginButton = this.handleLoginButton.bind(this)
    this.handleLogoutButton = this.handleLogoutButton.bind(this)
  }

  handleLoginButton(){
    this.setState({
      isLoggedIn : true
    })
  }
  handleLogoutButton(){
    this.setState({
      isLoggedIn : false
    })
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn
    // let button;
    // if(isLoggedIn){
    //    button = <LogoutButton onClick={this.handleLogoutButton} />
    // }
    // else {
    //   button =  <LoginButton onClick={this.handleLoginButton} />
    // }

    return (
      <div>
        {isLoggedIn ?
          <LogoutButton onClick={this.handleLogoutButton} /> :
          <LoginButton onClick={this.handleLoginButton} />
        }
        
        <Main 
          isLoggedIn = {isLoggedIn}
        />
        {/* {button} */}
      </div>
    )
  }
}

export default LoginControl;
