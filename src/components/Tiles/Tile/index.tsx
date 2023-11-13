import React, { useRef } from "react";
import { User } from "../../../entities/User";
import "./index.css";
import { EmployeeIcon } from "./EmployeeIcon";

type TileProps = {
  user: User;
};

function Tile({ user }: TileProps) {
  const tile = useRef(document.createElement("div"));
  const handle = () => {
    tile.current.classList.toggle("tileSelected");
  };
  return (
    <div className="tile" ref={tile}>
      <div className="tileSelect">
        <input type="checkbox" onChange={() => handle()} />
      </div>
      <div className="tileName">{user.name}</div>
      <div className="tilePhoto">
        <EmployeeIcon width={100} height={100} />
      </div>
      <div className="tileText">{user.group}</div>
      <div className="tileText">{user.login}</div>
      <div className="tileText">{user.phone}</div>
    </div>
  );
}

export default Tile;
