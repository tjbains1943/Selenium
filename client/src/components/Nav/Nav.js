import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

// import "../../style.css"

const Nav = props => (
  <div>
  
    <nav id="navs" className="navbar navbar-expand-lg navbar-light bg-black">
    <img id="logo" src="https://dl-mail.ymail.com/ws/download/mailboxes/@.id==VjN-fPjCGYf9TcvfzgwUsDgxQGJNJ6CDvfs0ugenaBvhpbMXP2zTf54Is2v5M79lLJvs6F676llwJijNHGM9Rx73ng/messages/@.id==AO0bn4lIraw5W0EgwACE0HcHEKo/content/parts/@.id==2/raw?appid=YMailNorrin&ymreqid=96d8bd1c-1d91-8c48-1c88-3b0004010300&token=zitEzqOML3j84e6ealFTT5U7-km5qEQF52lp7AcCuBYvtT4rK7pIV-LAtLWr2B88uR-LM3aIgX_3Wyym3t7PFNDRuj2Dppy7PsXS_X6njKIGYHG5zZROOYeWZBW-NzAx" ></img>
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
          <li className="nav-item active">
          
            {/* <a id="simple1" className="nav-link mr-5" href="">
              SimplyFIT <span className="sr-only">(current)</span>
            </a> */}
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
              <Link to={"/daily"}>
                <p className="dropdown-item m-0">Daily Trainer</p>
              </Link>
              <Link to={"/Selftrainer"}>
              <p className="dropdown-item m-0"> Self Trainer</p>
              <p className="dropdown-item m-0" >(Bodybuilding/Powerlifting/Circuit Training)</p>
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
            <Link to={"/Diet"}>
              <p className="dropdown-item m-0" href="">
                Recipes
              </p>
              </Link>
              <Link to={"/Food"}>
              <p className="dropdown-item m-0" href="">
                Healthy Replacements
              </p>
              </Link>
              <Link to={"/Supps"}>
              <p className="dropdown-item m-0" href="">
                Supplement Recommendations
              </p>
              </Link>
            </div>
          </li>
          <li className="nav-item">
          <Link to={"/VIP"}>
            <p id="simple" className="nav-link m-0" href="">
              VIP
            </p>
            </Link>
          </li>
          <li className="nav-item">
          <Link to={"/profile"}>
            <p id="simple" className="nav-link m-0" href="">
              Profile
            </p>
            </Link>
          </li>
          <li className="nav-item">
          <Link to={"/admin"}>
            <p id="simple" className="nav-link m-0" href="">
              admin
            </p>
            </Link>
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
                type="password"
                placeholder="Password"
                aria-label="Search"
                onChange={props.onChange}
              />
              <button className="signIN btn" onClick={props.onClick} type="submit">
                Sign-In
              </button>
              
              <Link to={"/signup"}>
                <button className="signIN btn" type="submit">
                  Sign-Up
                </button>
              </Link>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Nav;
