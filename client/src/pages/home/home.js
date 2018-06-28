import React, { Component } from "react";
import "./home.css";
import Nav from "../../components/Nav/Nav";
import Carousel from "../../components/Carousel/Carousel";

class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Carousel />
      </div>
    );
  }
}

export default Home;
