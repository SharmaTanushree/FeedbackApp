import {FaTimes, FaEdit} from 'react-icons/fa'
import React,{useContext} from 'react'
import Card from './Card'
import { FeedbackContext } from '../contexts/FeedbackProvider';

function FeedBackItem({item}) {
  const handleDelete = (id)=>deleteFeedback(id);
  const {setEditFeedbackItem, deleteFeedback} = useContext(FeedbackContext)
  return (
    <Card>
       <div className='num-display'>{item.rating}</div>
       <button className='edit' onClick={()=>{setEditFeedbackItem(item)}}>
        <FaEdit color='purple'/>
       </button>
       <button className='close' onClick={()=>{handleDelete(item.id)}}>
        <FaTimes color='purple'/>
       </button>
       <div className='text-display'>{item.text}</div>
    </Card>
  )
}

export default FeedBackItem