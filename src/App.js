import React from "react";
import Dashboard from "./components/Dashboard";
import Store from "./Store";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Store>
        <Dashboard />
      </Store>
    </div>
  );
}

export default App;
