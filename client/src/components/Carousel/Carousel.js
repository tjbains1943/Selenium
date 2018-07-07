import React from "react";
import "./carousel.css"
import { Link } from "react-router-dom";

const Carousel = () => (
  <div>
   {/* {/* <div class="style"> */}
        
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
            
              <img id="homepic1" className="d-block w-100" src="https://az616578.vo.msecnd.net/files/2016/08/15/636068214478452350268408799_160_people_working_out.jpg" alt="First slide"></img>
              
              
            
    
    <div  id="button" className="carousel-caption d-xs-block">
        <div className="row row-centered">
          <h5 className="col-xs-12 col-centered" id="first1">Welcome To SimplyFIT</h5>
        </div>
        <div className="row">
          <h4 className="col-xs-12" id="first2">Everyday workouts for everyday people!</h4>
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
              <img id="homepic2" className="d-block w-100" alt="pic" src="http://www.mftsport.com/wp-content/uploads/2016/11/trx_functionaltrainingtools_pdp_miniband-min.jpg"></img>
              <div className="carousel-caption d-xs-block">
              <div className="row">
              <div id="second2" className="col-xs-12">
            <h5 id="about">About:</h5>
            <p id="about1">SimplyFIT is designed for you reach your fitness goals that you have always wanted to achieve. Its a centralized hub for everything fitness!</p>
            <h5 id="about">Features:</h5>
            <p id="about1">-Daily Trainer</p>
            <p id="about1">-Self Trainer</p>
            <p id="about1">-Exercise Library</p>
            <p id="about1">-Dietary Guide</p>
            <p id="about1">-Supplement Recommendations</p>
            <p id="about1">-Member Profile</p>
            <p id="about1">-Progress Tracker</p>



            </div>
            </div>
            </div>
            </div>
            <div className="carousel-item">
              <img id="homepic2" className="d-block w-100" src="https://i.pinimg.com/originals/76/89/c5/7689c5513084cd3ae199cec4f9b84af3.jpg" alt="Third slide"></img>
              <div className="carousel-caption d-xs-block">
                  <div id="third">
                  <h4 id="one">VIP Customized Diet and Workout Plan</h4>  
                  <p id="text">-Custom training plan written just for you!</p>
                  <p id="text">-Direct contact with a fitness professional!</p>  
                  <p id="text">-Custom diet plan designed for your specific goals!</p>         
                  <p id="text">-Acess to dozens healthy recipes and our exercise library!</p>
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
