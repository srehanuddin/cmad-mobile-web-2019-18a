import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: props.login
    }
  }
  componentWillMount() {
    
  }
  render() {
    return (
      <div>
        {this.props.hello}
        <Link to="/logout/" >Logout</Link>
      </div>
    );
  }
}

export default Login;
