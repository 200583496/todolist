import React from "react";

export default function Footer({
  items,
  handleCheckAll,
  handleClearCompleted,
}) {
  const completedCount = items.filter((item) => item.completed).length;
  const totalCount = items.length;

  return (
    <div className="todo-footer">
      <label>
        <input
          type="checkbox"
          checked={completedCount === totalCount && totalCount > 0}
          onChange={handleCheckAll}
        />
      </label>
      <span>
        <span>Completed {completedCount}</span> / Total {totalCount}
      </span>
      <button
        className="btn btn-danger"
        onClick={handleClearCompleted}
        style={{ display: completedCount === 0 ? "none" : "block" }}
      >
        Clear Completed Tasks
      </button>
    </div>
  );
}
