import React, { Component } from "react";
import "./selftrainer.css";
import Nav from "../../components/Nav/Nav";
import SelfTrainerCarousel from "../../components/selfTrainerCarousel/selfTrainerCarousel";

class selfTrainer extends Component {
  render() {
    return (
      <div>
          {/* <div className="row">
          <div className="col-md-12">
        <header>
        <img id="banner" src="https://www.focusmaster.com/wp-content/uploads/2014/03/Focusmaster_Banners_05.jpg"></img>
        </header>
        </div>
        </div> */}
        
        <Nav />

        <SelfTrainerCarousel />

        </div>


    );
  }
}

export default selfTrainer;