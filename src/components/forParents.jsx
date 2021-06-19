import React, { Component } from "react";
import { connect } from "react-redux";
import { FaArrowLeft } from "react-icons/fa";

class ForParents extends Component {
  render() {
    return (
      <>
        <h1>About Russell's Farm</h1>
        <p>This app is to help your little one learn to read.</p>
        <h3>To use</h3>
        <p>
          Each letter has a phonetic sound attached to it. Click on the letter,
          repeat the sound out loud and encourage your child to copy you.
        </p>
        <p>
          Once you've clicked each letter separately, click on the picture of
          the animal and hear the word.
        </p>
        <button
          className="back-Btn"
          onClick={() => this.props.dispatch({ type: "ANIMALCONTAINER" })}
        >
          <FaArrowLeft className="fa-icon" />
        </button>
      </>
    );
  }
}

export default connect()(ForParents);
