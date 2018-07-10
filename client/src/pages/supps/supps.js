import React, { Component } from "react";
import "./supps.css";
import Nav from "../../components/Nav/Nav";

class Supps extends Component {
  render() {
    return (
      <div>
        <Nav />

        <div>
            <h1 id="headerFood">Supplement Recommendations</h1>
            </div>
          <div id="oats" className="row">
          <div className="col-md-3">
          <div class="card" >
                <img id="omlette" class="card-img-top" src="data:image/jpeg;base64,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" alt="Card cap"></img>
                <div id="CB" class="card-body text-white">
                    <h5 className="foodT">Protein Powder</h5>
                    <p className="foodP" >Great product if you arent eating enough protein.</p>
                </div>
                </div>
         
            
            </div>
            <div className="col-md-3">
            <div class="card" >
                <img id="omlette" class="card-img-top" src="data:image/jpeg;base64,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" alt="Card  cap"></img>
                <div id="CB" class="card-body text-white">
                    <h5 className="foodT">Creatine</h5>
                    <p className="foodP" >Excellent supplement for building muscle.</p>
                </div>
                </div>
         
            
         </div>
         <div className="col-md-3">
         <div class="card" >
                <img id="omlette" class="card-img-top" src="https://s3.images-iherb.com/ndm/ndm01328/l/5.jpg" alt="Card cap"></img>
                <div id="CB" class="card-body text-white">
                    <h5 className="foodT">Fish Oil</h5>
                    <p className="foodP" >Fatty acids that help with digestion.</p>
                </div>
         
            
         </div>
         <div className="col-md-3">
                </div>
         <div class="card" >
                <img id="omlette" class="card-img-top" src="https://s3.images-iherb.com/sre/sre01027/l/3.jpg" alt="Card cap"></img>
                <div id="CB" class="card-body text-white">
                    <h5 className="foodT">MCT Oil </h5>
                    <p className="foodP" >MCT Oil is excellent for aiding in fat loss.</p>
                </div>
                </div>
         
            
         </div>
            


      </div>

      <div id="oats" className="row">
          <div className="col-md-3">
          <div class="card" >
                <img id="omlette" class="card-img-top" src="https://target.scene7.com/is/image/Target/10994233?wid=488&hei=488&fmt=pjpeg" alt="Card cap"></img>
                <div id="CB" class="card-body text-white">
                    <h5 className="foodT">Multi-Vitamin</h5>
                    <p className="foodP" >Excellent source of vitamins.</p>
                </div>
                </div>
         
            
            </div>
            <div className="col-md-3">
            <div class="card" >
                <img id="omlette" class="card-img-top" src="https://s7d2.scene7.com/is/image/VitaminShoppe/2014934_01?$OP_PDPSKU$" alt="Card cap"></img>
                <div id="CB" class="card-body text-white">
                    <h5 className="foodT">Pre-Workout</h5>
                    <p className="foodP" >Great for energy as well as muscle building.</p>
                </div>
                </div>
         
            
         </div>
         <div className="col-md-3">
         <div class="card" >
                <img id="omlette" class="card-img-top" src="https://target.scene7.com/is/image/Target/14161828?wid=488&hei=488&fmt=pjpeg" alt="Card cap"></img>
                <div id="CB" class="card-body text-white">
                    <h5 className="foodT">CQ-10</h5>
                    <p className="foodP" >Excellent product to help increase mental clarity.</p>
                </div>
                </div>
         
            
         </div>
         <div className="col-md-3">
         <div class="card" >
                <img id="omlette" class="card-img-top" src="https://images-na.ssl-images-amazon.com/images/I/61oHhFmlJ6L._SY355_.jpg" alt="Card cap"></img>
                <div id="CB" class="card-body text-white">
                    <h5 className="foodT">5-HTP </h5>
                    <p className="foodP" >Helps with relaxation and mood.</p>
                </div>
                </div>
         
            
         </div>
            


      </div>
      
      


        </div>


    );
  }
}

export default Supps;