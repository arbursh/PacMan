import React, { Component } from "react";

import Pacman from "../Pacman/Pacman";
import Ghost from "../Ghost/Ghost";
import Food from "../Food/Food";

import "./style.css";

class Board extends Component {
  constructor(props) {
    super(props);

    this.pacmanRef = React.createRef();

    this.foods = [];

    this.amountOfFood =
      ((window.innerWidth - this.props.foodSize) *
        (window.innerHeight - this.props.topScoreBoardHeight)) /
        (this.props.foodSize * this.props.foodSize) -
      1;

    for (let i = 0; i < this.amountOfFood; i++) {
      this["food" + i] = React.createRef();
    }
  }

  lookFor = () => {};

  render() {
    const { foodSize, border, topScoreBoardHeight } = this.props;
    let foods = [];
    let currentTop = 0;
    let currentLeft = 1 * this.props.foodSize;
    for (let i = 0; i <= this.amountOfFood; i++) {
      if (
        currentLeft + this.props.foodSize >=
        window.innerWidth - this.props.border
      ) {
        currentTop += this.props.foodSize;
        currentLeft = 0;
      }

      if (
        currentTop + foodSize >
        window.innerHeight - border - topScoreBoardHeight
      ) {
        break;
      }

      const position = { left: currentLeft, top: currentTop };

      currentLeft += foodSize;
      foods.push(
        <Food
          key={`food-elem-${i}`}
          position={position}
          ref={this["food" + i]}
        />
      );
    }

    return (
      <div className="board">
        {foods}
        <Pacman ref={this.pacmanRef} />
        <Ghost color="yellow" />
        {/* <Ghost color="red" />
        <Ghost color="pink" />
        <Ghost color="blue" /> */}
      </div>
    );
  }
}

//TOdo reaftor and move to config
Board.defaultProps = {
  foodSize: 50,
  border: 10 * 2,
  topScoreBoardHeight: 50,
};

export default Board;
