import React from "react";

export default function Bar({ Task }) {
  return (
    <div className="list">
      <input type="checkbox" />
      <span>{Task}</span>
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
