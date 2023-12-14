import React, { useContext } from 'react'
import { CountContext } from '../App'

function CounterFour3() {
    const {countState, countDispatch} = useContext(CountContext)
  return (
    <div>
        {countState}
        <button onClick={()=>countDispatch('reset')}>reset</button>
    </div>
  )
}

export default CounterFour3