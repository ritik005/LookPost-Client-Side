import React from "react";
import { isAuth,signout } from "../../helper/auth"

import './Navbar.css';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="/">
      QUICKFIX
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarColor01"
      aria-controls="navbarColor01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item ">
          <a className="nav-link" href="/">
            Home
            {/* <span className="sr-only">(current)</span> */}
          </a>
        </li>
        {isAuth()? null:
        <li className="nav-item">
          <a className="nav-link" href="/login">
            Login
          </a>
        </li>}
        {isAuth()? null:
        <li className="nav-item">
          <a className="nav-link" href="/login">
            SignUp
          </a>
        </li>}
        {isAuth()? 
        <li className="nav-item">
        <a className="nav-link" href="/login" onClick={signout}>
          SignOut
        </a>
      </li>:null}
        <li className="nav-item">
          <a className="nav-link" href="/post">
            Query
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
