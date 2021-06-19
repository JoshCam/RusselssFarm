import React, { Component } from "react";
import { connect } from "react-redux";
import Image from "./image";

class AnimalCard extends Component {
  render() {
    console.log(">>>", this.props.animalData);
    return (
      <div>
        {this.state.animalData.map((item) => {
          return (
            <div>
              {/* <Letters /> */}
              {/* <Audio /> */}
              <Image item={item} />
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
