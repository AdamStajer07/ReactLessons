import React, { useEffect, useState } from 'react'

function HooksEffect4() {
    const [count, setCount] = useState(0)
    const tick = () => {
        setCount(prevCount => prevCount+1)
    }
    useEffect(()=>{
        const interval = setInterval(tick, 1000);
        return () => {
            clearInterval(interval)
        }
    }, [])
  return (
    <div>{count}</div>
  )
}

export default HooksEffect4