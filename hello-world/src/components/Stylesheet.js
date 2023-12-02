import React from 'react'
import './MyStyles.css'

const paragraph = {
    color: 'gray',
    fontWeight: 'bold'
}

function Stylesheet(props) {
    let className = props.primary ? 'primary' : ''
  return (
    <div>
        {/* .CSS file styling */}
        <h1 className={`${className} font-xl`}>Stylesheet</h1>
        
        {/* Inline styling */}
        <p style={paragraph}>paragraph</p>
    </div>
  )
}

export default Stylesheet