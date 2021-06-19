import React, { Component } from "react";
import { connect } from "react-redux";

class Hen extends Component {
  render() {
    return <div>Hen</div>;
  }
}

export default connect()(Hen);
