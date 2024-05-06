import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ordered } from '../redux/itemSlice'

function Product() {
  const dispatch = useDispatch()
  const value = 28
  
  // const [value, setValue] = useState('')
  const [count, setCount] = useState(1)

  const eventHandling = () => {
    dispatch(ordered({name: 'cake', value: value, count: count}))
  }
  
  return (
    <>
      <h1>Cake</h1>
      {/* <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/> */}
      <p>{value}zł</p>
      <input type="number" value={count} onChange={(e)=>setCount(e.target.value)}/>
      <button onClick={eventHandling}>Dodaj</button>
    </>
  )
}

export default Product