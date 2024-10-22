import React, { useContext } from 'react'
import FeedBackItem from './FeedBackItem'
import { FeedbackContext } from '../contexts/FeedbackProvider'

function FeedbackList() {
 const {feedbackList, isLoading} = useContext(FeedbackContext);

if(!isLoading && (!feedbackList || feedbackList.length <=0)){
   return <p>No Feedback Yet</p>
}
return isLoading? (<p>Loading...</p>) : (
   <div className="feedback-list">
   {feedbackList.map(item => (
      <FeedBackItem key={item.id} item={item}/>
   ))}
   </div>
)   
 

}

export default FeedbackList