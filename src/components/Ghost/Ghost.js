import React, { Component } from "react";

import { ReactComponent as GhostSvg } from "../../assets/icons/ghost.svg";
import "./style.css";

export class Ghost extends Component {
  state = {
    direction: "left",
    position: {
      top: 50 * 3,
      left: 50 * 3,
    },
  };

  componentDidMount() {
    this.changeDirectionInterval = setInterval(this.changeDirection, 500);
    this.moveInterval = setInterval(this.move, 500)
  }

  componentWillUnmount() {
    clearInterval(this.changeDirectionInterval);
    clearInterval(this.moveInterval)
  }

  changeDirection = () => {
    const arrayOfMovment = ["right", "up", "down", "left"];
    const movement = Math.floor(Math.random() * 4);

    this.setState({
      direction: arrayOfMovment[movement],
    });
  };

  move = () => {
    const currentTop = this.state.position.top;
    const currentLeft = this.state.position.left;
    const { direction } = this.state;
    const { step, size, border, topScoreBoardHeight } = this.props;

    switch (direction) {
      case "right":
        this.setState({
          position: {
            top: currentTop,
            left: Math.min(
              currentLeft + step,
              window.innerWidth - border - size
            ),
          },
        });
        break;
      case "down":
        this.setState({
          position: {
            top: Math.min(
              currentTop + step,
              window.innerHeight - border - size - topScoreBoardHeight
            ),
            left: currentLeft,
          },
        });
        break;
      case "left":
        this.setState({
          position: {
            top: currentTop,
            left: Math.max(currentLeft - step, 0),
          },
        });
        break;
      case "up":
        this.setState({
          direction: "up",
          position: {
            top: Math.max(currentTop - step, 0),
            left: currentLeft,
          },
        });
        break;
      default:
    }
  };

  render() {
    const { color } = this.props;

    return (
      <div style={this.state.position} className="ghost">
        <GhostSvg className={`ghost-${color}`} />
      </div>
    );
  }
}

Ghost.defaultProps = {
  color: "red",
  step: 50, //50px
  size: 50, //ghost size: 50x50px
  //Todo: move to congifg
  border: 10 * 2,
  topScoreBoardHeight: 50,
};

export default Ghost;
