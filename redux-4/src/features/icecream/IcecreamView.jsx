import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {ordered, restocked} from './icecreamSlice'

export const IcecreamView = () => {
  const [value, setValue] = useState(1)
  
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams)
  const dispatch = useDispatch()
  return (
    <div>
        <h2>Num of icecream - {numOfIcecreams}</h2>
        <button onClick={()=>dispatch(ordered())}>Buy icecream</button>
        <input type="number" onChange={(e)=>setValue(e.target.value)} value={value}/>
        <button onClick={()=>dispatch(restocked(value))}>Restock cake</button>
    </div>
  )
}
