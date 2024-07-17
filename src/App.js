import React from "react";
import "./App.css"; // اضافه کردن فایل CSS جدید
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <div className="navbar">My App</div>
      <Login />
    </div>
  );
}

export default App;
