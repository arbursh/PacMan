import React, { Component } from "react";

import Pacman from "../Pacman/Pacman";
import "./style.css";

class Board extends Component {
  render() {
    return (
      <div className="board">
        <div>Siemanko</div>
        {/* <Food />  */}
        <Pacman />
        {/* <Ghost/> */}
      </div>
    );
  }
}

export default Board;
