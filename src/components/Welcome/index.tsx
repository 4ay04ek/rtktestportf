import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Tiles() {
  return (
    <div>
      <div>
        <h1>Welcome!</h1>
        <div className="by">Created by Ковалев Леонид</div>
      </div>
      <div className="continue">
        <Link to="/main">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Продолжить
        </Link>
      </div>
    </div>
  );
}

export default Tiles;
