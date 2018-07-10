import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import TableAPI from "../../utils/Table-API";
import RepsButton from "../../components/repsButton/repsButton";

class WorkoutTracker extends Component {
  state = {
    startWorkout: false,
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  saveUser = () => {
    if (!this.state.trainerType) {
      alert("Please enter trainer type!");
      return;
    }
    console.log(123);
    TableAPI.getTable({ trainerType: this.state.trainerType })
      .then(results => {
        console.log(results);
        this.setState({ results: results });
      })
      .catch(err => console.log(err));
  };

  beginWorkout = () => {
    console.log(123);
    this.setState({ startWorkout: true });
  };

  endWorkout = () => {
    console.log(123);
    this.setState({ startWorkout: false });
  };
  logWorkout = () => {
    console.log(68);
  };

  repClicks = () => {
      console.log(69);
  }
  //   componentWillMount() {
  //       this.saveUser()
  //     }

  //    componentDidUpdate(){
  //      console.log(this.state.results.data[0].exercise[0].id);
  //    }

  render() {
    if (this.state.startWorkout === true) {
      return (
        <div className="text-white">
          <Nav />
          <h1>Workout Tracker</h1>
          <h5 className="text-white">
            {this.state.results.data.map((x, numb) => (
              <div key={numb} className="text-white">
                <div className="my-2">{x.day} </div>
                {x.exercise.map((y, num) => (
                  <div className="bg-primary my-2" key={num}>
                    {`Exercise: ${num}    Name: ${y.name}  Weight:${y.Weight}`}
                    <div className="bg-secondary">
                    
    {/* change 5 to y.Sets */}
                      {Array.apply(0, Array(parseInt(y.Sets, 10))).map(function(x, i) {
                        return <RepsButton num={y.Reps} key={i}> {y.Reps}</RepsButton>;
                      })}

                      <p className="float-right">{`Sets:${y.Sets} Reps:${y.Reps}`}
                      {`time between:${y.time}`} </p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </h5>
          <button
            onClick={this.endWorkout}
            className="btn-danger py-1 px-5 mt-3 d-block"
          >
            Return to Daily Trainer's Page
          </button>
          <button
            onClick={this.logWorkout}
            className="btn-success py-1 px-5 mt-3 d-block"
          >
            Log Workout
          </button>
        </div>
      );
    } else if (this.state.results) {
      return (
        <div className="text-white">
          <Nav />
          <h5 className="text-white">Please select a Daily Trainer.</h5>
          <select name="trainerType" onChange={this.handleInputChange} required>
            <option style={{ display: "none" }} disabled selected value>
              {" "}
              -- select an option --{" "}
            </option>
            <option value="Mens">Men's</option>
            <option value="Womens">Women's</option>
            <option value="30-min">30-min</option>
            <option value="Beginner">Beginner</option>
          </select>
          <button
            onClick={this.saveUser}
            className="btn btn-danger py-1 px-5 mt-3 d-block"
          >
            Begin Workout
          </button>

          {this.state.results.data.map((x, numb) => (
            <div key={numb} className="text-white">
              {" "}
              {x.day}
              {x.exercise.map((y, num) => (
                <div key={num}>
                  {" "}
                  {`Exercise: ${num}    Name: ${y.name}  Weight:${
                    y.Weight
                  }    Sets:${y.Sets}  Reps:${y.Reps} time between:${y.time}`}
                </div>
              ))}
            </div>
          ))}

            <div className="row">
          <div className="col-md-6">
          <button
            onClick={this.beginWorkout}
            className="btn btn-block btn-danger py-1 px-5 mt-3 d-block"
          >
            <strong>Begin Workout!</strong>
          </button>
          </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="text-white">
          <Nav />
          <h5 className="text-white">Please select a Daily Trainer.</h5>
          <select name="trainerType" onChange={this.handleInputChange} required>
            <option style={{ display: "none" }} disabled selected value>
              {" "}
              -- select an option --{" "}
            </option>
            <option value="Mens">Men's</option>
            <option value="Womens">Women's</option>
            <option value="30-min">30-min</option>
            <option value="Beginner">Beginner</option>
          </select>
          <button
            onClick={this.saveUser}
            className="btn-danger py-1 px-5 mt-3 d-block"
          >
            Submit
          </button>
        </div>
      );
    }
  }
}

export default WorkoutTracker;
