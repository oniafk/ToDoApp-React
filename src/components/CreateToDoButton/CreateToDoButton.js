import "./CreateToDoButton.css";
import React from "react";
import { ToDoContext } from "../ToDoContext/ToDoContext";

function CreateToDoButton() {
  const { setOpenModal } = React.useContext(ToDoContext);
  return (
    <button
      className="CreateToDoButton"
      onClick={() => {
        setOpenModal((prevValue) => !prevValue);
      }}
    >
      +
    </button>
  );
}

export { CreateToDoButton };
