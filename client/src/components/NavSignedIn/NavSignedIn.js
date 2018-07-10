import React from "react";
import "./navSignedIn.css";
import { Link } from "react-router-dom";

// import "../../style.css"

const NavSignedIn = props => (
  <div>
    <nav id="navs" className="navbar navbar-expand-lg navbar-light bg-black">
  
    {/* <img id="logo"src="https://dl-mail.ymail.com/ws/download/mailboxes/@.id==VjN-fPjCGYf9TcvfzgwUsDgxQGJNJ6CDvfs0ugenaBvhpbMXP2zTf54Is2v5M79lLJvs6F676llwJijNHGM9Rx73ng/messages/@.id==AO0bn4lIraw5W0EgwACE0HcHEKo/content/parts/@.id==2/raw?appid=YMailNorrin&ymreqid=96d8bd1c-1d91-8c48-1c88-3b0004010300&token=zitEzqOML3j84e6ealFTT5U7-km5qEQF52lp7AcCuBYvtT4rK7pIV-LAtLWr2B88uR-LM3aIgX_3Wyym3t7PFNDRuj2Dppy7PsXS_X6njKIGYHG5zZROOYeWZBW-NzAx" alt="">  </img> */}

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
              <Link to={"/dailyTrainer"}>
                <p className="dropdown-item m-0">All Daily Trainers</p>
              </Link>
              <Link to={"/Selftrainer"}>
              <span className="dropdown-item m-0" href="">
                Self Trainer
                <p>(Bodybuilding/Powerlifting/Circuit Training)</p>
              </span>
              </Link>
           
            </div>
          </li>
          {/* <li className="nav-item dropdown">
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
          </li> */}
          <li className="nav-item">
          </li>
          <li className="nav-item">
          <Link to={"/profile"}>
            <p id="simple" className="nav-link m-0">
              {`${props.name}'s profile`}
            </p>
            </Link>
          </li>
          <li>
          <Link to={"/"}>
            <p id="simple1" className="nav-link m-0" onClick={props.signOut}>
              SignOut
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
