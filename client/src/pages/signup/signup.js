import React, { Component } from "react";
import "./signup.css";
import Nav from "../../components/Nav/Nav";
import PricingCard from "../../components/PricingCard/PricingCard";
import ModalSignUp from "../../components/Modal-signup/ModalSignUp"
import API from "../../utils/API"

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
  
  saveUser = () => {
    let newUser = {
      firstName: this.state.name,
      email: this.state.email,
      password: this.state.password,
    }
    console.log(newUser);
    API
      .saveUser(newUser)
      .then(results => {
        console.log(results);
        // return (
          window.location.href = '/profile'

      // )
            })
      .catch(err => console.log(err));

    
  }
  render() {
    return (
        <div>
      <div>
        <Nav onChange={this.handleInputChange}/>
        <PricingCard />
        <ModalSignUp onChange={this.handleInputChange} saveUser={this.saveUser}/>
      </div>
      </div>
    );
  }
}

export default Signup;
