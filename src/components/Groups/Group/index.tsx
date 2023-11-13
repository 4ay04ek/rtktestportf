import React from "react";
import { User, UserGroup } from "../../../entities/User";
import "./index.css";
import Card from "./Card";

type GroupProps = {
  users: User[];
  groupName: UserGroup;
};

function Group({ users, groupName }: GroupProps) {
  return (
    <div className="group">
      <div>
        <div className="groupTitle">{groupName}</div>
        <div className="groupItems">
          {users.map((user) => (
            <Card user={user} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Group;
