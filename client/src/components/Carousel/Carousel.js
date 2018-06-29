import React from "react";
import "./carousel.css"
import { Link } from "react-router-dom";

const Carousel = () => (
  <div>
   {/* {/* <div class="style"> */}
        
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
            
              <img className="d-block w-100" src="http://versatilityfitness.com/wp-content/uploads/2016/05/crossfit-background_bw.jpg" alt="First slide"></img>
              
              
            
    
    <div  id="button" className="carousel-caption d-none d-md-block">
      <div id="first">
      <h5 id="first1">Welcome To SimplyFIT</h5>
      <h4 id="first2">"Everyday workouts for everyday people!"</h4>
      
      <button type="button" className="btn btn-black" data-toggle="modal" data-target="#exampleModalCenter">
    Join The Club/Become A Member!
  </button>
  </div>
    </div>
  
            </div>
<<<<<<< HEAD
            <div class="carousel-item">
              <img class="d-block w-100" src="https://www.crossfitdaedalus.com/wp-content/uploads/2015/04/Gym-Background1.png" alt="Second slide"></img>
              <div class="carousel-caption d-none d-md-block">
              <div className="second">
            <h5>About:</h5>
            <p>SimplyFIT is your designed for you reach your fitness goals that youve always wanted to achieve. Its a centralized hub for everything fitness!</p>
            </div>
=======
            <div className="carousel-item">
              <img className="d-block w-100" src="https://www.crossfitdaedalus.com/wp-content/uploads/2015/04/Gym-Background1.png" alt="Second slide"></img>
              <div className="carousel-caption d-none d-md-block">
            <h5 id="second">About:</h5>
            <p>SimplyFIT is your designed for you reach your fitness goals that youve always wanted to achieve. Its a centralized hub for everything fitness!  </p>
>>>>>>> 86cfdcc1439920e0b9c69b0293931cbb16efa765
            </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://i.pinimg.com/originals/76/89/c5/7689c5513084cd3ae199cec4f9b84af3.jpg" alt="Third slide"></img>
              <div className="carousel-caption d-none d-md-block">
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
          <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div> */}
      
  <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalCenterTitle">Modal title</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
        <form>
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputPassword1">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputPassword1">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password"></input>
    </div>
    <button type="submit" className="btn btn-primary">Sign Up</button>
  </form>
        </div>
      </div>
    </div>
  </div>
  
     </div>
  // </div>
);

export default Carousel;
