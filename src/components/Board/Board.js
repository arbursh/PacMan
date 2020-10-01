import React, { Component } from "react";

import Pacman from "../Pacman/Pacman";
import Ghost from "../Ghost/Ghost";
import Food from "../Food/Food";


import "./style.css";

class Board extends Component {
  render() {
    return (
      <div className="board">
        <Food position={{top: 100, left: 100}} /> 
        <Pacman />
        <Ghost color="yellow" />
        {/* <Ghost color="red" />
        <Ghost color="pink" />
        <Ghost color="blue" /> */}
      </div>
    );
  }
}

export default Board;
