import React, { Component } from "react";
import "./signup.css";
import Nav from "../../components/Nav/Nav";
import PricingCard from "../../components/PricingCard/PricingCard";
import ModalSignUp from "../../components/Modal-signup/ModalSignUp"

class Signup extends Component {
  state = {
    name: "",
    password: "",
    email: "",
    date: ""
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  

  render() {
    return (
        <div>
      <div>
        <Nav onChange={this.handleInputChange}/>
        <PricingCard />
        <ModalSignUp />
      </div>
      </div>
    );
  }
}

export default Signup;
