import React from "react";
import "./App.css";

import Sidebar from "./components/sidebar/sidebar";
import Editor from "./components/editor/editor";

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <Editor />
    </div>
  );
};

export default App;
