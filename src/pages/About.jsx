import React from 'react'
import { Link} from 'react-router-dom'

function About() {
  
  return (
    <div className='about'>
        <h2>Its a feedback application</h2>
        <Link to='/'>Home</Link>
    </div>
  )
}

export default About