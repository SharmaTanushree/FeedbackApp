import React, { useContext } from 'react'
import FeedBackItem from './FeedBackItem'
import { FeedbackContext } from '../contexts/FeedbackProvider'

function FeedbackList() {
 const {feedbackList} = useContext(FeedbackContext);
  
 if(feedbackList && feedbackList.length >0){
    return(
        <div className='feedback-list'>
           {
            feedbackList.map(item=>(
                <FeedBackItem key={item.id} item={item}></FeedBackItem>
            ))
           }
        </div>
    )
 }
 else{
    return <p>No Feedback Yet</p>
 }
}

export default FeedbackList