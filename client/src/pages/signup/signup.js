import React, { Component } from "react";
import "./signup.css";
import Nav from "../../components/Nav/Nav";
import PricingCard from "../../components/PricingCard/PricingCard";

class Signup extends Component {
  render() {
    return (
        <div>
      <div>
        <Nav />
        <PricingCard />
      </div>
      </div>
    );
  }
}

export default Signup;
