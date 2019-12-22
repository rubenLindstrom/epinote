import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import { FirebaseContext } from "./contexts/firebase";

const App = () => {
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
  const [selectedNote, setSelectedNote] = useState(null);
  const [notes, setNotes] = useState(null);

  useEffect(() => {}, []);

  return (
    <div className="App">
      <h1>App</h1>
    </div>
  );
};

export default App;
