import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './main'
import LoginControl from './loginControl';
import Home from "./home";
import Login from "./login"

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
function App() {
  return (
    // <Main 
    // isLoggedIn={false}
    // />
    // <LoginControl />
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
        </ul>
      </nav>

      {/* <Route path="/" exact component={LoginControl} /> */}
      <Route path="/about/" component={Index} />
      <Route path="/users/" component={Users} />

      <Route path="/login/" component={Login} />
       <Route path="/" component={Home} />
       {/* <Route path="/logout" component={Logout} /> */}
    </div>
  </Router>
  );
}

export default App;
