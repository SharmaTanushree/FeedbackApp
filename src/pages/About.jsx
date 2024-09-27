import React from 'react'
import { Link} from 'react-router-dom'
import Card from '../components/Card'

function About() {
  
  return (
    <Card>
    <div className='about'>
        <h1>Its a feedback application</h1>
        <p>This is a simple app to give feedback</p>
        <p>
        <Link to='/'>Home</Link>
        </p>
    </div>
    </Card>
  )
}

export default About