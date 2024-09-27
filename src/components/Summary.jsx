import React, { useContext } from 'react'
import { FeedbackContext} from '../contexts/FeedbackProvider';

function Summary() {
    const {feedbackList=[]} = useContext(FeedbackContext);
    const averageRating = feedbackList.length ===0 
    ? 0 
    :feedbackList.reduce((acc,cur)=>{return acc + cur.rating},0)/feedbackList.length;
    return (
    <div className="feedback-summary">
       <h4>{feedbackList.length} reviews</h4>
       <h4>Average Rating: {averageRating}</h4>
    </div>
  )
}

export default Summary