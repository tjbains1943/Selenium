import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

// import "../../style.css"

const Nav = props => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-black">
      <p className="navbar-brand" href="" />
      <button
        className="navbar-toggler bg-white"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a id="simple" className="nav-link mr-5" href="">
              SimplyFIT <span className="sr-only">(current)</span>
            </a>
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
            <a
              className="nav-link dropdown-toggle text-white"
              href=""
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Programs
            </a>
            <div
              className="dropdown-menu text-white "
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link to={"/Daily"}>
                <p className="dropdown-item m-0">Daily Trainer</p>
              </Link>
              <a className="dropdown-item" href="">
                Body Building
              </a>
              <a className="dropdown-item" href="">
                Power Lifitng
              </a>
              <a className="dropdown-item" href="">
                Circuit/HIIT
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-white"
              href=""
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Diet
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="">
                Recipes
              </a>
              <a className="dropdown-item" href="">
                Healthy Replacements
              </a>
              <a className="dropdown-item" href="">
                Supplement Recommendations
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a id="simple" className="nav-link" href="">
              VIP
            </a>
          </li>
          <li id="push">
            <form className="form-inline my-2 my-lg-0">
              <input
                id="log"
                className="form-control"
                name="email"
                type="search"
                placeholder="Email"
                aria-label="Search"
                onChange={props.onChange}
              />
              <input
                id="log2"
                className="form-control "
                name="password"
                type="search"
                placeholder="Password"
                aria-label="Search"
                onChange={props.onChange}
              />
              <button className="btn" onClick={props.onClick} type="submit">
                Sign-In
              </button>
              
              {/* <Link to={"/signup"}>
                <button className="btn btn-outline-grey ml-4" type="submit">
                  Sign-Up
                </button>
              </Link> */}
            </form>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Nav;
