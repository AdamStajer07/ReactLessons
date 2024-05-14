import React from 'react'
import { useSelector } from 'react-redux'
import HomeSingleProduct from './HomeSingleProduct'

function Home() {
  const items = useSelector(state=>state.item.items)
  return (
    <div className='box'>
      <HomeSingleProduct name={'Cake'} value={12} img={'img/cake.jpg'}/>
      <HomeSingleProduct name={'Ice-cream'} value={6} img={'img/icecream.jpg'}/>
      <HomeSingleProduct name={'Donut'} value={4} img={'img/donut.jpg'} />
    </div>
  )
}

export default Home