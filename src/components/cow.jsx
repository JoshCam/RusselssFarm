import React, { Component } from "react";
import { connect } from "react-redux";
import picture from "../img/cow.svg";
import C from "../audio/C.wav";
import O from "../audio/O.wav";
import W from "../audio/W.wav";
import COW from "../audio/COW.wav";

class Cow extends Component {
  playAudio = (letter) => {
    let audio;
    switch (letter) {
      case "C":
        audio = new Audio(C);
        break;
      case "O":
        audio = new Audio(O);
        break;
      case "W":
        audio = new Audio(W);
        break;
      case "COW":
        audio = new Audio(COW);
    }
    audio.play();
  };
  render() {
    return (
      <div className="container">
        <div>
          <span onClick={() => this.playAudio("C")}>C</span>
          <span onClick={() => this.playAudio("O")}>O</span>
          <span onClick={() => this.playAudio("W")}>W</span>
        </div>
        <div>
          <h1 onClick={() => this.playAudio("COW")}>Listen</h1>
        </div>
        <div>
          <img src={picture}></img>
        </div>
      </div>
    );
  }
}

export default connect()(Cow);
