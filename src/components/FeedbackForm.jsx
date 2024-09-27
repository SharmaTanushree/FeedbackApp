import React, { useEffect } from 'react'
import { useState, useContext } from 'react'
import Card from './Card';
import Button from './Button'
import RatingSelect from './RatingSelect';
import {FeedbackContext } from '../contexts/FeedbackProvider';

function FeedbackForm(){
 const [review, setReview] = useState('');
 const [rating,setRating] = useState(10);
 const [buttonDisabled,setBtnDisabled] = useState(true);
 const [errorMessage, setErmessage] = useState('');
 const {addFeedback, editFeedback, putFeedback} = useContext(FeedbackContext);

 useEffect(()=>{
    if(editFeedback.edit){
        setReview(editFeedback.item.text);
        setRating(editFeedback.item.rating);
        setBtnDisabled(false);
    }
 },[editFeedback])
 const handleChange = (e)=>{
    
      if(review === ''){
        setErmessage('');
        setBtnDisabled(true);
      }
      else if(review !== '' && review.trim().length < 10){
        setBtnDisabled(true);
        setErmessage('Please enter at least 10 characters');
      }
      else{
        setBtnDisabled(false);
        setErmessage(null);
      }

      setReview(e.target.value);
 }

 const handleSelect = (e)=>{
    setRating(e);
 }

 const handleSubmit = (e)=>{
    e.preventDefault();
    if(review.trim().length > 10){
        const newFeedback = {
            text: review,
            rating
        }
        if(editFeedback.edit === true){
           putFeedback(editFeedback.item.id, newFeedback);
           editFeedback.edit = false;
        }
        else{ 
          addFeedback(newFeedback);
        }
        setReview('');
        setRating(10);
        setBtnDisabled(true);
    }
 }

  return (
    <Card>
     <form className='form' onSubmit={handleSubmit}>
        <h2>Please give us your feedback</h2>
        <RatingSelect select={handleSelect} selected={rating}></RatingSelect>

        <div className='input-group'>
        <input onChange={handleChange} type="text"  placeholder='Enter your review' value = {review}/> &nbsp;&nbsp;
        <Button type='submit' version="primary" isDisabled={buttonDisabled} >Submit</Button>
        </div>
        {errorMessage && <div className='error-message'>{errorMessage}</div>}
     </form>
    </Card>
  )
}

export default FeedbackForm