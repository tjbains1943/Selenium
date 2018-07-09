import React, { Component } from 'react'

export default class RepsButton extends Component {

    buttonClicker = () => {
        console.log("tits");
    }

    render() {
      return (
        <div>
         <button onClick={this.buttonClicker}>{`Reps:${this.children}`}</button>
        </div>
      );
    }
  }