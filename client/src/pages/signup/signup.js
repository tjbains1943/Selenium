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

  componentWillMount() {
    var cat = localStorage.getItem("token");
    // this.setState({display: "chicken"})
    if (cat) {
          window.location.href = '/profile'
      }
        else {
      // console.log('There were problems');
      // alert("sorry bout that, account problems")
      // this.props.history.push("/home")
    }
  }
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
    API
      .saveUser(newUser)
      .then(results => {
        console.log(results);
        localStorage.setItem("token", results.data.token);
        // return (
          alert("Your account has been created! Welcome to SimplyFIT, your one stop shop for fitness plans")
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
