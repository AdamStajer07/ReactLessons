import React, { useEffect, useState } from 'react'


function HooksEffect() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(()=>{
        document.title = `You clicked ${count*2}/2 times`
    }, [count])

    useEffect(()=>{
        console.log(name)
    }, [name])

  return (
    <>
        <button onClick={()=>{setCount(c=>c+1)}}>Click {count} times</button>  
        <input type="text" onChange={(e)=>{setName(e.currentTarget.value)}} value={name} />
    </>
  )
}

export default HooksEffect