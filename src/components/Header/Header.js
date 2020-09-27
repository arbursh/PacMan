import React from "react";

import './style.css'

function Header({score}) {
    return (
        <div className="header">
            <span>SCORE: {score}</span>
        </div>
    )
}

Header.defultProps = {
    score: 0
};

export default Header;