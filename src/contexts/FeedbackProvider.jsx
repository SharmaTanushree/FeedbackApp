import React from 'react';
import { createContext, useState, useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';


export const FeedbackContext = createContext();
export const FeedbackProvider = ({children}) =>{
  const[feedbacks, setFeedbacks] = useState();
  const[editFeedback, setEditFeedback] = useState({item: {}, edit: false});
  const[isLoading, setIsLoading] = useState(true);
  

  useEffect(()=>{
    getFeedbacks();
  },[])

  const  getFeedbacks = async()=>{
    setIsLoading(true);
    let  data = await fetch('/feedback');
    let res = await data.json();
    setFeedbacks(res);
    setIsLoading(false);
  }

  const addFeedback = async (newFeedback)=>{
    const response = await fetch('/feedback',{
       method: 'POST',
       headers: {
         'Content-Type' : 'application/json',
         
       },
       body: JSON.stringify(newFeedback)
    });
    const data = await response.json();
 
    setFeedbacks([...feedbacks,data]);
 }

 const deleteFeedback = (id) =>{
    if(window.confirm('Are you sure you want to delete?')){
        fetch(`/feedback/${id}`, {method:'DELETE'});
        setFeedbacks(feedbacks.filter(item=>item.id !== id));
    }
 }

 const putFeedback = async(id,feedback)=>{
   const response = await fetch(`/feedback/${id}`,{
     method: 'PUT',
     headers:{
       'Content-Type' : 'application/json'
     },
     body: JSON.stringify(feedback)
   });
   const data = await response.json();
    setFeedbacks(feedbacks.map(item=> item.id === id ?{...item,...data} :item));
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
        isLoading,
        editFeedback,
        putFeedback
     }}
    >{children}</FeedbackContext.Provider>
  )
}
