import { useState, useEffect, useRef } from "react";
import useScroll from "../hooks/useScroll";

const List = () => {
  const [todos, setTodos] = useState([]);
  const [page, setPages] = useState(1);
  const LIMIT = 20;
  const parentRef = useRef();
  const childRef = useRef();

  const intersecting = useScroll(parentRef, childRef, () =>
    fetchTodos(page, LIMIT)
  );

  function fetchTodos(page, LIMIT) {
    fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=${LIMIT}&_page=${page}`
    )
      .then((response) => response.json())
      .then((json) => {
        setTodos((prev) => [...prev, ...json]);
        setPages((prev) => prev + 1);
      });
  }

  return (
    <div style={{ height: "80vh", overflow: "auto" }} ref={parentRef}>
      {todos.map((todo) => (
        <div key={todo.id} style={{ padding: 30, border: "2px solid black" }}>
          {todo.id} {todo.title}
        </div>
      ))}
      <div ref={childRef} style={{ height: 20, background: "green" }}></div>
    </div>
  );
};

export default List;
