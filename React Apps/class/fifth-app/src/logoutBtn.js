import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function LogoutButton (props) {
    return (

      <Link to="/" onClick={props.onClick}>
        Logout
      </Link>
    );
}

export default LogoutButton;
