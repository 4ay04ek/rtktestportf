import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { userActions } from "../../slices/users";
import { connect, useDispatch } from "react-redux";
import Table from "../Table";
import { Users } from "../../entities/User";
import "./index.css";
import Search from "../Search";
import { ListIcon } from "./Icons/ListIcon";
import { TilesIcon } from "./Icons/TilesIcon";
import { GroupIcon } from "./Icons/GroupIcon";
import Tiles from "../Tiles";
import Groups from "../Groups";
import Loading from "../Loading";

type TableProps = {
  loading?: boolean;
  users?: Users;
};

type ShowType = "tiles" | "group" | "list";

const ICON_SIZE = 32;
const SELECT_COLOR = "rgb(240, 240, 240)";

function Main(props: TableProps) {
  const dispatch = useDispatch();
  const [showType, setShowType] = useState("list");
  useEffect(() => {
    //@ts-expect-error - TS2345
    dispatch(userActions.fetchUsers());
  }, [dispatch]);
  const types = useRef(document.createElement("div"));
  const handleShowTypeClick = (e: any, type: ShowType) => {
    setShowType(type);
    Array.from(types.current.children).map(
      //@ts-expect-error
      (node) => (node.style.backgroundColor = "")
    );
    e.target.style.backgroundColor = SELECT_COLOR;
  };
  return (
    <div>
      <div className="centerContent">
        <div className="content">
          <div className="tools">
            <div className="showTypes" ref={types}>
              <div
                style={{ backgroundColor: SELECT_COLOR }}
                onClick={(e) => handleShowTypeClick(e, "list")}
              >
                <ListIcon width={ICON_SIZE} height={ICON_SIZE} />
              </div>
              <div onClick={(e) => handleShowTypeClick(e, "tiles")}>
                <TilesIcon width={ICON_SIZE} height={ICON_SIZE} />
              </div>
              <div onClick={(e) => handleShowTypeClick(e, "group")}>
                <GroupIcon width={ICON_SIZE} height={ICON_SIZE} />
              </div>
            </div>
            <div>
              <Search />
            </div>
          </div>
          <div className="data">
            {showType === "list" && props.users && (
              <Table users={props.users}></Table>
            )}
            {showType === "tiles" && props.users && (
              <Tiles users={props.users}></Tiles>
            )}
            {showType === "group" && props.users && (
              <Groups users={props.users}></Groups>
            )}
            {!props.users && <Loading />}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    loading: state.users?.loading,
    users: state.users?.users,
  };
};

export default connect(mapStateToProps)(Main);
