import React, { Component } from "react";

import { ReactComponent as PacmanSvg } from "../../assets/icons/pacman.svg";
import "./style.css";

class Pacman extends Component {
  state = {
    direction: "up",
    position: {
      top: 100,
      left: 20,
    },
  };

  constructor(props){
    super(props)
    this.pacmanRef = React.createRef();
  }

  componentDidMount() {
    this.pacmanRef.current.focus()
  }

  handleKeyDown = (event) => {
    console.log(event.keyCode, event.key);
    // this.setState({
    //   direction: event.key
    // })
  };

  render() {
    const {direction, position} = this.state
    return (
      <div
        ref={this.pacmanRef}
        className={`pacman pacman-${direction}`}
        tabIndex="0"
        onKeyDown={this.handleKeyDown}
        style={position}
      >
        <PacmanSvg />
      </div>
    );
  }
}

Pacman.defaultProps = {
  step: 50, //50px
  size: 50, //pacman size: 50x50px
  //Todo: move to congifg
  border: 10 * 2,
  topScoreBoardHeight: 50,
};

export default Pacman;
