import { useState } from "react";
import "./AddTodo.css";

function AddTodo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) {
      setError("Input field can't be empty");
      return;
    }
    setTodos((prev) => [...prev, task]);
    setTask("");
    setError("");
  };

  const handleDelete = (deleteIndex) => {
    const filtered = todos.filter((_, index) => index !== deleteIndex);
    setTodos(filtered);
  };

  return (
    <div className="todo-container">
      <div>
        <input
          type="text"
          placeholder="Enter the task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="todo-input"
        />
        <button onClick={handleSubmit} className="todo-button">
          Submit
        </button>
      </div>

      <div>
        {todos.map((data, index) => (
          <div key={index} className="todo-item">
            <span>{data}</span>
            <button onClick={() => handleDelete(index)} className="delete-button">
              Delete
            </button>
          </div>
        ))}
      </div>

      {error && <p className="error-text">{error}</p>}
    </div>
  );
}

export default AddTodo;
