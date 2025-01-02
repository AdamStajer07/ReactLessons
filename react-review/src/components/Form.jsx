import React, { useEffect, useState } from 'react'
import Item from './Item'

function Form() {
    const [value, setValue] = useState("")
    const [lengthOfList, setLengthOfList] = useState(0)
    const [list, setList] = useState([])

    useEffect(() => {
        setLengthOfList(list.length)
    }, [list])

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
        {
            lengthOfList != 0 ? <h2>Ilość elementów: {lengthOfList}</h2> : <h2>Brak elementów</h2>
        }
        {list.map((item, index) => {
            return <div key={index} onClick={()=>deleteItem(index)} className='item' >
                <Item  num={index+1} name={item} />
            </div>
        })}
    </>
  )
}

export default Form