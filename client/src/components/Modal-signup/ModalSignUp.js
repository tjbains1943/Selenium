import React from "react";
// import { Link } from "react-router-dom";


// import "../../style.css"

const ModalSignUp = props => (
  <div>
       <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
        Join The Club/Become A Member!
      </button>
      
      <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
            <form>
            <div className="form-group">
          <label >First Name</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name"></input>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label >Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Email"></input>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" id="password1" placeholder="Password"></input>
        </div>
        <div className="form-group">
          <label>Retype Password</label>
          <input type="password" className="form-control" id="password2" placeholder="Password"></input>
        </div >
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
            </div>
          </div>
        </div>
      </div>
  </div>
);

export default ModalSignUp;

       