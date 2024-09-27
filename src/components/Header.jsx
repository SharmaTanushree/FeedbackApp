import React from 'react'
import PropTypes from 'prop-types'

function Header({text,bgColor,textColor}) {
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