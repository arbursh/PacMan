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

  render() {
    const { color } = this.props;

    return (
      <div className="ghost">
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
