import React, { Component } from "react";
import "./profile.css";
// import Nav from "../../components/Nav/Nav";
import NavSignedIn from "../../components/NavSignedIn/NavSignedIn";
import API from "../../utils/API";
class Profile extends Component {
  componentDidMount() {}
  render() {
    var world = "tj";
    var cat = localStorage.getItem("token");
  
    console.log(cat);
      if (cat !== "undefined") {
    API.getAuth(cat).then(res => {
      console.log(res);
    })
  }
  else {
    // console.log('There were problems');
    // alert("sorry bout that, account problems")
    // this.props.history.push("/home")
  }
    return (
      <div>
        <NavSignedIn name={world} />

        <div>
          <h1 id="header"> Workout Profile </h1>
        </div>
        <div className="row" id="div">
          <div className="col-md-6">
            <p id="script"> -Track your progress!</p>
            <p id="script"> -Stay on top of your goals!</p>
            <p id="script"> -Enter your informatio below.</p>
          </div>

          <div className="col-md-6">
            <h1 id="sidebox">analytics chart goes here...</h1>
          </div>
        </div>

        <div className="row" id="div">
          <div className="col-md-6">
            <p id="script">
              {" "}
              information input goes here, (height,weight etc..){" "}
            </p>
          </div>
        </div>
        <div className="col-md-12">
          <h4 id="footer">
            "Become the version of you that you always wanted, stop sitting on
            the sidelines!"
          </h4>
        </div>
      </div>
    );
  }
}

export default Profile;
