import React, { Component } from "react";
import "./home.css";


class Home extends Component {
  render() {
    return (
      <div>
       
          
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">SimplyFit <span className="sr-only">(current)</span></a>
      </li>

      {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Daily Trainer
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Advanced</a>
          <a className="dropdown-item" href="#">30min Express</a>
          <a className="dropdown-item" href="#">Beginner</a>
        </div>
      </li> */}
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Programs
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <a className="dropdown-item" href="#">Daily Trainer</a>
          <a className="dropdown-item" href="#">Body Building</a>
          <a className="dropdown-item" href="#">Power Lifitng</a>
          <a className="dropdown-item" href="#">Circuit/HIIT</a>
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Diet
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">VIP</a>
      </li>
      <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Sign-In/Sign-Up</button>
    </form>
    </ul>
  </div>
</nav>

      <div className="backdrop">
        
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100 h-75" src="https://homegymr.com/wp-content/uploads/2016/08/Deadlifts-vs-Squats-Cover-862x525.jpg" alt="First slide"></img>
          
  
  <div class="carousel-caption d-none d-md-block">
    <h5>picture</h5>
    <p>...</p>
  </div>

          </div>
          <div class="carousel-item">
            <img class="d-block w-100 h-75" src="https://i2.wp.com/newyoufitness.ie/wp-content/uploads/2016/06/Male-Fitness-Models-Background-Image1.jpg" alt="Second slide"></img>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 h-75" src="https://i.pinimg.com/originals/76/89/c5/7689c5513084cd3ae199cec4f9b84af3.jpg" alt="Third slide"></img>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
  
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Join The Club/Become A Member!
</button>

<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>
  <button type="submit" class="btn btn-primary">Sign Up</button>
</form>
      </div>
    </div>
  </div>
</div>

   </div>
        
        
      </div>
    );
  }
}

export default Home;