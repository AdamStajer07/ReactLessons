import React, { useContext } from 'react'
import { CountContext } from '../App'

function CounterFour2() {
    const {countState, countDispatch} = useContext(CountContext)
  return (
    <div>
        {countState}
        <button onClick={()=>countDispatch('decrement')}>decrement</button>
    </div>
  )
}

export default CounterFour2