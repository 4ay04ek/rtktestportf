import React from "react";
import "./index.css";
import { UserGroup, Users } from "../../entities/User";
import Group from "./Group";

type GroupProps = {
  users: Users;
};

const GROUPS = ["Senior", "Middle", "Junior", "Intern"];

function Groups({ users }: GroupProps) {
  return (
    <div className="groups">
      {GROUPS.map((groupName: string) => (
        <Group
          users={users.filter((user) => user.group === groupName)}
          groupName={groupName as UserGroup}
        />
      ))}
    </div>
  );
}

export default Groups;
