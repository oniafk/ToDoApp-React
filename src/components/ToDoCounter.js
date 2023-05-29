import "../styles/ToDoCounter.css";

function ToDoCounter({ total, completed }) {
  if (total === 0 && completed === 0) {
    return <h1 className="ToDoCounter">You have no ToDos</h1>;
  } else if (total === completed) {
    return (
      <h1 className="ToDoCounter">
        You have completed all your ToDos... Congratulations!🥳
      </h1>
    );
  } else {
    return (
      <h1 className="ToDoCounter">
        You have completed <span>{completed}</span> of <span>{total}</span>{" "}
        ToDos
      </h1>
    );
  }
}

export { ToDoCounter };
