import React, { Component } from "react";
import { connect } from "react-redux";
import AnimalContainer from "./components/animalContainer";
import AnimalCard from "./components/animalCard";
// import AnimalCard from "./components/animalCard";

class App extends Component {
  render() {
    console.log(this.props.animalData);
    return (
      <>
        {/* {this.props.screenMode === 0 ? (
          <AnimalContainer />
        ) : this.props.screenMode === 1 ? (
          <AnimalCard />
        ) : (
          ""
        )} */}

        <AnimalContainer animalData={this.props.animalData} />

        <br></br>
        <h1>My counter</h1>
        <p>The count is {this.props.count}</p>
        <button onClick={() => this.props.dispatch({ type: "INCREMENT" })}>
          Add
        </button>
        <button onClick={() => this.props.dispatch({ type: "DECREMENT" })}>
          Minus
        </button>
        <button onClick={() => this.props.dispatch({ type: "RESET" })}>
          Reset
        </button>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    animalData: state.animalData,
    screenMode: state.screenMode,
  };
}

export default connect(mapStateToProps)(App);
