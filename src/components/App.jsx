import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

//this function will be called by its child FILE TO ADD THE NOTE
//CREATED OVER THERE INTO THE LIST OF ALREADY CREATED NOTES
//THIS WILL BE PASSED AS THE PROPS BELOW
function App() {
  const [notes, setNotes] = useState([]);

  //this function is actually adding the new note into the list of previous notes
  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  //this function is actually deleting the note when delte button is clicked
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
