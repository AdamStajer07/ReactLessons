import React, { useEffect, useState } from 'react'

function HooksEffect2() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (e)=>{
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)  
        return () => {
          console.log('unmounting code')
          window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])
  return (
    <>
        Hooks - x: {x}, y: {y}
    </>
  )
}

export default HooksEffect2