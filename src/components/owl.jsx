import React, { Component } from "react";
import { connect } from "react-redux";
import picture from "../img/owl.svg";

import O from "../audio/H.wav";
import W from "../audio/E.wav";
import L from "../audio/N.wav";
import OWL from "../audio/HEN.wav";

class Owl extends Component {
  playAudio = (letter) => {
    let audio;
    switch (letter) {
      case "O":
        audio = new Audio(O);
        break;
      case "W":
        audio = new Audio(W);
        break;
      case "L":
        audio = new Audio(L);
        break;
      case "OWL":
        audio = new Audio(OWL);
    }
    audio.play();
  };
  render() {
    return (
      <div className="container">
        <div>
          <span onClick={() => this.playAudio("O")}>O</span>
          <span onClick={() => this.playAudio("W")}>W</span>
          <span onClick={() => this.playAudio("L")}>L</span>
        </div>
        <div>
          <h1 onClick={() => this.playAudio("OWL")}>Listen</h1>
        </div>
        <div>
          <img src={picture}></img>
        </div>
      </div>
    );
  }
}

export default connect()(Owl);
