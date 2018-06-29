import React, { Component } from "react";
import "./home.css";
import Nav from "../../components/Nav/Nav";
import Carousel from "../../components/Carousel/Carousel";
import API from '../../utils/API'



class Home extends Component {
  state = {
    name: "",
    password: "",
    email: "",
    date: "",
    user: []
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  
  handleLogin = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      const user= {email:this.state.email,
        password:this.state.password}
      API.getUser(user)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));

    }
  };





  render() {
    return (
      <div>
        <Nav
           onChange={this.handleInputChange}
           onSubmit={this.handleLogin}
           
        />
        <div  className="row">
        <div  id="pics" className="col-md-9">
     
        
        
        
        <Carousel />
        </div>
        </div>
      </div>
    );
  }
}

export default Home;
