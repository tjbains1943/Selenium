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

  componentWillMount() {
    var cat = localStorage.getItem("token");
    // this.setState({display: "chicken"})
    console.log(cat);
    if (cat) {
          window.location.href = '/profile'
      }
        else {
      // console.log('There were problems');
      // alert("sorry bout that, account problems")
      // this.props.history.push("/home")
    }
  }
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
          if(res.data.userStatus !== "User Not Found") {
          localStorage.setItem("token", res.data.token);
          var cat = localStorage.getItem("token");
          console.log(res.data);
          console.log(cat);
          window.location.href = '/profile'
          }
          else {
            console.log("User Not Found");
          }
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
