import React, { Component } from "react";
import { connect } from "react-redux";

class Owl extends Component {
  render() {
    return <div>Owl</div>;
  }
}

export default connect()(Owl);
