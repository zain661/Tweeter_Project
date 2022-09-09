import React, { Component } from "react";

export class Score extends Component {
  scoreNumber = 100;
  render() {
    return <div>{this.scoreNumber}</div>;
  }
}
export default Score