import React, { useState } from 'react'

const initState = ['Bruce', 'Wayne']

export const ArrayUseState = () => {
    const [persons, setPersons] = useState(initState)
    const handleClick = () => {
        // persons.push('Clark')
        // persons.push('Kent')
        // setPersons(persons)

        const newPersons = [...persons]
        newPersons.push('Clark')
        newPersons.push('Kent')
        setPersons(newPersons)
    }
    console.log('array useState re-render')
  return (
    <div>
        <button onClick={handleClick}>click</button>
        {persons.map(el=>(
            <div key={el}>{el}</div>
        ))}
    </div>
  )
}
