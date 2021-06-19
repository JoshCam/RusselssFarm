import React, { Component } from "react";
import { connect } from "react-redux";

class Cow extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <span>C</span>
          <span>O</span>
          <span>W</span>
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

export default connect()(Cow);
