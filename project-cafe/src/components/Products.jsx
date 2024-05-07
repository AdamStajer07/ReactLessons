import React, { useState } from 'react'
import CheckProduct from './CheckProduct'

function Products() {

  return (
    <>
      <CheckProduct name={'cake'} value={12}/>
      <CheckProduct name={'icecream'} value={6}/>
      <CheckProduct name={'donut'} value={4}/>
    </>
  )
}

export default Products