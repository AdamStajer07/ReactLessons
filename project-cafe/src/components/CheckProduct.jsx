import React from 'react'
import { useNavigate } from 'react-router-dom'

function CheckProduct({name, value}) {
    const navigate = useNavigate()
    
    const eventHandling = () => {
        navigate(`/product/${name}/${value}`)
    }
  return (
    <>
        <h1>{name}</h1>
        <button onClick={eventHandling}>zamów</button>
    </>
  )
}

export default CheckProduct