import React, { useContext } from "react";
import { FirebaseContext } from "./firebase";

class Notes {
  constructor() {
    this.notes = null;
    this.selectedNoteIndex = null;
    initFirebase();
  }

  initFirebase = () => {
    const firebase = useContext(FirebaseContext);
    firebase
      .firestore()
      .collection("notes")
      .onSnapshot(serverUpdate => {
        const notes = serverUpdate.docs.map(doc => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        console.log(notes);
        this.notes = notes;
      });
  };

  notes = () => this.notes;
  selectedIndex = () => this.selectedIndex;
}

export const NotesContext = React.createContext(Notes);
