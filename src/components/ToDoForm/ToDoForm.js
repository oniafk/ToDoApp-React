import React from "react";
import { ToDoContext } from "../ToDoContext/ToDoContext";
import "./ToDoForm.css";

function ToDoForm() {
  const { setOpenModal, addNewToDo } = React.useContext(ToDoContext);

  const [newToDoValue, setNewToDoValue] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    setOpenModal(false);
    addNewToDo(newToDoValue);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewToDoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Create a new To Do</label>
      <textarea
        placeholder="get donde with this app, pls"
        value={newToDoValue}
        onChange={onChange}
      />
      <div className="ToDoForm-buttonContainer">
        <button type="submit" className="ToDoForm-button ToDoForm-button--add">
          Add
        </button>
        <button
          type="button"
          className="ToDoForm-button ToDoForm-button--cancel"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export { ToDoForm };
