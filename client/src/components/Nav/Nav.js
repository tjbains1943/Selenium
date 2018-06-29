import React from "react";
import { Link } from "react-router-dom";


// import "../../style.css"

const Nav = props => (
  <div>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href=""></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link mr-5" href="">SimplyFit <span className="sr-only">(current)</span></a>
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
        <a className="nav-link dropdown-toggle ml-5" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
      <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" name="email" type="search" placeholder="Email" aria-label="Search" onChange={props.onChange}></input>
      <input className="form-control mr-sm-2" name="password" type="search" placeholder="Password" aria-label="Search" onChange={props.onChange}></input>
      
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={props.onSubmit}>Sign-In</button>
      <Link to={"/signup"}>
      <button className="btn btn-outline-success my-2 my-sm-0 ml-2" type="submit">Sign-Up</button>
      </Link>

    </form>
    </ul>
  </div>
</nav>
  </div>
);

export default Nav;
