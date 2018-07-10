import React, { Component } from 'react'

export default class RepsButton extends Component {


    state = {
    }
    buttonClicker = () => {
      if (this.state.num <= 0) {
        this.setState({
          num: this.props.num
        })
      }
      else {
        this.setState({
          truthy: true,
          num: this.state.num - 1
        })

    }
  }
    componentWillMount() {
      this.setState({
        num : (parseInt(this.props.num, 10) + 1),
        original : this.props.num
      })
    }

    render() {
      return (
         <button className="btn m-2 btn-primary" style={{borderRadius: "50%", width: "5%" }} onClick={this.buttonClicker}>{this.state.truthy ? (this.state.num) : "SxF"}</button>
      
      );
    }
  }