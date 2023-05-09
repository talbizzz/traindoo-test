import React from "react";
import "./App.css";
import { TestComponent } from "./components/TestComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent title="Test Component" />
      </header>
    </div>
  );
}

export default App;
