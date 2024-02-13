import React, { useState } from 'react'

function List() {
  const [list, setList] = useState([])
  const [name, setName] = useState('')

  const handleForm = (e) => {
    e.preventDefault()
    setList([...list, name])
  }
  
  return (
    <>
        <p>Dodaj przedmiot do list</p>
        <form onSubmit={handleForm}>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
            <button type='submit'>Dodaj</button>
        </form>
        {list.length > 0 && list.map((item, index) => {
            return <p key={index}>{index}: {item}</p>
        })}
    </>
  )
}

export default List