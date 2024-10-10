import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  // this is for adding the expanding effect of the notes area when we open the website
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  //this function is to make changes in the already existed note above in const
  //name will hold either title or take a note on the basis of the event being clicked below in html
  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value, //at that name of the field the new value will be put added by the user
      };
    });
  }

  // After clicking the add button this function is to submit the
  //note into the notes array where all the prev notes are stored
  //allready
  function submitNote(event) {
    props.onAdd(note); //calling the app function in app.jsx file with the current created node as the argument
    setNote({
      //this is t clearing the note once it is added
      title: "",
      content: "",
    });
    event.preventDefault(); //this is to prevent entire reloading of the page
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
