import React from 'react'


function Header({bgColor,textColor}) {
  const header_style = {
    backgroundColor: bgColor,
    color: textColor
  }  
  return (
    <header style={header_style}>
        <h2>FeedBack UI</h2>
    </header>
  )
}



export default Header