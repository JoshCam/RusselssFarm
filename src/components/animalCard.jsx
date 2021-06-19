import React, { Component } from "react";
import { connect } from "react-redux";
import Image from "./image";

class AnimalCard extends Component {
  render() {
    console.log(">>>", this.props.animalData);
    return (
      <div>
        {this.props.animalData.map((animal) => {
          return (
            <div>
              {/* <Letters /> */}
              {/* <Audio /> */}
              <Image animal={animal} />
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    animalData: state.animalData,
    screenMode: state.screenMode,
  };
}

export default connect(mapStateToProps)(AnimalCard);
