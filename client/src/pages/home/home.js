import React, { Component } from "react";
import "./home.css";
import Nav from "../../components/Nav/Nav";
import Carousel from "../../components/Carousel/Carousel";
import API from "../../utils/API";
var cat;

class Home extends Component {
  state = {
    name: "",
    password: "",
    email: "",
    date: "",
    user: [],
  };
  componentDidMount() {
    if (cat) {
      console.log(987);
      API.getAuth(cat);

    }
  }
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleLogin = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      const user = {
        email: this.state.email,
        password: this.state.password,
      };
      API.getUser(user)
        .then(res => {
          localStorage.setItem("token", res.data.token);
          var cat = localStorage.getItem("token");
          console.log(123);
          console.log(cat);
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <Nav onChange={this.handleInputChange} onClick={this.handleLogin} />

        <div className="row">
          <div id="pics" className="col-md-8">
            <Carousel />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
