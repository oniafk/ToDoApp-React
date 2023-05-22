import { ToDoCounter } from "./ToDoCounter";
import { ToDoSeach } from "./ToDoSearch";
import { ToDoList } from "./ToDoList";
import { CreateToDoButton } from "./CreateToDoButton";
import { ToDoItem } from "./ToDoItem";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ToDoCounter />

      <ToDoSeach />

      <ToDoList>
        <ToDoItem />
        <ToDoItem />
        <ToDoItem />
      </ToDoList>

      <CreateToDoButton />
    </div>
  );
}

export default App;
