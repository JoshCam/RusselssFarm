import React, { Component } from "react";
import { connect } from "react-redux";
import letterA from "../img/alphabet/A.png";
import letterB from "../img/alphabet/B.png";
import letterC from "../img/alphabet/C.png";
import letterD from "../img/alphabet/D.png";
import Aa from "../audio/Aa.wav";
import Bb from "../audio/Bb.wav";
import Cc from "../audio/Cc.wav";
import Dd from "../audio/Dd.wav";
import "../App.css";

// Screen to show all clickable animals

class AlphabetContainer extends Component {
  playAudio = (letter) => {
    let audio;
    switch (letter) {
      case "Aa":
        audio = new Audio(Aa);
        break;
      case "Bb":
        audio = new Audio(Bb);
        break;
      case "Cc":
        audio = new Audio(Cc);
        break;
      case "Dd":
        audio = new Audio(Dd);
    }
    audio.play();
  };
  render() {
    return (
      <div className="alphabet">
        <div className="wordContainer" onClick={() => this.playAudio("Aa")}>
          <img src={letterA}></img>
        </div>
        <div className="wordContainer" onClick={() => this.playAudio("Bb")}>
          <img src={letterB}></img>
        </div>
        <div className="wordContainer" onClick={() => this.playAudio("Cc")}>
          <img src={letterC}></img>
        </div>
        <div className="wordContainer" onClick={() => this.playAudio("Dd")}>
          <img src={letterD}></img>
        </div>
      </div>
    );
  }
}

export default connect()(AlphabetContainer);
