import React, { Component } from "react";
import "./food.css";
import Nav from "../../components/Nav/Nav";

class Food extends Component {
  render() {
    return (
      <div>
        <Nav />

        <div>
            <h1 id="headerFood"> Healthy Replacements </h1>
            </div>
          <div id="oats" className="row">
          <div className="col-md-4">
          <div class="card" >
                <img id="omlette" class="card-img-top" src="https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1515527235%2F1801w-steel-cut-oats-recipe.jpg%3Fitok%3DaLUShBxU&w=700&q=85" alt="Card image cap"></img>
                <div id="CB" class="card-body text-white">
                    <h5 className="foodT">Breakfast</h5>
                    <p className="foodP" >Instead of sugary cereal, try out outmeal with fruit instead.</p>
                </div>
                </div>
         
            
            </div>
            <div className="col-md-4">
            <div class="card" >
                <img id="omlette" class="card-img-top" src="https://images.meredith.com/content/dam/bhg/Images/2014/10/15/RU234616.jpg.rendition.largest.jpg" alt="Card image cap"></img>
                <div id="CB" class="card-body text-white">
                    <h5 className="foodT">Breakfast</h5>
                    <p className="foodP" >Instead of whole eggs, try out an eggwhite omlette instead.</p>
                </div>
                </div>
         
            
         </div>
         <div className="col-md-4">
         <div class="card" >
                <img id="omlette" class="card-img-top" src="https://img.buzzfeed.com/thumbnailer-prod-us-east-1/dd3ea4e4a8dd42ec97db43d518431bd6/BFV21177_ProteinSmoothies5Ways-FB1080SQ.jpg?output-quality=60&resize=1000:*" alt="Card image cap"></img>
                <div id="CB" class="card-body text-white">
                    <h5 className="foodT">Breakfast</h5>
                    <p className="foodP" >Instead of pancakes, try out a protien shake instead.</p>
                </div>
                </div>
         
            
         </div>
            


      </div>
      <div id="oats" className="row">
          <div className="col-md-4">
          <div class="card" >
                <img id="omlette" class="card-img-top" src="http://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2017/10/main/cl_digi_58.jpg?itok=C2WHk01D" alt="Card image cap"></img>
                <div id="CB" class="card-body text-white">
                    <h5 className="foodT">Lunch</h5>
                    <p className="foodP" >Instead of that quick fast food, go for a salad instead.</p>
                </div>
                </div>
         
            
            </div>
            <div className="col-md-4">
            <div class="card" >
                <img id="omlette" class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcXrMyMa_JW7lNlTRHpP4dYWxnWM2-GBdz5EgmPqeb3FBsXrUf" alt="Card image cap"></img>
                <div id="CB" class="card-body text-white">
                    <h5 className="foodT">Lunch</h5>
                    <p className="foodP" >Instead of that unhealthy deli sandwich, try an acai bowl!</p>
                </div>
                </div>
         
            
         </div>
         <div className="col-md-4">
         <div class="card" >
                <img id="omlette" class="card-img-top" src="data:image/jpeg;base64,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" alt="Card image cap"></img>
                <div id="CB" class="card-body text-white">
                    <h5 className="foodT">Lunch</h5>
                    <p className="foodP" >Instead of always eating out for lunch, try packing one instead!</p>
                </div>
                </div>
         
            
         </div>
            


      </div>

      <div id="oats" className="row">
          <div className="col-md-4">
          <div class="card" >
                <img id="omlette" class="card-img-top" src="http://www.adorndanceandart.com/uploads/5/2/9/6/52966941/s197082391318440730_p16_i5_w525.jpeg" alt="Card image cap"></img>
                <div id="CB" class="card-body text-white">
                    <h5 className="foodT">Dinner</h5>
                    <p className="foodP" >Try to avoid ordering out, grill up a few nights worth of food so you always have meals ready!</p>
                </div>
                </div>
         
            
            </div>
            <div className="col-md-4">
            <div class="card" >
                <img id="omlette" class="card-img-top" src="http://www.simplyscratch.com/wp-content/uploads/2016/02/DSC32072-620x414.jpg" alt="Card image cap"></img>
                <div id="CB" class="card-body text-white">
                    <h5 className="foodT">Dinner</h5>
                    <p className="foodP" >If you have to order out, order a healthy teryaki chicken bowl to stay on point!</p>
                </div>
                </div>
         
            
         </div>
         <div className="col-md-4">
         <div class="card" >
                <img id="omlette" class="card-img-top" src="http://images.meredith.com/dlv/images/recipe/ss_R149539.jpg" alt="Card image cap"></img>
                <div id="CB" class="card-body text-white">
                    <h5 className="foodT">Dinner</h5>
                    <p className="foodP" >Instead of always eating the same thing, grill up a steak and veggies!</p>
                </div>
                </div>
         
            
         </div>
            


      </div>


        </div>


    );
  }
}

export default Food;