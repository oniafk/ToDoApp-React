import { AppUI } from "./AppUI";
import { useLocalStorage } from "./useLocalStorage";

import React from "react";

// localStorage.removeItem('toDos_V1');

// const defaultToDos = [
//   { text: "Finish ToDo App", completed: true },
//   { text: "keep learning react", completed: true },
//   { text: "Update WoW", completed: false },
//   { text: "Do math homework", completed: false },
//   { text: "play apex", completed: false },
// ];

// localStorage.setItem("toDos_V1", JSON.stringify(defaultToDos));

function App() {
  const {
    item: toDos,
    saveItem: saveToDos,
    loading,
    error,
  } = useLocalStorage("toDos_V1", []);
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

    saveToDos(newToDos);
  };

  const deleteToDo = (text) => {
    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex((toDo) => toDo.text === text);
    newToDos.splice(toDoIndex, 1);

    saveToDos(newToDos);
  };

  console.log(`searchValue: ${searchValue}`);

  return (
    <AppUI
      loaging={loading}
      error={error}
      completedToDos={completedToDos}
      totalToDos={totalToDos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedToDos={searchedToDos}
      completeToDo={completeToDo}
      deleteToDo={deleteToDo}
    />
  );
}

export default App;
