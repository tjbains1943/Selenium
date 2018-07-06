import React, { Component } from "react";
// import Products from "../../components/tableCreator/tableCreator";
// import TableAPI from "../../utils/Table-API";
import AdminNavBar from "../../components/adminNavBar/adminNavBar";


class AdminView extends Component {
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
        <AdminNavBar NavBar />
        <div>
          <h5 className="text-white">Please select the day Monday, to View/Update/Remove all workouts of that week.</h5>
        <input type="date" onChange={this.handleInputChange} name="weekStart"  placeholder="Week Start dd/mm/yy"></input>
        <button type="submit" className="mt-3 btn btn-block">Submit</button>
        </div>
      </div>
    );
  }
}

export default AdminView   ;
