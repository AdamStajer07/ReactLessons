import React, {useState} from 'react'

function App() {
  const [color, setColor] = useState('')
  
  function randomColor(type) {
    const r = Math.floor(Math.random()*255)
    const g = Math.floor(Math.random()*255)
    const b = Math.floor(Math.random()*255)

    let val = `rgb(${r}, ${g}, ${b})`
    if(type=='hex') {
      function toHex(c) {
        c = c.toString(16)
        return c.length == 1 ? '0'+c:c  
      }  
      val = `#${toHex(r)}${toHex(g)}${toHex(b)}`
   }
    setColor(val)
  }
  
  return (
    <main style={{background: color}}>
      
      <button onClick={()=>randomColor('rgb')} className='btn'>Random rgb color</button>
      <button onClick={()=>randomColor('hex')} className='btn'>Random hex color</button>
      {color&&<p>value: {color}</p>}
    </main>
  );
}

export default App;
