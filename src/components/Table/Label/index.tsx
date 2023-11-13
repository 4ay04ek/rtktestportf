import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import "./index.css";
import { userActions } from "../../../slices/users";
import { SortDirectionIcon } from "./SortDirectionIcon";

function LabelText(props: any) {
  const arrow = useRef(document.createElement("div"));
  const [direction, setDirection] = useState(1);
  const dispatch = useDispatch();
  const handle = () => {
    arrow.current.style.opacity = "1";
    arrow.current.style.transform = `rotate(${
      180 * Math.max(direction, 0)
    }deg)`;
    setDirection(direction * -1);
    dispatch(userActions.sort({ group: props.sortGroup, direction }));
  };
  return (
    <div onClick={() => handle()}>
      {props.children}
      <span ref={arrow} className="arrowIcon">
        <SortDirectionIcon width={20} height={20} />
      </span>
    </div>
  );
}

function Label() {
  const dispatch = useDispatch();
  return (
    <div className="label">
      <div style={{ flex: 10, padding: 15 }}>
        <input
          type="checkbox"
          onChange={(e) => dispatch(userActions.checkAll(e.target.checked))}
          name="select"
        />
      </div>
      <LabelText sortGroup="name">Полное имя</LabelText>
      <LabelText sortGroup="login">Логин</LabelText>
      <LabelText sortGroup="email">Электронная почта</LabelText>
      <LabelText sortGroup="group">Группа</LabelText>
      <LabelText sortGroup="phone">Номер телефона</LabelText>
    </div>
  );
}

export default Label;
