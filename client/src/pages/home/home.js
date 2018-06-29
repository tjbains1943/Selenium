import React, { Component } from "react";
import "./home.css";
import Nav from "../../components/Nav/Nav";
import Carousel from "../../components/Carousel/Carousel";

class Home extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div  class="row">
        <div  id="pics" class="col-md-9">
        <Carousel />
        </div>
        </div>
      </div>
    );
  }
}

export default Home;
