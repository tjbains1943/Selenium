import React, { Component } from "react";
import "./daily.css";
import Nav from "../../components/Nav/Nav";

class Daily extends Component {
  render() {
    return (
      <div>
        <Nav />

        <div>
            <h1 id="header"> Daily Trainer </h1>
            </div>
          <div className="row" id="div">
          <div id="backgorund" className="col-md-6">
            <p id="script"> The daily trainer is the ideal program for the every day gym goer. If you've ever gotten tired of your routine or just flat out need more workout material then the daily trainer is where you need to be!</p> <p  id="script">Fully customized workouts for every day of the week. The workouts are updated every week and dont be discouraged if you find some of the workouts too hard.</p><p  id="script"> We have beginner, advanced and 30 minute express workouts for those who don't always have time to be at the gym for very long. </p>
            

            <h3 id="DT">-MENS DAILY TRAINER</h3>
            <h3 id="DT">-WOMENS DAILY TRAINER</h3>
            
            </div>
            
          <div className="col-md-6">
          <img src="http://anytime-deals.com/wp-content/uploads/2018/02/pexels-photo-414029.jpg" alt="First slide"></img>
          
          </div>

      </div>
      <div className="col-md-12">
          <h4 id="footer">"Become the version of you that you always wanted, stop sitting on the sidelines!"</h4>
          </div>

        </div>


    );
  }
}

export default Daily;