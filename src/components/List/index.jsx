import React from "react";

export default function List({ items, handleCheckboxChange }) {
  const handleDelete = (id) => {
    console.log(id);
  };

  return (
    <ul className="todo-main">
      {items.map((item) => (
        <li key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.completed ? true : false}
              onChange={() => handleCheckboxChange(item.id)}
            />
            <span>{item.name}</span>
          </label>
          <button
            className="btn btn-danger"
            style={{ display: "none" }}
            onClick={() => handleDelete(item.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
