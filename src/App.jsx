import React, { useState, useEffect } from "react";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";

function App() {

  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });
  

  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (task) => setTodos([...todos, task]);
  const deleteTodo = (taskToDelete) =>
    setTodos(todos.filter((task) => task !== taskToDelete));

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#546A7B] text-white p-5">
      <div className="bg-[#393D3F] bg-opacity-10 backdrop-blur-lg rounded-3xl p-6 w-96 shadow-2xl">
        <h1 className="text-3xl font-bold text-center mb-5">To-Do List</h1>
        <AddTodo onAdd={addTodo} />
        <TodoList todos={todos} onDelete={deleteTodo} />
      </div>
    </div>
  );
}

export default App;