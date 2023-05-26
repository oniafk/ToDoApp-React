import "../styles/ToDoCounter.css";

function ToDoCounter({ total, completed }) {
  if (total === completed) {
    return (
      <h1 className="ToDoCounter">
        You have completed all your ToDos... Congratulations!🥳
      </h1>
    );
  }

  return (
    <h1 className="ToDoCounter">
      You have completed <span>{completed}</span> of <span>{total}</span> ToDos
    </h1>
  );
}

export { ToDoCounter };
