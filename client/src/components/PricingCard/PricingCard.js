import React from "react";
// import "../../style.css"

const PricingCard = () => (
  <div>
   <div className="demo">
    <div className="container">
        <div className="row">
            <div className="col-md-4 col-sm-6">
                <div className="pricingTable">
                    <h3 className="title">Free</h3>
                    <div className="price-value">0$
                        <span className="month">30 Day Trial</span>
                    </div>
                    <div className="pricing-content">
                        <ul>
                        	<li></li>
							<li>-Access to Entry Level Workouts</li>
                            {/* <li>Access to Exercise Library</li>
                            <li>Access to Recipes</li>  
                            <li> And 1 custom training and diet plan edited every 4 weeks</li> */}
                          
                           
                        </ul>
                        <a href="" className="pricingTable-signup">Enter</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-6">
                <div className="pricingTable">
                    <h3 className="title">Daily Trainer Membership</h3>
                    <div className="price-value">$9.99
                        <span className="month">Per Month</span>
                    </div>
                    <div className="pricing-content">
                        <ul>
                            <li>Access to Daily Trainer</li>
                            <li>Access to Exercise Library</li>
                            <li>Access to Recipes</li>  
                            <li></li>  
                            <li></li>                
                        </ul>
                        <a href="#" className="pricingTable-signup">Sign Up</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-6">
                <div className="pricingTable">
                    <h3 className="title">VIP Training</h3>
                    <div className="price-value">$129/ 3-Month <br></br> $219/ 6-Month <br></br> $329/ 9-Month
                        <span className="month">Flat Fee</span>
                    </div>
                    <div className="pricing-content">
                        <ul>              
                        	<li>Access to Daily Trainer</li>
                            <li>Access to Exercise Library</li>
                            <li>Access to Recipes</li>  
                            <li>Custom training and diet plan edited every 2 weeks</li>
                        </ul>
                        <a href="#" className="pricingTable-signup">Order Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  </div>
);

export default PricingCard;
