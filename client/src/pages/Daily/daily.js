import React, { Component } from "react";
import "./daily.css";
import Nav from "../../components/Nav/Nav";
import { Link } from "react-router-dom";


class Daily extends Component {
  state={}
  
  render() {
    return (
      <div className="daily">
        <Nav />
        <div id="backdrop">
        <div>
            <h1 id="headerD"> Daily Trainer </h1>
            </div>
          <div className="row" id="div">
          <div id="backgorund" className="col-md-6">
            <p id="script">-The daily trainer is the ideal program for the every day gym goer. If you've ever gotten tired of your routine or just flat out need more workout material then the daily trainer is where you need to be!</p> <p  id="script">-Fully customized workouts for every day of the week. The workouts are updated every week and dont be discouraged if you find some of the workouts too hard.</p><p  id="script">-We have beginner, advanced and 30 minute express workouts for those who don't always have time to be at the gym for very long. </p>
            
            </div>
            
          <div className="col-md-6">
          <img id="dailypic" src="http://anytime-deals.com/wp-content/uploads/2018/02/pexels-photo-414029.jpg" alt="First slide"></img>
          
          </div>

      </div>
      <div className="row">
      <div className="col-md-6">
      <Link to={"/DailyTrainer"}>
      <h3 id="DT">-MENS DAILY TRAINER</h3>
      </Link>
      <Link to={"/DailyTrainer"}>
      <h3 id="DT">-WOMENS DAILY TRAINER</h3>
      </Link>
              {/* <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className="text-white">Exercise</th>
                    <th className="text-white">Weight</th>
                    <th className="text-white">Reps</th>
                    <th className="text-white">Sets</th>
                    <th className="text-white">Time between Sets(optional)</th>

                  </tr>
                </thead>
      
                <tbody className="text-white"> */}

                  {/* {this.state.results.data[0].exercise[0].id} */}
                  

                {/* </tbody>
      
              </table> */}
              </div>
          
            {/* <table className="table table-bordered">
                <thead>
                  <tr>
                    <th className="text-white">Exercise</th>
                    <th className="text-white">Weight</th>
                    <th className="text-white">Reps</th>
                    <th className="text-white">Sets</th>
                    <th className="text-white">Time between Sets(optional)</th>

                  </tr>
                </thead>
      
                <tbody className="text-white"> */}

                  {/* {this.state.results.data[0].exercise[0].id} */}
                  
      
                {/* </tbody>
      
              </table> */}
            
      
      </div>
      <div className="col-md-12">
          <h4 id="footer">Stop sitting on the sidelines! Become the version of you that you always wanted!</h4>
          </div>

          </div>

        </div>


    );
  }
}

export default Daily;