import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomeSingleProduct({name, value, img}) {
    const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/product/${name}/${value}`)} className='home-single-product'>
        <h1>{name}</h1>
        <img src={img} alt="image" />
        <p>{value}zł</p>
    </div>
  )
}

export default HomeSingleProduct