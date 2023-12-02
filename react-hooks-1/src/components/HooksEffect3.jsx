import React, { useState } from 'react'
import HooksEffect2 from './HooksEffect2'

function HooksEffect3() {
    const [display, setDisplay] = useState(true)
  return (
    <div>
        <button onClick={()=>setDisplay(!display)}>Toggle display</button>
        {display && <HooksEffect2/>}
    </div>
  )
}

export default HooksEffect3