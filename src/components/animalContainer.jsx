import React, { Component } from "react";
import { connect } from "react-redux";

import "../App.css";

// Screen to show all clickable animals

class AnimalContainer extends Component {
  render() {
    return (
      <div>
        <div
          className="wordContainer"
          onClick={() =>
            this.props.dispatch({ type: "DOG" }, () =>
              console.log("this was clicked")
            )
          }
        >
          Dog
        </div>
        <div
          className="wordContainer"
          onClick={() =>
            this.props.dispatch({ type: "CAT" }, () =>
              console.log("this was clicked")
            )
          }
        >
          Cat
        </div>
        <div
          className="wordContainer"
          onClick={() =>
            this.props.dispatch({ type: "OWL" }, () =>
              console.log("this was clicked")
            )
          }
        >
          Owl
        </div>
        <div
          className="wordContainer"
          onClick={() =>
            this.props.dispatch({ type: "COW" }, () =>
              console.log("this was clicked")
            )
          }
        >
          Cow
        </div>
        <div
          className="wordContainer"
          onClick={() =>
            this.props.dispatch({ type: "PIG" }, () =>
              console.log("this was clicked")
            )
          }
        >
          Pig
        </div>
        <div
          className="wordContainer"
          onClick={() =>
            this.props.dispatch({ type: "HEN" }, () =>
              console.log("this was clicked")
            )
          }
        >
          Hen
        </div>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     animalData: state.animalData,
//   };
// }

export default connect()(AnimalContainer);

// class AnimalContainer extends Component {
//   render() {
//     // console.log(this.props.animalData);
//     return (
//       <div>
//         {this.props.animalData.map((animal) => {
//           return <AnimalCard animal={animal} />;
//         })}
//       </div>
//     );
//   }
// }
