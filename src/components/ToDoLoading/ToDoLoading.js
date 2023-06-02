import "./ToDoLoading.css";
import React from "react";

function ToDoLoading() {
  return (
    <div className="LoadingToDo-container">
      <span className="LoadingToDo-completeIcon"></span>
      <p className="LoadingToDo-text"></p>
      <span className="LoadingToDo-deleteIcon"></span>
    </div>
  );
}

export { ToDoLoading };
