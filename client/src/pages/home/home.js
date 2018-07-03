import React, { Component } from "react";
import "./home.css";
import Nav from "../../components/Nav/Nav";
import Carousel from "../../components/Carousel/Carousel";
import API from "../../utils/API"
class Home extends Component {
  state = {
    name: "",
    password: "",
    email: "",
    date: "",
    user: [],
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleLogin = event => {
    event.preventDefault();
    console.log(123);
    if (this.state.email && this.state.password) {
      const user = {
        email: this.state.email,
        password: this.state.password,
      };
      console.log(789);
      API.getUser(user)
        .then(res => this.setState({ user: res.data }))
        .catch(err => console.log(err));
        console.log(789);
    }
  };

  render() {
    return (
      <div>
        {/* <div className="row">
          <div className="col-md-12">
        <header>
        <img id="banner" src="http://mefitness.com.au/wp-content/uploads/2017/12/gym-banner.jpg"></img>
        </header>
        </div>
        </div> */}
        <Nav onChange={this.handleInputChange} onClick={this.handleLogin} />

        <div className="row">
          <div id="pics" className="col-md-10">
            <Carousel />
          </div>
        </div>
        <div className="col-md-12">
          <h4 id="footer">"Become the version of you that you always wanted, stop sitting on the sidelines!"</h4>
          </div>
      </div>
    );
  }
}

export default Home;
