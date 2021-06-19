import React, { Component } from "react";
import { connect } from "react-redux";
import picture from "../img/hen.svg";

import H from "../audio/H.wav";
import E from "../audio/E.wav";
import N from "../audio/N.wav";
import HEN from "../audio/HEN.wav";

class Hen extends Component {
  playAudio = (letter) => {
    let audio;
    switch (letter) {
      case "H":
        audio = new Audio(H);
        break;
      case "E":
        audio = new Audio(E);
        break;
      case "N":
        audio = new Audio(N);
        break;
      case "HEN":
        audio = new Audio(HEN);
    }
    audio.play();
  };
  render() {
    return (
      <div className="container">
        <div>
          <span onClick={() => this.playAudio("H")}>H</span>
          <span onClick={() => this.playAudio("E")}>E</span>
          <span onClick={() => this.playAudio("N")}>N</span>
        </div>
        <div>
          <h1 onClick={() => this.playAudio("HEN")}>Listen</h1>
        </div>
        <div>
          <img src={picture}></img>
        </div>
      </div>
    );
  }
}

export default connect()(Hen);
