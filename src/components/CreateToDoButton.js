import "../styles/CreateToDoButton.css";

function CreateToDoButton() {
  return (
    <button
      className="CreateToDoButton"
      onClick={(event) => {
        console.log(event);
        console.log(event.target);
      }}
    >
      +
    </button>
  );
}

export { CreateToDoButton };
