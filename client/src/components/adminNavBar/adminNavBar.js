import React from "react";
import "./adminNavBar.css";
import { Link } from "react-router-dom";

const AdminNavBar = props => (
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
          <li className="nav-item">
          <Link to={"/admin"}>
            <p id="simple" className="nav-link m-0">
            Create Workout
            </p>
            </Link>
          </li>
          <li>
          <Link to={"/admin/vur"}>
            <p id="simple" className="nav-link m-0" >
            View/Update/Remove Workout
            </p>
            </Link>
            </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default AdminNavBar;
