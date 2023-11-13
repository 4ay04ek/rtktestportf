import React from "react";
import { Users } from "../../entities/User";
import Row from "./Row";
import "./index.css";
import Label from "./Label";

type TableProps = {
  users: Users;
};

function Table({ users }: TableProps) {
  return (
    <div className="table">
      <Label />
      <div className="items">
        {users.map((user, i) => (
          <Row user={user} checked={user.checked} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Table;
