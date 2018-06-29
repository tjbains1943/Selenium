import React from "react";
import "./nav.css"
import { Link } from "react-router-dom";


// import "../../style.css"

const Nav = props => (
  <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav ">
      <li className="nav-item active">
        <a  className="nav-link mr-5" href="#">SimplyFIT <span className="sr-only">(current)</span></a>
      </li>

      {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Daily Trainer
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Advanced</a>
          <a className="dropdown-item" href="#">30min Express</a>
          <a className="dropdown-item" href="#">Beginner</a>
        </div>
      </li> */}

      <li className="nav-item dropdown">
        <a  className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Programs
        </a>
        <div className="dropdown-menu " aria-labelledby="navbarDropdownMenuLink">
        <a className="dropdown-item" href="#">Daily Trainer</a>
          <a className="dropdown-item" href="#">Body Building</a>
          <a className="dropdown-item" href="#">Power Lifitng</a>
          <a className="dropdown-item" href="#">Circuit/HIIT</a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Diet
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="">Action</a>
          <a className="dropdown-item" href="">Another action</a>
          <a className="dropdown-item" href="">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="">VIP</a>
      </li>
      <li id="push">
      <form class="form-inline my-2 my-lg-0">
      <input id="log" class="form-control " type="search" placeholder="Email" aria-label="Search"></input>
      <input id="log" class="form-control " type="search" placeholder="Password" aria-label="Search"></input>
      <button class="btn btn-outline-grey" type="submit">Sign-In</button>
      </form>
      
    </li>
    </ul>
  </div>
</nav>
  </div>
);

export default Nav;
