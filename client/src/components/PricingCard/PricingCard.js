import React from "react";
// import "../../style.css"

const PricingCard = () => (
  <div>
      
   <div class="demo">
    <div class="container">
    <div>
            <h1 id="header">Membership Plans</h1>
            <p id="script2">-For any membership questions please contact us at:</p>
            <p id="script2">simplyFIT@yahoo.com</p>
            </div>
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

export default PricingCard;
