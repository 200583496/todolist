import React, { Component } from "react";

export default class List extends Component {
  render() {
    return (
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
    );
  }
}
