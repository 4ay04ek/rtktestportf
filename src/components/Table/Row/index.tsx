import React, { useEffect, useRef } from "react";
import { User } from "../../../entities/User";
import "./index.css";

type RowProps = {
  user: User;
  checked?: boolean;
};

function Row({ user, checked }: RowProps) {
  const row = useRef(document.createElement("div"));
  const checkbox = useRef(document.createElement("input"));
  useEffect(() => {
    checkbox.current.checked = Boolean(checked);
    Boolean(checked)
      ? row.current.classList.add("rowSelected")
      : (row.current.className = "row");
  }, [checked, checkbox]);
  const handle = () => {
    row.current.classList.toggle("rowSelected");
  };
  return (
    <div className="row" ref={row}>
      <div style={{ flex: 10, padding: 15 }}>
        <input
          ref={checkbox}
          type="checkbox"
          onChange={() => handle()}
          name="select"
        />
      </div>
      <div>{user.name}</div>
      <div>{user.login}</div>
      <div style={{ flex: 150 }}>{user.email}</div>
      <div style={{ flex: 50 }}>{user.group}</div>
      <div>{user.phone}</div>
    </div>
  );
}

export default Row;
