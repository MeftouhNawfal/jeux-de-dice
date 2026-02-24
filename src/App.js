import React from "react";
import JeuDe from "./JeuDe";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* face cachée passée en props */}
      <JeuDe secretFace={2} />
    </div>
  );
}

export default App;
