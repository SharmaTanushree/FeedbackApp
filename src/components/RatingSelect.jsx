import React,{useState} from 'react'

function RatingSelect({select,selected}) {

  const handleChange = (e)=>{
    
    select(+e.currentTarget.value);
  }

  return (
    <ul className='rating'>
        {Array.from({length:10},(v,i)=>{
            const ratingValue = i+1;
            return(
                <li key={`rating${i+1}`}>
                    <input 
              type="radio"
              id = {`num${i+1}`}
              value = {i+1}
              name = 'rating'
              checked = {selected === i+1}
              onChange={handleChange}
            />
            <label htmlFor={`num${i+1}`}>{i+1}</label>
                </li>
            )
        })}
       

    </ul>
  )
}

export default RatingSelect