import { useState } from "react"
import NotesList from "./components/NotesList"
import {nanoid} from 'nanoid'
const App=()=>{
  const [notes,setNotes]=useState([
    {
      id: nanoid(),
    text:"this is my first note",
    date:"12/1/2121"
  },  
  {
    id: nanoid(),
    text:"this is my second note",
    date:"12/2/2121"
  },
  {
    id: nanoid(),
    text:"this is my third note",
    date:"12/3/2121"
  },
])
const addNote=(text)=>{
  const date= new Date()
  const newNote={
    id:nanoid(),
    text:text,
    date:date.toLocaleDateString(),
  }
  const newNotes=[...notes, newNote]
   setNotes(newNotes)


}
  return(
    <div className="container">
      <NotesList notes={notes} handleAddNote={addNote}/>
    </div>
  )
}
export default App