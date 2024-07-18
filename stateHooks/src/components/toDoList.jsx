import { useState } from "react";

function ToDoList() {
  const [todos, setTodos] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const removeTask = (index) => {
    const newTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(newTodos);
  };

  return (
    <div id="div-toDo">
      {""}
      <h1>To Do List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTask}>Adicionar Tarefa</button>
      <ul>
        {""}
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <button id="button-remove" onClick={() => removeTask(index)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
