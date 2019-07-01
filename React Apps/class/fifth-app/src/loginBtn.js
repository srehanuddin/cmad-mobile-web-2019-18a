import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function LoginButton (props) {
  return (
    <Link to="/login/" onClick={props.onClick}>
      Login
    </Link>
  );
}

export default LoginButton;
