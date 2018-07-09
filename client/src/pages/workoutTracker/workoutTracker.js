import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import TableAPI from "../../utils/Table-API";


class WorkoutTracker extends Component {
    state = {};
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value,
      });
    };
  saveUser = () => {
      if(!this.state.trainerType) {
          alert("enter trainer type!")
          return;
      }
    console.log(123);
          TableAPI.getTable( 
        {"trainerType": this.state.trainerType},
    )
      .then(results => {
        console.log(results);
        this.setState({results: results})
            })
      // .catch(err => console.log(err));
          }
    
//   componentWillMount() {
//       this.saveUser()
//     }

//    componentDidUpdate(){
//      console.log(this.state.results.data[0].exercise[0].id);
//    }

  render() {
    if (this.state.results) {
        return (
            <div className="text-white">
            <Nav />
            <h5 className="text-white">
                Please select a Daily Trainer.
              </h5>
              <select name="trainerType" onChange={this.handleInputChange} required>
              <option style={{"display":"none"}} disabled selected value> -- select an option -- </option>
                <option value="Mens">Men's</option>
                <option value="Womens">Women's</option>
                <option value="30-min">30-min</option>
                <option value="Beginner">Beginner</option>
              </select>
              <button onClick={this.saveUser} className="btn btn-danger py-1 px-5 mt-3 d-block">Submit</button>
              {this.state.results.data.map((x, numb) => (
                    <div key={numb} className="text-white"> {x.day}

                      {x.exercise.map((y, num) => (
                        <div key={num}> {`Exercise: ${num}    Name: ${y.name}  Weight:${y.Weight}    Sets:${y.Sets}  Reps:${y.Reps} time between:${y.time}`}</div>
                
                      )
                    )
                      }
                      
                      </div>
                      
                  )
                )
                }
              <button onClick={this.saveUser} className="btn btn-block btn-white py-1 px-5 mt-3 d-block"><strong>Begin Workout!</strong></button>
            </div>
        );
      }
    return (
      <div className="text-white">
        <Nav />
        <h5 className="text-white">
        Please select a Daily Trainer.
          </h5>
          <select name="trainerType" onChange={this.handleInputChange} required>
          <option style={{"display":"none"}} disabled selected value> -- select an option -- </option>
            <option value="Mens">Men's</option>
            <option value="Womens">Women's</option>
            <option value="30-min">30-min</option>
            <option value="Beginner">Beginner</option>
          </select>
          <button onClick={this.saveUser} className="btn-danger py-1 px-5 mt-3 d-block">Submit</button>

        </div>


    );
  }
}

export default WorkoutTracker;