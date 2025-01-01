import React, { useState } from 'react'
import Item from './Item'

function Form() {
    const [value, setValue] = useState("")
    const [list, setList] = useState([])

    const addItem = () => {
        setList([...list, value])
    }

    const deleteItem = (idx) => {
        console.log(idx)
        const newList = list.filter((item, index) => index != idx )
        console.log(newList)
        setList(newList)
    }
    
  return (
    <>
        <input value={value} onChange={e=>setValue(e.target.value)} />
        <button onClick={addItem}>Dodaj</button>
        {list.map((item, index) => {
            return <div key={index} onClick={()=>deleteItem(index)}>
                <Item  idx={index} name={item}  />
            </div>
        })}
    </>
  )
}

export default Form