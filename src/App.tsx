import React, { useEffect } from "react";
import "./App.css";
import Draw from "./score";

function App() {
  useEffect(() => {
    Draw();
  }, []);

  return (
    <div className="App">
      <div id="score"></div>
    </div>
  );
}

export default App;
