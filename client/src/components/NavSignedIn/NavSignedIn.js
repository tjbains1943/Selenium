import React from "react";
import "./navSignedIn.css";
import { Link } from "react-router-dom";

// import "../../style.css"

const NavSignedIn = props => (
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
                Self Trainer- Bodybuilding/Powerlifting/Circuit Training
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
          <li className="nav-item">
          <Link to={"/profile"}>
            <p id="simple" className="nav-link m-0" href="">
              {`${props.name}'s profile`}
            </p>
            </Link>
          </li>
          <li>
          <Link to={"/"}>
            <p id="simple" className="nav-link m-0" href="">
              Sign the f Out
            </p>
            </Link>
            </li>
          <li id="push">
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default NavSignedIn;
