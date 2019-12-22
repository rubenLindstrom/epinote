import React, { useState } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import List from "@material-ui/core/List";
import { Divider, Button } from "@material-ui/core";
import SidebarItem from "../sidebarItem/sidebarItem";

const Sidebar = props => {
  const [addingNote, setAddingNote] = useState(false);
  const [title, setTitle] = useState(null);

  const handleNewNote = () => {
    setAddingNote(prevState => !prevState);
    setTitle("");
  };

  const updateTitle = value => {
    setTitle(value);
  };

  const newNote = () => {};

  const handleNoteSelected = () => {};
  const onDelete = () => {};

  const { notes, classes, selectedNoteIndex } = props;
  return (
    <div className={classes.sidebarContainer}>
      <Button onClick={handleNewNote} className={classes.newNoteBtn}>
        {addingNote ? "Cancel" : "New Note"}
      </Button>
      {addingNote && (
        <div>
          <input
            type="text"
            className={classes.newNoteInput}
            placeholder="Enter note title..."
            onKeyUp={e => updateTitle(e.target.value)}
          />
          <Button className={classes.newNoteSubmitBtn} onClick={newNote}>
            Submit Note
          </Button>
        </div>
      )}

      {!notes ? (
        <div>Loading notes...</div>
      ) : (
        <List>
          {notes.map((note, idx) => (
            <div key={idx}>
              <SidebarItem
                note={note}
                index={idx}
                selectedNoteIndex={selectedNoteIndex}
                onSelect={handleNoteSelected}
                onDelete={onDelete}
              ></SidebarItem>
              <Divider></Divider>
            </div>
          ))}
        </List>
      )}
    </div>
  );
};

Sidebar.propTypes = {
  // TODO: Add note shapes
  notes: PropTypes.array.isRequired,
  classes: PropTypes.array.isRequired,
  selectedNoteIndex: PropTypes.number.isRequired
};

export default withStyles(styles)(Sidebar);
