import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  return (
    <nav className='navbar'>
        <div onClick={()=>navigate('/')}>Home</div>
        <div onClick={()=>navigate('/products')}>Products</div>
    </nav>
  )
}

export default Navbar