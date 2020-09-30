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

  constructor(props) {
    super(props);
    this.pacmanRef = React.createRef();
  }

  componentDidMount() {
    this.pacmanRef.current.focus();
  }

  handleKeyDown = (event) => {
    console.log(event.keyCode, event.key);

    const currentTop = this.state.position.top;
    const currentLeft = this.state.position.left;
    const { step, size, border, topScoreBoardHeight } = this.props;

    //39 ArrowRight
    //40 ArrowDown
    // 37 ArrowLeft
    // 38 Arrorup

    switch (event.key) {
      case "ArrowRight":
        this.setState({
          position: {
            top: currentTop,
            // left: currentLeft + step,
            left: Math.min(currentLeft + step, window.innerWidth - border - size)
          },
          direction: "right",
        });
        break;
      case "ArrowDown":
        this.setState({
          direction: "down",
          position: {
            top: Math.min(currentTop + step, window.innerHeight - border - size - topScoreBoardHeight),
            left: currentLeft
          }
        });
        break;
      case "ArrowLeft":
        this.setState({
          direction: "left",
          position: {
            top: currentTop,
            left: Math.max(currentLeft - step, 0)
          }
        });
        break;
      case "ArrowUp":
        this.setState({
          direction: "up",
          position: {
            top: Math.max(currentTop - step, 0),
            left: currentLeft
          }
        });
        break;
      default:
    }
  };

  render() {
    const { direction, position } = this.state;
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
