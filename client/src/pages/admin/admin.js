import React, { Component } from "react";
import Products from "../../components/tableCreator/tableCreator";
// import TableAPI from "../../utils/Table-API";
import AdminNavBar from "../../components/adminNavBar/adminNavBar";


class Admin extends Component {
  state = {}
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
        <div>
          <h5 className="text-white">Please select the day Monday, for all workouts of the week.</h5>
        <input type="date" onChange={this.handleInputChange} name="weekStart"  placeholder="Week Start dd/mm/yy"></input>

        <h1 className="text-white"> Monday </h1>
        <Products weekStart={this.state.weekStart} day="Monday" />
        </div>
        <div>
        <h1 className="text-white"> Tuesday </h1>
        <Products weekStart={this.state.weekStart} day="Tuesday" />
        </div>
        <div>
        <h1 className="text-white"> Wednesday </h1>
        <Products weekStart={this.state.weekStart} day="Wednesday"/>
        </div>
        <div>
        <h1 className="text-white"> Thursday </h1>
        <Products weekStart={this.state.weekStart} day="Thursday"/>
        </div>
        <div>
        <h1 className="text-white"> Friday </h1>
        <Products weekStart={this.state.weekStart} day="Friday"/>
        </div>
        <div>
        <h1 className="text-white"> Saturday </h1>
        <Products weekStart={this.state.weekStart} day="Saturday"/>
        </div>
        <div>
        <h1 className="text-white"> Sunday </h1>
        <Products weekStart={this.state.weekStart} day="Sunday"/>
        </div>
      </div>
    );
  }
}

export default Admin;
