import React from "react";
// import "../../style.css"

const Carousel = () => (
  <div>
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

export default Carousel;
