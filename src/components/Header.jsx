import React from 'react'

function Header({handleDarkMode}) { 
    const onClick=()=>{
        handleDarkMode((prev)=>!prev)
    }
  return (
    <div className='header'>
        <h1>Notzy</h1>
        <button onClick={onClick} className='save'>Light/Dark Mode</button>
    </div>
  )
}

export default Header