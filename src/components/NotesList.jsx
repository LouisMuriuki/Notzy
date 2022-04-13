import React from 'react'
import AddNote from './AddNote';
import Note from "./Note";

function NotesList({notes,handleAddNote}) {
  return (
    <div className='notes-list'>
      {notes.map((note)=>{
       return (<Note id={note.id} text={note.text} date={note.date}/> )
      })}  <AddNote handleNote={handleAddNote}/>
    </div>
  )
}

export default NotesList