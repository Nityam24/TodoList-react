import React from "react";

export default function Bar({ todo }) {
  return (
    <div className="ist">
      <input type="checkbox" />
      <span>{todo}</span>
      <select>
        <option value="priority" selected>
          priority
        </option>
        <option value="high">high</option>
        <option value="medium">medium</option>
        <option value="low">low</option>
      </select>
      <button>Delete</button>
    </div>
  );
}
