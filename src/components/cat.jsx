import React, { Component } from "react";
import { connect } from "react-redux";
import picture from "../img/cat.svg";
import C from "../audio/C.wav";
import A from "../audio/A.wav";
import T from "../audio/T.wav";
import CAT from "../audio/CAT.wav";

class Cat extends Component {
  playAudio = (letter) => {
    let audio;
    switch (letter) {
      case "C":
        audio = new Audio(C);
        break;
      case "A":
        audio = new Audio(A);
        break;
      case "T":
        audio = new Audio(T);
        break;
      case "CAT":
        audio = new Audio(CAT);
    }
    audio.play();
  };
  render() {
    return (
      <div className="container">
        <div>
          <span onClick={() => this.playAudio("C")}>C</span>
          <span onClick={() => this.playAudio("A")}>A</span>
          <span onClick={() => this.playAudio("T")}>T</span>
        </div>
        <div>
          <h1 onClick={() => this.playAudio("CAT")}>Listen</h1>
        </div>
        <div>
          <img src={picture}></img>
        </div>
      </div>
    );
  }
}

export default connect()(Cat);
