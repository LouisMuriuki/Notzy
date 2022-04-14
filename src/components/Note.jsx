import React from 'react'
import {MdDeleteForever} from 'react-icons/md'
function Note({id,text,date,handleDeleteNote}) {

  const deletenote=()=>{
handleDeleteNote(id)
  }
  return (
    <div className='note'>
        <span>{text}</span>
        <div className="note-footer">
            <small>{date}</small>
            <MdDeleteForever className="delete-icon" onClick={deletenote}size='1.3em'/>
        </div>
        
    </div>
  )
}

export default Note