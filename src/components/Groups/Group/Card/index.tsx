import React from "react";
import { User } from "../../../../entities/User";
import "./index.css";

type CardProps = {
  user: User;
};

function Card({ user }: CardProps) {
  return (
    <div className="card">
      <div className="cardName">{user.name}</div>
      <div className="cardText">
        {user.login} | {user.phone}
      </div>
    </div>
  );
}

export default Card;
