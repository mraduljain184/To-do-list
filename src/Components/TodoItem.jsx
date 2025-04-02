import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const TodoItem = ({ task, onDelete }) => {
  const taskRef = useRef(null);

  useEffect(() => {
    gsap.from(taskRef.current, { opacity: 0, y: 10, duration: 0.4 });
  }, []);

  const handleDelete = () => {
    gsap.to(taskRef.current, {
      opacity: 0,
      x: 50,
      duration: 0.3,
      onComplete: () => onDelete(task),
    });
  };

  return (
    <div
      ref={taskRef}
      className="flex text-black justify-between bg-[#C6C5B9] p-3 rounded-xl shadow-md mt-2"
    >
      <span>{task}</span>
      <button
        onClick={handleDelete}
        className="bg-[#4B3B47] text-white px-2 py-1 rounded-md hover:bg-red-700 transition"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;