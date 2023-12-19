import React, { useReducer } from 'react';
import './App.css';
import CounterFour1 from './components/CounterFour1';
import CounterOne from './components/CounterOne';
import CounterThree from './components/CounterThree';
import CounterTwo from './components/CounterTwo';
import CounterFour2 from './components/CounterFour2';
import CounterFour3 from './components/CounterFour3';

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, aciton) => {
    switch(aciton) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      {/* <CounterOne/> */}
      {/* <CounterTwo/> */}
      {/* <CounterThree/> */}
      
      {count}
      <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
        <CounterFour1/>
        <CounterFour2/>
        <CounterFour3/>
      </CountContext.Provider>
    </>
  );
}

export default App;
