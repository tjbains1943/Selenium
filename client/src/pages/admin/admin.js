import React, { Component } from "react";
import Products from "../../components/tableCreator/tableCreator";
// import TableAPI from "../../utils/Table-API";
import AdminNavBar from "../../components/adminNavBar/adminNavBar";

class Admin extends Component {
  state = {};
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div>
        <AdminNavBar />
        <form>
        <div>
          <h5 className="text-white">
            Please select the Daily Trainer to be created.
          </h5>
          <select name="trainerType" onChange={this.handleInputChange} required>
          <option style={{"display":"none"}} disabled selected value> -- select an option -- </option>
            <option value="Mens">Men's</option>
            <option value="Womens">Women's</option>
            <option value="30-min">30-min</option>
            <option value="Beginner">Beginner</option>
          </select>
          <h5 className="text-white">
            Please select the day Monday, for all workouts of the week.
          </h5>
          <input
            type="date"
            onChange={this.handleInputChange}
            name="weekStart"
            placeholder="Week Start dd/mm/yy"
          />


          <div className="row">
          <div className="col-md-9">
          <h1 className="text-white"> Monday </h1>
          <Products weekStart={this.state.weekStart} trainerType={this.state.trainerType} day="Monday" />
          </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9">
        <div>
          <h1 className="text-white"> Tuesday </h1>
          <Products weekStart={this.state.weekStart} day="Tuesday" />
        </div>
        </div>
          </div>

          <div className="row">
          <div className="col-md-9">
        <div>
          <h1 className="text-white"> Wednesday </h1>
          <Products weekStart={this.state.weekStart} day="Wednesday" />
        </div>
        </div>
        </div>

        <div className="row">
          <div className="col-md-9">
        <div>
          <h1 className="text-white"> Thursday </h1>
          <Products weekStart={this.state.weekStart} day="Thursday" />
        </div>
        </div>
        </div>

        <div className="row">
          <div className="col-md-9">
        <div>
          <h1 className="text-white"> Friday </h1>
          <Products weekStart={this.state.weekStart} day="Friday" />
        </div>
        </div>
        </div>


          <div className="row">
          <div className="col-md-9">
        <div>
          <h1 className="text-white"> Saturday </h1>
          <Products weekStart={this.state.weekStart} day="Saturday" />
        </div>
        </div>
        </div>

       <div className="row">
        <div className="col-md-9">
        <div>
          <h1 className="text-white"> Sunday </h1>
          <Products weekStart={this.state.weekStart} day="Sunday" />
        </div>
        </div>
        </div>
        </form>
      </div>
    );
  }
}

export default Admin;
