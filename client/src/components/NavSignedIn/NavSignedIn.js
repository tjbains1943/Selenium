import React from "react";
import "./navSignedIn.css";
import { Link } from "react-router-dom";

// import "../../style.css"

const NavSignedIn = props => (
  <div>
    <nav id="navs" className="navbar navbar-expand-lg navbar-light bg-black">
    <img id="logo" src="https://www.freelogoservices.com/api/main/images/1j+ojl1KOMkX9WyofBe43D6kivOHpBVInhjEwXs1M3EMoAJtlSMtgvVq8v8z" alt="First slide"></img>
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
        <ul className="navbar-nav ml-auto">

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
              <Link to={"/Selftrainer"}>
              <a className="dropdown-item" href="">
                Self Trainer
                <p>(Bodybuilding/Powerlifting/Circuit Training)</p>
              </a>
              </Link>
           
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
