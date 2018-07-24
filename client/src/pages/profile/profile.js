import React, { Component } from "react";
import "./profile.css";
// import Nav from "../../components/Nav/Nav";
import NavSignedIn from "../../components/NavSignedIn/NavSignedIn";
import API from "../../utils/API";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, ReferenceLine,
  ReferenceDot, Tooltip, CartesianGrid, Legend, Brush, ErrorBar, AreaChart, Area,
  Label, LabelList } from 'recharts';
var display;
const data = [
  { name: 'Page A', uv: 1000, pv: 2400, amt: 2400, uvError: [75, 20] },
  { name: 'Page B', uv: 300, pv: 4567, amt: 2400, uvError: [90, 40] },
  { name: 'Page C', uv: 280, pv: 1398, amt: 2400, uvError: 40 },
  { name: 'Page D', uv: 200, pv: 9800, amt: 2400, uvError: 20 },
  { name: 'Page E', uv: 278, pv: null, amt: 2400, uvError: 28 },
  { name: 'Page F', uv: 189, pv: 4800, amt: 2400, uvError: [90, 20] },
  { name: 'Page G', uv: 189, pv: 4800, amt: 2400, uvError: [28, 40] },
  { name: 'Page H', uv: 189, pv: 4800, amt: 2400, uvError: 28 },
  { name: 'Page I', uv: 189, pv: 4800, amt: 2400, uvError: 28 },
  { name: 'Page J', uv: 189, pv: 4800, amt: 2400, uvError: [15, 60] },
];
class Profile extends Component {
  state = {}

  componentWillMount() {
    var cat = localStorage.getItem("token");
    // this.setState({display: "chicken"})
    if (cat !== "undefined") {
      API.getAuth(cat).then(res => {
        console.log(res.data);
        display= res.data.firstName;
        let user = {
          email: res.data.email,
          password: res.data.password,
        };
        console.log(user);
        this.setState({
          display,
          user
         })
        this.workoutData()
      })
      
    }
        else {
      // console.log('There were problems');
      // alert("sorry bout that, account problems")
      // this.props.history.push("/home")
    }
  }
 
  workoutData = () => {
    API.getUsers(this.state.user).then(results => {
      console.log(results);
      this.setState({results , truthy: true})
    })
  }
  SignOut = () => {
    localStorage.removeItem('token');
    console.log(678);
  };



  render() {   
    return (
      <div className="Prof">
        <NavSignedIn 
        name={this.state.display}
        signOut={this.SignOut}
        />

        <div>
            <h1 id="header3"> Workout Profile </h1>
            </div>
          <div className="row" id="div">
          <div className="col-md-6">
            <p id="script"> -Track your progress!</p>
            <div className="text-white border col-md-4"><strong>Stats</strong>
              <ul className="list-unstyled">
                <li>Package: Premium or VIP</li>
                <li>Height: height here</li>
                <li>Weight: weight here</li>
                <li>BMI: body mass index here</li>
                <button className="mt-2" type="submit">Update</button>
              </ul>
            </div>
            <p id="script"> -Stay on top of your goals!</p>
            <p id="script"> -Enter your informatio below.</p>
          </div>

          <div className="col-md-6">
            <h1 id="sidebox">analytics chart goes here...</h1>
            <LineChart
  width={400}
  height={400}
  data={data}
  margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
>
  <XAxis dataKey="name" />
  <Tooltip />
  <CartesianGrid stroke="#f5f5f5" />
  <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
  <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
</LineChart>
          </div>
        </div>

        <div className="row text-white" id="div">
          <div className="col-md-6">
            <p id="script">
              {" "}
              information input goes here, (height,weight etc..){" "}
            </p>
            <h5 id="script">Previous Workouts</h5>
            {this.state.truthy ? <div className="text-white">{this.state.results.data.workOuts.map((x, num) => (
            <ul>{num}
              <li>Date: {x.date}</li>
            <li>Day:{x.day}</li>
            <li>Trainer Type: {x.trainerType}</li>
            <li>Workout: {x.exercise.map((y,numb) => (
              <div>
                <ul> {numb}
              <li>Exercise: {y.name}</li>
              <li>Reps: {y.Reps}</li>
              <li>Sets: {y.Sets}</li>
              <li>Weight: {y.Weight}</li>

              </ul>
              </div>
            ))}</li>
            
            </ul>
  
          )
          
          )}</div> : "No data"}

          </div>
        </div>
        <div className="col-md-12">
          <h4 id="footer">
            Stop sitting on the sidelines! Become the version of you that you always wanted!
          </h4>
        </div>
      </div>
    );
  }
}

export default Profile;
