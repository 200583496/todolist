import React from "react";

export default function Footer() {
  return (
    <div className="todo-footer">
      <label>
        <input type="checkbox" />
      </label>
      <span>
        <span>Completed 0</span> / Total 2
      </span>
      <button className="btn btn-danger">Clear Completed Tasks</button>
    </div>
  );
}
