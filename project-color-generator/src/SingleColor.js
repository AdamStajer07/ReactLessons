import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index, hexColor}) => {
  const [alert,setAlert] = useState(false)
  const bcg = rgb.join(',')
  useEffect(()=>{
    const timeaut = setTimeout(() => {
      setAlert(false)
    }, 300);
    return () => {
      clearTimeout(timeaut)
    }
  }, [alert])
  return <article className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor: `rgb(${bcg})`}} onClick={()=>{
    setAlert(true)
    navigator.clipboard.writeText(`#${hexColor}`)
  }}>
    <p className='percent-value'>{weight}%</p>
    <p className='color-value'>#{hexColor}</p>
    {alert && <p className='alert'>
        copied to clipboard
      </p>}
  </article>
}

export default SingleColor