import React, { useState } from 'react'
import CheckProduct from './CheckProduct'

function Products() {

  return (
    <div className='products'>
      <CheckProduct name={'cake'} value={12}/>
      <CheckProduct name={'icecream'} value={6}/>
      <CheckProduct name={'donut'} value={4}/>
    </div>
  )
}

export default Products