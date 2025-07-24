import "./App.css";

import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header />
        <List />
        <Footer />
      </div>
    </div>
  );
}
