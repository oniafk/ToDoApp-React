import { ToDoProvider } from "../components/ToDoContext/ToDoContext";
import { AppUI } from "./AppUI";
import React from "react";

function App() {
  return (
    <ToDoProvider>
      <AppUI />
    </ToDoProvider>
  );
}

export default App;
