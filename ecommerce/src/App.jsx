import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${name || "User"}!`);
    setName("");
  };

  return (
    <div className="app-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-box"
        />
        <button type="submit" className="submit-btn">Submit</button>
      </form>

      <h1 className="counter-heading">Count: {count}</h1>

      <div className="button-group">
        <button onClick={() => setCount(count + 1)} className="action-btn">Increase</button>
        <button onClick={() => setCount(count - 1)} className="action-btn">Decrease</button>
        <button onClick={() => setCount(0)} className="action-btn">Reset</button>
      </div>
    </div>
  );
};

export default App;
