import { ToDoCounter } from "./components/ToDoCounter";
import { ToDoSeach } from "./components/ToDoSearch";
import { ToDoList } from "./components/ToDoList";
import { CreateToDoButton } from "./components/CreateToDoButton";
import { ToDoItem } from "./components/ToDoItem";
import React from "react";

const defaultToDos = [
  { text: "Finish ToDo App", completed: true },
  { text: "keep learning react", completed: false },
  { text: "play apex", completed: false },
];

function App() {
  return (
    <React.Fragment>
      <ToDoCounter completed={3} total={5} />

      <ToDoSeach />

      <ToDoList>
        {defaultToDos.map((toDo) => (
          <ToDoItem
            key={toDo.text}
            text={toDo.text}
            completed={toDo.completed}
          />
        ))}
      </ToDoList>

      <CreateToDoButton />
    </React.Fragment>
  );
}

export default App;
