import React, { Component } from "react";
import { connect } from "react-redux";
import picture from "../img/pig.svg";

class Pig extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <span>P</span>
          <span>I</span>
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

export default connect()(Pig);
