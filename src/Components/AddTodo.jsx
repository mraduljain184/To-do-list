import React, { useState } from "react";

const AddTodo = ({ onAdd }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    onAdd(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mt-5">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="p-2 rounded-md border border-gray-400 text-white"
        placeholder="Add a new task..."
      />
      <button
        type="submit"
        className=" text-white px-4 py-2 rounded-md hover:bg-[#62929E] transition-all easy-in-out duration-300"
      >
        Add
      </button>
    </form>
  );
};

export default AddTodo;