import React, { Component } from "react";

class Audio extends Component {
  render() {
    return (
      <div>
        <audio>
          <source src={this.props.audio} type="audio/mp3" />
        </audio>
      </div>
    );
  }
}

export default Audio;
