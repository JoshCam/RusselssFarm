import React, { Component } from "react";
import "../App.css";

class ThreeLetters extends Component {
  state = {};
  render() {
    return <div></div>;
  }
}

function mapStateToProps(state) {
  return {
    // count: state.count,
  };
}

export default connect(mapStateToProps)(ThreeLetters);
