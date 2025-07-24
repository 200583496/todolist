import React from "react";
import "./index.css";

export default function List({
  items,
  handleCheckboxChange,
  handleDeleteItem,
}) {
  return (
    <ul className="todo-main">
      {items.map((item) => (
        <li key={item.id} className="todo-item">
          <label>
            <input
              type="checkbox"
              checked={item.completed ? true : false}
              onChange={() => handleCheckboxChange(item.id)}
            />
            <span>{item.name}</span>
          </label>
          <button
            className="btn btn-danger delete-btn"
            onClick={() => handleDeleteItem(item.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
