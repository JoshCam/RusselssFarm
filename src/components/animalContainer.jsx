import React, { Component } from "react";
import { connect } from "react-redux";
import AnimalCard from "./animalCard";
import "../App.css";

class AnimalContainer extends Component {
  render() {
    // console.log(this.props.animalData);
    return (
      <div>
        <AnimalCard animalData={this.props.animalData} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    animalData: state.animalData,
  };
}

export default connect(mapStateToProps)(AnimalContainer);
