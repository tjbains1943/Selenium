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
      <Link to={"/signup"}>

      <button type="button" className="btn btn-black">
    Join The Club/Become A Member!
  </button>
  </Link>

  </div>
    </div>
  
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://www.crossfitdaedalus.com/wp-content/uploads/2015/04/Gym-Background1.png" alt="Second slide"></img>
              <div className="carousel-caption d-none d-md-block">
              <div className="row">
              <div id="second" className="col-md-12">
            <h5>About:</h5>
            <p>SimplyFIT is designed for you reach your fitness goals that youve always wanted to achieve. Its a centralized hub for everything fitness! From our daily trainer where you can get new workouts every week to our dietary guidelines, we are here to help you reach your goals. Our professional fitness staff hand designs all of the workouts and they also work around the clock to design your custom VIP plan if thats the route you choose to go. You want fitness, come to SimplyFIT and lets get started!  </p>
            </div>
            </div>
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
        </div> 
     
  
     </div>
  // </div>
);

export default Carousel;
