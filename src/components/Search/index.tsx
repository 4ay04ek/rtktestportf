import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../slices/users";
import "./index.css";
import classNames from "classnames";

function Search() {
  const search = useRef(document.createElement("input"));
  const dispatch = useDispatch();
  return (
    <div className="search">
      <input
        ref={search}
        className={classNames({
          inputAnimated: !search.current.value.length,
        })}
        onChange={(e) => {
          dispatch(userActions.filter(e.target.value));
        }}
        type="text"
      />
      <span onClick={() => search.current.focus()} className="searchText">
        Поиск
      </span>
    </div>
  );
}

export default Search;
