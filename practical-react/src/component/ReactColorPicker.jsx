import React, { useState } from 'react'
import { ChromePicker } from 'react-color'

function ReactColorPicker() {
    const [color, setColor] = useState('#fff')
    const [showColorPicker, setShowColorPicker] = useState(false)
  return (
    <div>
        <button onClick={()=>setShowColorPicker(!showColorPicker)}>{showColorPicker ? 'Close color picker' : 'Pick a color'}</button>
        {
            showColorPicker 
            && <ChromePicker color={color} onChange={updatedColor=>setColor(updatedColor.hex)}/>
        }
        <h2>You picked {color}</h2>
    </div>
  )
}

export default ReactColorPicker