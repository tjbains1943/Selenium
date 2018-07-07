import React, { Component } from "react";
import "./selftrainer.css";
import Nav from "../../components/Nav/Nav";
// import SelfTrainerCarousel from "../../components/selfTrainerCarousel/selfTrainerCarousel";

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

        <div>
            <h1 id="header1"> Self Trainer Programs </h1>
            </div>
          <div className="row" id="div">
          <div id="backgorund" className="col-md-6">
            <p id="script">-The self trainer is the ideal program for someone with a specific plan in mind.</p> <p  id="script">-These trainers are specific to a certain style of workout as well as the particular goals they are designed for.</p><p  id="script">-We have a bodybuilding, powerlifting as well as a circuit/HIIT trainer. Each customized to reach goals in that specific training style. </p>
            

            <h3 id="DTT">-Bodybuilding Trainer <button id="purchase"className="btn btn-outline- ml-4" type="submit">
                  Purchase
                </button></h3>
                
            
            <h3 id="DTT">-Powerlifting Trainer <button id="purchase" className="btn btn-outline-grey ml-4" type="submit">
                  Purchase
                </button></h3>
            <h3 id="DTT">-Circuit/HITT Trainer <button id="purchase" className="btn btn-outline-grey ml-4" type="submit">
                  Purchase
                </button></h3>

            
            </div>
            
          <div className="col-md-6">
          <img src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&h=350" alt="First slide"></img>
          
          </div>

      </div>
      <div className="col-md-12">
          <h4 id="footer">"Become the version of you that you always wanted, stop sitting on the sidelines!"</h4>
          </div>


        </div>


    );
  }
}

export default selfTrainer;