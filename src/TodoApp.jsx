import React, { useState } from "react";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleAddTask = () => {
    if (inputText.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: inputText,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setInputText("");
    }
  };

  const handleToggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <div className="todo-wrapper">
      <h1 className="todo-title">Todo App</h1>
      <input
        className="todo-input"
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter task..."
      />
      <button className="todo-add" onClick={handleAddTask}>Add Task</button>
      <div className="todo-listwrapper">
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input className="todo-checkbox"
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
            />
            <span 
            className="todo-items"
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                color: task.completed ? "#ff0000" : ""
              }}
            >
              {task.text}
            </span>
          </li>
        ))}
      </ul>
      </div>
    </div>
    </div>
  );
};

export default TodoApp;
