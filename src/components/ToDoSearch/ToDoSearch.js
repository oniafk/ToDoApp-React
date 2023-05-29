import React from "react";
import "./ToDoSearch.css";

function ToDoSeach({ searchValue, setSearchValue }) {
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
