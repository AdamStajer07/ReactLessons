import React, { useContext } from 'react'

import { DataContext } from '../App'

function Info() {
  const {name, surname, age} = useContext(DataContext)
  return (
    <>
        <h1>Witaj, {name} {surname}, lat {age}</h1>
    </>
  )
}

export default Info