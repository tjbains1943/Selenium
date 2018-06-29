import React from "react";
import "./carousel.css"

const Carousel = () => (
  <div>
   {/* {/* <div class="style"> */}
        
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
            
              <img class="d-block w-100" src="http://versatilityfitness.com/wp-content/uploads/2016/05/crossfit-background_bw.jpg" alt="First slide"></img>
              
              
            
    
    <div  id="button" class="carousel-caption d-none d-md-block">
      <div id="first">
      <h5 id="first1">Welcome To SimplyFIT</h5>
      <h4 id="first2">"Everyday workouts for everyday people!"</h4>
      
      <button type="button" class="btn btn-black" data-toggle="modal" data-target="#exampleModalCenter">
    Join The Club/Become A Member!
  </button>
  </div>
    </div>
  
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="https://www.crossfitdaedalus.com/wp-content/uploads/2015/04/Gym-Background1.png" alt="Second slide"></img>
              <div class="carousel-caption d-none d-md-block">
            <h5 id="second">About:</h5>
            </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="https://i.pinimg.com/originals/76/89/c5/7689c5513084cd3ae199cec4f9b84af3.jpg" alt="Third slide"></img>
              <div class="carousel-caption d-none d-md-block">
                  <div id="third">
                  <h4 id="one">Customized Diet and Workout Plan</h4>  
                  <p id="text">-Custom training plan written just for you!</p>
                  <p id="text">-Direct contact with a fitness professional!</p>  
                  <p id="text">-Custom diet plan designed for your specific goals!</p>         
                  <p id="text">-Acess to dozens healthy recipes!</p>
                  </div>
                </div>
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
        </div> */}
      
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
  // </div>
);

export default Carousel;
