import { useEffect, useState } from "react"
import NotesList from "./components/NotesList"
import {nanoid} from 'nanoid'
import Search from "./components/Search"
import Header from "./components/Header"
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
const [searchText, setSearchText]=useState('')

const[darkMode,setDarkMode]=useState(false)

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

const deleteNote=(id)=>{
  const newNote=notes.filter((note)=>note.id !== id)
     setNotes(newNote)
} 
useEffect(()=>{
  const saved=JSON.parse(localStorage.getItem('notzy-data'))
  if (saved){
    setNotes(saved)
  }
  }, [])

useEffect(()=>{
    localStorage.setItem('notzy-data',JSON.stringify(notes))
}, [notes])
  return(
    <div className={darkMode && 'dark-mode'}>
      <div className="container">
      <Header handleDarkMode={setDarkMode} />
      <Search handleSearchNote={setSearchText}/>
      {searchText && searchText?
      <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))}
       handleAddNote={addNote} 
       handleDeleteNote={deleteNote}/>
       :<NotesList notes={notes}
       handleAddNote={addNote} 
       handleDeleteNote={deleteNote}/>}
      
    </div>
    </div>
    
  )
}
export default App