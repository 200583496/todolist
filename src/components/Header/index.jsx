import React from "react";

export default function Header({ handleAddItem }) {
  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      if (event.target.value.trim() === "") {
        alert("Please enter a task name");
      } else {
        handleAddItem(event.target.value);
        // clear the input field
        event.target.value = "";
      }
    }
  };

  return (
    <div className="todo-header">
      <input
        type="text"
        placeholder="Enter your task name and press Enter to confirm"
        onKeyUp={handleKeyUp}
      />
    </div>
  );
}
