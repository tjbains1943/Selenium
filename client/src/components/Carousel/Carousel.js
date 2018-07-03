import React from "react";
import "./carousel.css"
import { Link } from "react-router-dom";

const Carousel = () => (
  <div>
   {/* {/* <div class="style"> */}
        
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
            
              <img className="d-block w-100" src="        https://i2.wp.com/newyoufitness.ie/wp-content/uploads/2016/06/Male-Fitness-Models-Background-Image1.jpg" alt="First slide"></img>
              
              
            
    
    <div  id="button" className="carousel-caption d-xs-block">
        <div className="row row-centered">
          <h5 className="col-xs-12 col-centered" id="first1">Welcome To SimplyFIT</h5>
        </div>
        <div className="row">
          <h4 className="col-xs-12" id="first2">"Everyday workouts for everyday people!"</h4>
        </div>


        <div className="row">
          <div id="join" className="col-xs-12">
              <Link to={"/signup"}>       
                <button  type="button" className="btn btn-black">
                    Join The Club/Become A Member!
                </button>
              </Link>
          </div>
        </div>
  
  </div>
 
    
  
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="http://www.mftsport.com/wp-content/uploads/2016/11/trx_functionaltrainingtools_pdp_miniband-min.jpg" alt="Second slide"></img>
              <div className="carousel-caption d-xs-block">
              <div className="row" id="second">
              <div className="col-xs-12">
                    <h5 >About:</h5>
                    <p>SimplyFIT is designed for you to reach your fitness goals that youve always wanted to achieve. Its a centralized hub for everything fitness!</p>
                    <p>We offer multiple options, our daily trainer as well as our self trainer. All of which were hand crafted by our professional fitness staff.</p>
                    <p>Included within your memberships is access to videos of each excerise as well as dietary guidelines and supplement recommendations.</p>
            </div>
            </div>
            </div>
            </div>


            <div className="carousel-item">
              <img className="d-block w-100" src="https://www.crossfitdaedalus.com/wp-content/uploads/2015/04/Gym-Background1.png" alt="Second slide"></img>
              <div className="carousel-caption d-xs-block">
              <div className="row">
              <div id="second2" className="col-xs-12">
            <h5>About:</h5>
            <p>SimplyFIT is designed for you reach your fitness goals that youve always wanted to achieve. Its a centralized hub for everything fitness! From our daily trainer where you can get new workouts every week to our dietary guidelines, we are here to help you reach your goals. Our professional fitness staff hand designs all of the workouts and they also work around the clock to design your custom VIP plan if thats the route you choose to go. You want fitness, come to SimplyFIT and lets get started!  </p>
            </div>
            </div>
            </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="https://i.pinimg.com/originals/76/89/c5/7689c5513084cd3ae199cec4f9b84af3.jpg" alt="Third slide"></img>
              <div className="carousel-caption d-xs-block">
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
