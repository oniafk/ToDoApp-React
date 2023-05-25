import "../styles/ToDoCounter.css";

function ToDoCounter({ total, completed }) {
  return (
    <h1 className="ToDoCounter">
      You have completed <span>{completed}</span> of <span>{total}</span> ToDos
    </h1>
  );
}

export { ToDoCounter };
