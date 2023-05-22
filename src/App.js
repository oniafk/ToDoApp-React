import { ToDoCounter } from "./ToDoCounter";
import { ToDoSeach } from "./ToDoSearch";
import { ToDoList } from "./ToDoList";
import { CreateToDoButton } from "./CreateToDoButton";
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

function ToDoItem() {
  return (
    <li>
      <span>✓</span>
      <p>first task</p>
      <span>×</span>
    </li>
  );
}

export default App;
