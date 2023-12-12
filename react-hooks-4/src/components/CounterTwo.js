import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state, aciton) => {
    switch(aciton.type) {
        case 'increment':
            return {...state, firstCounter: state.firstCounter + aciton.value}
        case 'decrement':
            return {...state, firstCounter: state.firstCounter - aciton.value}
        case 'increment2':
            return {...state, secondCounter: state.secondCounter + aciton.value}
        case 'decrement2':
            return {...state, secondCounter: state.secondCounter - aciton.value}
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <div>First Count - {count.firstCounter}</div>
        <button onClick={()=>dispatch({type: 'increment', value: 1})}>Increment</button>
        <button onClick={()=>dispatch({type: 'decrement', value: 1})}>Decrement</button>
        <div>Second Count - {count.secondCounter}</div>
        <button onClick={()=>dispatch({type: 'increment2', value: 5})}>Increment x5</button>
        <button onClick={()=>dispatch({type: 'decrement2', value: 5})}>Decrement x5</button>
        <div>
            <button onClick={()=>dispatch({type: 'reset'})}>Reset</button>
        </div>
    </div>
  )
}

export default CounterTwo