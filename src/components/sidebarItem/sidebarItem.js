import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import { removeHTMLTags } from "../../helpers";

const sidebarItem = props => {
  const deleteNote = e => {
    // TODO: Design something cool here instead
    if (window.confirm(`Are you sure you want to delete: ${title}`))
      onDelete(note);
  };

  const { index, note, classes, selectedNoteIndex, onDelete, onSelect } = props;
  const { title, body } = note;
  return (
    <div>
      <ListItem
        classes={classes.listItem}
        selected={selectedNoteIndex === index}
        alignItems="flex-start"
      >
        <div
          className={classes.textSection}
          onClick={() => onSelect(note, index)}
        >
          <ListItemText
            primary={note.title}
            secondary={removeHTMLTags(
              note.body.substring(0) + (note.body.length >= 30 ? "..." : "")
            )}
          ></ListItemText>
        </div>
        <DeleteIcon
          className={classes.deleteIcon}
          onClick={deleteNote}
        ></DeleteIcon>
      </ListItem>
    </div>
  );
};

sidebarItem.propTypes = {
  index: PropTypes.number.isRequired,
  // TODO: Complete note shape
  note: PropTypes.shape().isRequired,
  classes: PropTypes.shape().isRequired,
  selectedNoteIndex: PropTypes.number.isRequired
};

export default withStyles(styles)(sidebarItem);
