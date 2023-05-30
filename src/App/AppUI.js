import { ToDoCounter } from "../components/ToDoCounter/ToDoCounter";
import { ToDoSeach } from "../components/ToDoSearch/ToDoSearch";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { CreateToDoButton } from "../components/CreateToDoButton/CreateToDoButton";
import { ToDoItem } from "../components/ToDoItem/ToDoItem";
import { EmptyToDo } from "../components/EmptyToDo/EmptyToDo";
import { ToDoError } from "../components/ToDoError/ToDoError";
import { ToDoLoading } from "../components/ToDoLoading/ToDoLoading";
import React from "react";
import { ToDoContext } from "../components/ToDoContext/ToDoContext";

function AppUI() {
  const { loading, error, searchedToDos, completeToDo, deleteToDo } =
    React.useContext(ToDoContext);

  return (
    <>
      <ToDoCounter />
      <ToDoSeach />

      <ToDoList>
        {loading && (
          <>
            <ToDoLoading />
            <ToDoLoading />
            <ToDoLoading />
          </>
        )}
        {error && <ToDoError />}
        {!loading && searchedToDos.length === 0 && <EmptyToDo />}

        {searchedToDos.map((toDo) => (
          <ToDoItem
            key={toDo.text}
            text={toDo.text}
            completed={toDo.completed}
            onComplete={() => completeToDo(toDo.text)}
            onDelete={() => deleteToDo(toDo.text)}
          />
        ))}
      </ToDoList>

      <CreateToDoButton />
    </>
  );
}

export { AppUI };
