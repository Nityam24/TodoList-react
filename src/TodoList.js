import React from "react";
import Bar from "./Bar";
import { useState } from "react";

export default function TodoList() {
  const [Todo, setTodo] = useState([<h1>No Todo</h1>]);
  const [Task, setTask] = useState("");

  function handleAddTodo() {
    setTask(e.target.value);
    setTodo([...Todo, <Bar task={Task} />]);
  }
  return (
    <main>
      <h1>Todo List</h1>
      <form>
        <input type="text" />
        <button onClick={handleAddTodo}>Add Todo</button>
        <button>Clear All</button>
      </form>
      <section>{Todo}</section>
    </main>
  );
}
