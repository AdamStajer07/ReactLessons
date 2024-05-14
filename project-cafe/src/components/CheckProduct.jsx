import React from 'react'
import { useNavigate } from 'react-router-dom'

function CheckProduct({name, value}) {
    const navigate = useNavigate()
    
    const eventHandling = () => {
        navigate(`/product/${name}/${value}`)
    }
  return (
    <div className='check-product' style={{backgroundImage: `url('../img/${name}.jpg'`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`}} onClick={eventHandling}>
        <h1 className='check-product__title'>{name}</h1>
    </div>
  )
}

export default CheckProduct