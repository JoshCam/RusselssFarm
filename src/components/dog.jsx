import React, { Component } from "react";
import { connect } from "react-redux";
import picture from "../img/dog.svg";
import D from "../audio/D.wav";
import O from "../audio/O.wav";
import G from "../audio/G.wav";
import DOG from "../audio/DOG.wav";

import letterD from "../img/alphabet/D.png";
// import O from "../img/alphabet/O.png";
// import G from "../img/alphabet/G.png";

class Dog extends Component {
  playAudio = (letter) => {
    let audio;
    switch (letter) {
      case "D":
        audio = new Audio(D);
        break;
      case "O":
        audio = new Audio(O);
        break;
      case "G":
        audio = new Audio(G);
        break;
      case "DOG":
        audio = new Audio(DOG);
    }
    audio.play();
  };
  render() {
    return (
      <div className="container">
        <div>
          <img src={letterD} onClick={() => this.playAudio("D")}></img>
          <span onClick={() => this.playAudio("O")}>O</span>
          <span onClick={() => this.playAudio("G")}>G</span>
        </div>
        <div>
          <h1 onClick={() => this.playAudio("DOG")}>Listen</h1>
        </div>
        <div>
          <img src={picture}></img>
        </div>
      </div>
    );
  }
}

export default connect()(Dog);
