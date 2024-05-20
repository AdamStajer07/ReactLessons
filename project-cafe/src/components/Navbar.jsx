import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()
  return (
    <nav className='navbar'>
        <img className='navbar__logo' src="/img/logo.png" alt="logo" onClick={()=>navigate('/')}/>
        <div className='navbar__container'>
          {/* <div className='navbar__item' onClick={()=>navigate('/')}>Home</div> */}
          <div className='navbar__item' onClick={()=>navigate('/products')}>Products</div>
          <div className='navbar__item' onClick={()=>navigate('/cart')}>Cart</div>
        </div>
    </nav>
  )
}

export default Navbar