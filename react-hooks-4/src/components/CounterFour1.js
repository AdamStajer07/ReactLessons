import React, { useContext } from 'react'
import { CountContext } from '../App'

function CounterFour1() {
    const {countState, countDispatch} = useContext(CountContext)
  return (
    <div>
        {countState}
        <button onClick={()=>countDispatch('increment')}>increment</button>
    </div>
  )
}

export default CounterFour1