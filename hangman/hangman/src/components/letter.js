import React, { Component } from "react";
import Letters from "./letters";

class Letter extends Component {
  letter = <Letters />;
  render() {
    return <span>{this.letter}</span>;
  }
}

export default Letter