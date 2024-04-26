import React, { useState } from 'react'
import {ordered, restocked} from './cakeSlice'
import { useDispatch, useSelector } from 'react-redux'

export const CakeView = () => {
  const [value, setValue] = useState(1)
  const numOfCakes = useSelector((state) => state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
        <h2>Num of cakes - {numOfCakes}</h2>
        <button onClick={()=>dispatch(ordered())}>Buy cake</button>
        <input type="number" onChange={(e)=>setValue(e.target.value)} value={value}/>
        <button onClick={()=>dispatch(restocked(value))}>Restock cake</button>
    </div>
  )
}
