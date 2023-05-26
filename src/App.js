import { ToDoCounter } from "./components/ToDoCounter";
import { ToDoSeach } from "./components/ToDoSearch";
import { ToDoList } from "./components/ToDoList";
import { CreateToDoButton } from "./components/CreateToDoButton";
import { ToDoItem } from "./components/ToDoItem";
import React from "react";

const defaultToDos = [
  { text: "Finish ToDo App", completed: true },
  { text: "keep learning react", completed: true },
  { text: "Update WoW", completed: false },
  { text: "Do math homework", completed: false },
  { text: "play apex", completed: false },
];

function App() {
  const [toDos, setToDos] = React.useState(defaultToDos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedToDos = toDos.filter((toDo) => !!toDo.completed).length;
  const totalToDos = toDos.length;

  const searchedToDos = toDos.filter((toDo) => {
    const toDoText = toDo.text.toLowerCase();
    const searchValueText = searchValue.toLowerCase();

    return toDoText.includes(searchValueText);
  });

  const completeToDo = (text) => {
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex((toDo) => toDo.text === text);
    newToDos[toDoIndex].completed = true;

    setToDos(newToDos);
  };

  const deleteToDo = (text) => {
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex((toDo) => toDo.text === text);
    newToDos.splice(toDoIndex, 1);

    setToDos(newToDos);
  };

  console.log(`searchValue: ${searchValue}`);

  return (
    <React.Fragment>
      <ToDoCounter completed={completedToDos} total={totalToDos} />

      <ToDoSeach searchValue={searchValue} setSearchValue={setSearchValue} />

      <ToDoList>
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
    </React.Fragment>
  );
}

export default App;
