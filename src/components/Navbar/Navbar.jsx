import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from '../Login/Login';

import './Navbar.css';

const Navbar = () => (
  <Router>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="/">
      QUICKFIX
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarColor01"
      aria-controls="navbarColor01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">
            Home
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/login">
            Login
          </a>
          {/* <Link className ="nav-link" to="/login"> Login</Link> */}
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            SignUp
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            About
          </a>
        </li>
      </ul>
    </div>
    <Route path="/login" component={Login}/>
  </nav>
  </Router>
 
);

export default Navbar;
