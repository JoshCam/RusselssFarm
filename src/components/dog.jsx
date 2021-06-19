import React, { Component } from "react";
import { connect } from "react-redux";
import picture from "../img/dog.svg";

class Dog extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <span>D</span>
          <span>O</span>
          <span>G</span>
        </div>
        <div>
          <h1>Listen</h1>
        </div>
        <div>
          <img src={picture}></img>
        </div>
      </div>
    );
  }
}

export default connect()(Dog);
