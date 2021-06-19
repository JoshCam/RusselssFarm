import React, { Component } from "react";

class Letters extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>{this.props.firstLetter}</p>
        <p>{this.props.secondLetter}</p>
        <p>{this.props.thirdLetter}</p>
      </div>
    );
  }
}

export default Letters;
