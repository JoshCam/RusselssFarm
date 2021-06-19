import React, { Component } from "react";
import { connect } from "react-redux";

class Cow extends Component {
  render() {
    return <div>Cow</div>;
  }
}

export default connect()(Cow);
