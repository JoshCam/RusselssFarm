import React, { Component } from "react";

class Image extends Component {
  render() {
    return (
      <div>
        <img src={this.props.animal.img} alt="Dog Img" title="dog Img"></img>
      </div>
    );
  }
}

export default Image;
