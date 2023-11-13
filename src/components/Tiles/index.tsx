import React from "react";
import { Users } from "../../entities/User";
import "./index.css";
import Tile from "./Tile";

type TilesProps = {
  users: Users;
};

function Tiles({ users }: TilesProps) {
  return (
    <div className="tiles">
      {users.map((user, i) => (
        <Tile user={user} key={i} />
      ))}
    </div>
  );
}

export default Tiles;
