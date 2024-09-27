import React from 'react';
import { createContext, useState, useEffect } from 'react';
import FeedbackData from '../data/feedbackData';
import {v4 as uuidv4} from 'uuid';


export const FeedbackContext = createContext();
export const FeedbackProvider = ({children}) =>{
  const[feedbacks, setFeedbacks] = useState();
  const[editFeedback, setEditFeedback] = useState({item: {}, edit: false});
  

  useEffect(()=>{
    setFeedbacks(FeedbackData)
  },[])

  const addFeedback = (newFeedback)=>{
    newFeedback.id = uuidv4();
    setFeedbacks([...feedbacks,newFeedback]);
 }

 const deleteFeedback = (id) =>{
    if(window.confirm('Are you sure you want to delete?')){
        setFeedbacks(feedbacks.filter(item=>item.id !== id));
    }
 }

 const putFeedback = (id,feedback)=>{
    setFeedbacks(feedbacks.map(item=> item.id === id ?{...item,...feedback} :item));
 }

const setEditFeedbackItem = (item)=>{
      
       setEditFeedback({item, edit:true});
       
}



  return (
    <FeedbackContext.Provider 
     value = {{
        feedbackList:feedbacks,
        addFeedback,
        deleteFeedback,
        setEditFeedbackItem,
        editFeedback,
        putFeedback
     }}
    >{children}</FeedbackContext.Provider>
  )
}
