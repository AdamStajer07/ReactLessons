import React, { useState } from 'react'

function LogicOperator() {
  const [showText, setShowText] = useState(false)
  return (
    <>
        <button onClick={()=>setShowText(!showText)}>Pokaż text</button>
        {showText && <p>Przykładowy text</p>}
    </>
  )
}

export default LogicOperator