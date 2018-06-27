import React, { Component } from "react";
import "./signup.css";


class Signup extends Component {
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
    </ul>
  </div>
</nav>

        <div class="demo">
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-sm-6">
                <div class="pricingTable">
                    <h3 class="title">Free</h3>
                    <div class="price-value">0$
                        <span class="month">30 Day Trial</span>
                    </div>
                    <div class="pricing-content">
                        <ul>
                        	<li></li>
							<li>-Access to Entry Level Workouts</li>
                            {/* <li>Access to Exercise Library</li>
                            <li>Access to Recipes</li>  
                            <li> And 1 custom training and diet plan edited every 4 weeks</li> */}
                          
                           
                        </ul>
                        <a href="#" class="pricingTable-signup">Enter</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="pricingTable">
                    <h3 class="title">Daily Trainer Membership</h3>
                    <div class="price-value">$9.99
                        <span class="month">Per Month</span>
                    </div>
                    <div class="pricing-content">
                        <ul>
                            <li>Access to Daily Trainer</li>
                            <li>Access to Exercise Library</li>
                            <li>Access to Recipes</li>  
                            <li></li>  
                            <li></li>                
                        </ul>
                        <a href="#" class="pricingTable-signup">Sign Up</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-sm-6">
                <div class="pricingTable">
                    <h3 class="title">VIP Training</h3>
                    <div class="price-value">$129/ 3-Month <br></br> $219/ 6-Month <br></br> $329/ 9-Month
                        <span class="month">Flat Fee</span>
                    </div>
                    <div class="pricing-content">
                        <ul>              
                        	<li>Access to Daily Trainer</li>
                            <li>Access to Exercise Library</li>
                            <li>Access to Recipes</li>  
                            <li>Custom training and diet plan edited every 2 weeks</li>
                        </ul>
                        <a href="#" class="pricingTable-signup">Order Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


      </div>
    );
  }
}

export default Signup;