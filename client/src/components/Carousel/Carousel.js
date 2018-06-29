import React from "react";
// import "../../style.css"

const Carousel = () => (
  <div>
   <div className="backdrop">
        
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100 h-75" src="https://homegymr.com/wp-content/uploads/2016/08/Deadlifts-vs-Squats-Cover-862x525.jpg" alt="First slide"></img>
            
    
    <div className="carousel-caption d-none d-md-block">
      <h5>picture</h5>
      <p>...</p>
    </div>
  
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 h-75" src="https://i2.wp.com/newyoufitness.ie/wp-content/uploads/2016/06/Male-Fitness-Models-Background-Image1.jpg" alt="Second slide"></img>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 h-75" src="https://i.pinimg.com/originals/76/89/c5/7689c5513084cd3ae199cec4f9b84af3.jpg" alt="Third slide"></img>
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
  </div>
);

export default Carousel;
