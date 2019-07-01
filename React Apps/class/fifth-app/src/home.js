import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Home extends React.Component {
  constructor() {
    super();
    console.log("constructor")
  }
  componentWillMount() {
    console.log("componentWillMount")
  }
  componentDidMount() {
    console.log("componentDidMount")
  }
  render() {
    console.log("Render")
    return (
      <div>
        Welcom home page
        <div>
          Please login 
          <Link to="/login/">Login</Link>
        </div>
      </div>
    );
  }
}

export default Home;
