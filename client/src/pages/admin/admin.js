import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import Products from "../../components/tableCreator/tableCreator";
import TableAPI from "../../utils/Table-API";


class Admin extends Component {
  saveUser = () => {
    // console.log(123);
    let newUser = {
      firstName: this.state.name,
      email: this.state.email,
      password: this.state.password,
    }
    TableAPI
      .saveUser(newUser)
      .then(results => {
        // console.log(results);
        localStorage.setItem("token", results.data.token);
        // return (
          // alert("Your account has been created! Welcome to SimplyFIT, your one stop shop for fitness plans")
          // window.location.href = '/profile'

      // )
            })
      .catch(err => console.log(err));

          }
  render() {
    return (
        <div>
        <Nav />
        <div>
        <h1 className="text-white"> Monday </h1>
        <Products display="Monday" />
        </div>
        <div>
        <h1 className="text-white"> Tuesday </h1>
        <Products />
        </div>
        <div>
        <h1 className="text-white"> Wednesday </h1>
        <Products />
        </div>
        <div>
        <h1 className="text-white"> Thursday </h1>
        <Products />
        </div>
        <div>
        <h1 className="text-white"> Friday </h1>
        <Products />
        </div>
        <div>
        <h1 className="text-white"> Saturday </h1>
        <Products />
        </div>
        <div>
        <h1 className="text-white"> Sunday </h1>
        <Products />
        <button type="submit" onClick={this.saveUser}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Admin;
