import React, { Component } from "react";
import { connect } from "react-redux";

class Pig extends Component {
  render() {
    return <div>Pig</div>;
  }
}

export default connect()(Pig);
