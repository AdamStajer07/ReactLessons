import React from 'react'

function Person({el}) {
  return (
    <div>
        <h2>{el.name}</h2>
        <p>Age: {el.age}</p>
        <p>Skill: {el.skill}</p>
    </div>
  )
}

export default Person