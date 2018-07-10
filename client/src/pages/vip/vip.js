import React, { Component } from "react";
import "./vip.css";
import Nav from "../../components/Nav/Nav";

class VIP extends Component {
  render() {
    return (
      <div className="vipP">
        <Nav />
        <div id="backdrop">
        <div id="VIPs">
            <h1 id="headerV"> VIP 1 on 1 Custom Training Program </h1>
            </div>
          <div className="row" id="div">
          <div id="backgorund" className="col-md-6">
          <h3 id="header2">Includes:</h3>
          <h5 id="header4">-Customized 3, 6 or 9 month program.</h5>
          <h5 id="header4">-Designed around your goals!</h5>
          <h5 id="header4">-Fully customized diet and nutrition guide.</h5>
          <h5 id="header4">-Full access to our Daily Trainers.</h5>
          <h5 id="header4">-Direct contact with one of our training staff.</h5>
          <h5 id="header4">-Diet updates and progress check-ins every 2 weeks!</h5>

          <h3 id="DTT1">-3 Month Plan $129 <button id="purchase"className="btn btn-outline- ml-4" type="submit">
                  Purchase
                </button></h3>
                <h3 id="DTT1">-6 Month Plan $219<button id="purchase"className="btn btn-outline- ml-4" type="submit">
                  Purchase
                </button></h3>
                <h3 id="DTT1">-9 Month Plan $329 <button id="purchase"className="btn btn-outline- ml-4" type="submit">
                  Purchase
                </button></h3>
    
            
            
            </div>
            
          <div className="col-md-6">
          <img id="vippic" alt="pic" src="https://image.jimcdn.com/app/cms/image/transf/dimension=600x10000:format=jpg/path/s1683ea33217abdc8/image/i09c1dee7a9854923/version/1506686944/image.jpg"></img>
          
          </div>

      </div>
      <div className="col-md-12">
          <h4 id="footer">Stop sitting on the sidelines! Become the version of you that you always wanted!</h4>
          </div>
        </div>
        </div>


    );
  }
}

export default VIP;