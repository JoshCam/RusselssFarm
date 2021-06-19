import React, { Component } from "react";
import { connect } from "react-redux";
import picture from "../img/cat.svg";

class Cat extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <span>C</span>
          <span>A</span>
          <span>T</span>
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

export default connect()(Cat);
