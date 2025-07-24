import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="todo-container">
        <div className="todo-wrap">
          <div className="todo-header">
            <input
              type="text"
              placeholder="Enter your task name and press Enter to confirm"
            />
          </div>
          <ul className="todo-main">
            <li>
              <label>
                <input type="checkbox" />
                <span>assignment 1</span>
              </label>
              <button className="btn btn-danger" style={{ display: "none" }}>
                Delete
              </button>
            </li>
            <li>
              <label>
                <input type="checkbox" />
                <span>quiz #3</span>
              </label>
              <button className="btn btn-danger" style={{ display: "none" }}>
                Delete
              </button>
            </li>
          </ul>
          <div className="todo-footer">
            <label>
              <input type="checkbox" />
            </label>
            <span>
              <span>Completed 0</span> / Total 2
            </span>
            <button className="btn btn-danger">Clear Completed Tasks</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
