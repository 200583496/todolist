import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

export default function App() {
  const [items, setItems] = useState([
    { id: uuidv4(), name: "assignment 1", completed: true },
    { id: uuidv4(), name: "quiz #2", completed: true },
    { id: uuidv4(), name: "quiz #3", completed: false },
  ]);

  const handleCheckboxChange = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(newItems);
  };

  const handleCheckAll = () => {
    const allCompleted = items.every((item) => item.completed);
    const newItems = items.map((item) => {
      return { ...item, completed: !allCompleted };
    });
    setItems(newItems);
  };

  const handleClearCompleted = () => {
    const newItems = items.filter((item) => !item.completed);
    setItems(newItems);
  };

  const handleAddItem = (name) => {
    const newItems = [...items, { id: uuidv4(), name, completed: false }];
    setItems(newItems);
  };

  const handleDeleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header handleAddItem={handleAddItem} />
        <List
          items={items}
          handleCheckboxChange={handleCheckboxChange}
          handleDeleteItem={handleDeleteItem}
        />
        <Footer
          items={items}
          handleCheckAll={handleCheckAll}
          handleClearCompleted={handleClearCompleted}
        />
      </div>
    </div>
  );
}
