import React from 'react'
import { useSelector } from 'react-redux'
import HomeSingleProduct from './HomeSingleProduct'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <div className='home'>
      <div className="home__container">
        <div>
          <h1 className="home__title">Sweet Café</h1>
          <p className="home__description">Our café offers a delightful selection of ice cream, cakes, and donuts. Enjoy freshly baked pastries and rich, creamy desserts in a warm, inviting atmosphere. Perfect for sweet cravings, our café is a haven for dessert lovers seeking quality treats and a relaxing spot to unwind.</p>
        </div>
        <img src="./img/cake.jpg" alt="" className="home__description-img" />
      </div>
      <div className="home__product-container">
        <h1 className='home__title'>Our products</h1>
        <button className="home__btn" onClick={()=>navigate('/products')}>See our products</button>
      </div>
    </div>
  )
}

export default Home