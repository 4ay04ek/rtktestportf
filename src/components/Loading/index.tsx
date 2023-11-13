import React from "react";
import "./index.css";
import { Loading } from "./Loading";

function Tiles() {
  return (
    <div className="preload">
      <Loading width={100} height={100} />
    </div>
  );
}

export default Tiles;
