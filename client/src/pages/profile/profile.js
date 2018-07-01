import React, { Component } from "react";
import "./profile.css";
import Nav from "../../components/Nav/Nav";

class Profile extends Component {
  render() {
    return (
      <div>
        <Nav />

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
            <p id="script"> information input goes here, (height,weight etc..) </p>
        
            </div>

      </div>
      <div className="col-md-12">
          <h4 id="footer">"Become the version of you that you always wanted, stop sitting on the sidelines!"</h4>
          </div>

    </div>


    );
  }
}

export default Profile;