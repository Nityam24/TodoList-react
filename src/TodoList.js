import React from "react";
import Bar from "./Bar";

export default function TodoList() {
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
