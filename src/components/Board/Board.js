import React, { Component } from "react";

import Pacman from "../Pacman/Pacman";
import Ghost from "../Ghost/Ghost";


import "./style.css";

class Board extends Component {
  render() {
    return (
      <div className="board">
        {/* <Food />  */}
        <Pacman />
        <Ghost/>
      </div>
    );
  }
}

export default Board;
