import React, { Component } from "react";
import { connect } from "react-redux";

import dogPic from "../img/dog.svg";
import catPic from "../img/cat.svg";
import cowPic from "../img/cow.svg";
import henPic from "../img/hen.svg";
import pigPic from "../img/pig.svg";
import owlPic from "../img/owl.svg";

import russell from "../img/RussellsFarm.png";

import ForParents from "./forParents";

import "../App.css";

// Screen to show all clickable animals

class AnimalContainer extends Component {
  render() {
    return (
      <>
        <div className="logo">
          <img src={russell}></img>
        </div>
        <div className="animalHome">
          <div
            className="wordContainer"
            onClick={() =>
              this.props.dispatch({ type: "DOG" }, () =>
                console.log("this was clicked")
              )
            }
          >
            <img src={dogPic}></img>
          </div>
          <div
            className="wordContainer"
            onClick={() =>
              this.props.dispatch({ type: "CAT" }, () =>
                console.log("this was clicked")
              )
            }
          >
            <img src={catPic}></img>
          </div>
          <div
            className="wordContainer"
            onClick={() =>
              this.props.dispatch({ type: "OWL" }, () =>
                console.log("this was clicked")
              )
            }
          >
            <img src={owlPic}></img>
          </div>
          <div
            className="wordContainer"
            onClick={() =>
              this.props.dispatch({ type: "COW" }, () =>
                console.log("this was clicked")
              )
            }
          >
            <img src={cowPic}></img>
          </div>
          <div
            className="wordContainer"
            onClick={() =>
              this.props.dispatch({ type: "PIG" }, () =>
                console.log("this was clicked")
              )
            }
          >
            <img src={pigPic}></img>
          </div>
          <div
            className="wordContainer"
            onClick={() =>
              this.props.dispatch({ type: "HEN" }, () =>
                console.log("this was clicked")
              )
            }
          >
            <img src={henPic}></img>
          </div>
        </div>
        <button
          className="parents"
          onClick={() => this.props.dispatch({ type: "PARENTS" })}
        >
          ?
        </button>
        <button onClick={() => this.props.dispatch({ type: "ALPHABET" })}>
          Alphabet
        </button>
      </>
    );
  }
}

export default connect()(AnimalContainer);
