import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import Products from "../../components/tableCreator/tableCreator";


class Admin extends Component {
  
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
        </div>
      </div>
    );
  }
}

export default Admin;
