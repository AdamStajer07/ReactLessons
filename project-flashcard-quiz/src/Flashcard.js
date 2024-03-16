import React, { useState } from 'react'

export default function Flashcard({flashcard}) {
    const [flip, setFlip] = useState(false)
  return (
    <div className={`card ${flip ? 'flip' : ''}`} onClick={()=>setFlip(!flip)}>
        <div className='front'>
            {flashcard.question}
            <div className='flashcard-options'>
                {flashcard.options.map((option, index)=>{
                    return <div className='flashcard-option' key={index}>{option}</div>
                })}
            </div>
        </div>
        <div className='back'>{flashcard.answer}</div>
        {/* {flip ? flashcard.number : flashcard.question} */}
    </div>
  )
}