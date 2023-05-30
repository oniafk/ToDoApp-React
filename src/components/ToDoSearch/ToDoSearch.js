import React from "react";
import "./ToDoSearch.css";
import { ToDoContext } from "../ToDoContext/ToDoContext";

function ToDoSeach() {
  const { searchValue, setSearchValue } = React.useContext(ToDoContext);

  return (
    <input
      placeholder="Learn React"
      className="ToDoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { ToDoSeach };
