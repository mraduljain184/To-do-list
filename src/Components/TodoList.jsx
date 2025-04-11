import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete }) => {
  const listRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      listRef.current.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.1 }
    );
  }, [todos]);

  return (
    <div className="mt-5 w-96" ref={listRef}>
      {todos.length === 0 ? (
        <p className="text-gray-400 text-center">No tasks yet.</p>
      ) : (
        todos.map((task, index) => (
          <TodoItem key={index} task={task} onDelete={onDelete} />
        ))
      )}
    </div>
  );
};

export default TodoList;