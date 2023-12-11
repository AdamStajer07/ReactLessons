import React, { createContext, useState } from 'react';
import './App.css';
import Info from './components/Info';

export const DataContext = createContext()

function App() {
  const [data, setData] = useState({})
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [age, setAge] = useState(0)
  
  const handleSubmit = e => {
    e.preventDefault()
    setData({name: name, surname: surname, age: age})
    console.log(data)
  }
  return (
    <>
      <form >
        <input type='text' value={name} onChange={e=>setName(e.target.value)}/>
        <input type='text' value={surname} onChange={e=>setSurname(e.target.value)}/>
        <input type='number' value={age} onChange={e=>setAge(e.target.value)}/>
        <input type='button' value='Wyślij' onClick={handleSubmit}/>
      </form>
      {Object.keys(data).length != 0 ? 
        <DataContext.Provider value={data}>
          <Info/>
        </DataContext.Provider>  
        : ''
      }
    </>
  );
}

export default App;
