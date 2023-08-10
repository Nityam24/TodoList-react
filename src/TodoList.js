import React from "react";
import Bar from "./Bar";
import { useState } from "react";

export default function TodoList() {
  const [Todo, setTodo] = useState([]);
  return (
    <main>
      <h1>Todo List</h1>
      <form>
        <input type="text" />
        <button>Add Todo</button>
        <button>Clear All</button>
      </form>
      <section>
        <Bar />
      </section>
    </main>
  );
}
