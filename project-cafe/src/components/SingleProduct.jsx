import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ordered } from '../redux/itemSlice'
import { useParams } from 'react-router-dom'

function SingleProduct() {
    const dispatch = useDispatch()
    const {itemName, itemValue} = useParams()
    
    const [count, setCount] = useState(1)
  
    const eventHandling = () => {
      dispatch(ordered({name: itemName, value: itemValue, count: count}))
    }
    
    return (
      <>
        <h1>{itemName}</h1>

        <p>{itemValue}zł</p>
        <input type="number" value={count} onChange={(e)=>setCount(e.target.value)}/>
        <button onClick={eventHandling}>Dodaj</button>
      </>
    )
}

export default SingleProduct