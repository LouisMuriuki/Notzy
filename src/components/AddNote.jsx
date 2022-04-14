import React, { useState } from 'react'

function AddNote({ handleNote }) {
    const [noteText, setNoteText] = useState('')
    const charactervalue = 250

    const onChange = (e) => {
        if(charactervalue-e.target.value.length>=0){
        setNoteText(e.target.value)
    }
    }

    const handleClick = () => {
        if (noteText.trim().length > 0) {
            handleNote(noteText)
            setNoteText("")
        }
        else{
            window.alert("Please add a note ")
        }
        

    }
    return (
        <div className='note new'>
            <textarea rows='8' cols='10' placeholder='Add new note...' value={noteText} onChange={onChange}></textarea>
            <div className="note-footer">
                <small>{charactervalue - noteText.length} Remaining</small>
                <button className='save' onClick={handleClick}>Save</button>
            </div>
        </div>
    )
}

export default AddNote