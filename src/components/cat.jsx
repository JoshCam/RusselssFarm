import React, { Component } from "react";
import { connect } from "react-redux";

class Cat extends Component {
  render() {
    return <div>Cat</div>;
  }
}

export default connect()(Cat);
