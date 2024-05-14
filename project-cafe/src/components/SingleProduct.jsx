import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ordered } from '../redux/itemSlice'
import { useParams } from 'react-router-dom'

function SingleProduct() {
    const dispatch = useDispatch()
    const {itemName, itemValue} = useParams()
    
    const [count, setCount] = useState(1)
  
    const eventHandling = () => {
      dispatch(ordered({name: itemName, value: itemValue, count: count}))
    }
    
    return (
      <div className='single-product'>
        <h1 className='single-product__title'>{itemName}</h1>

        <p className='single-product__item-value'>{itemValue}zł</p>
        <input type="number" value={count} onChange={(e)=>setCount(e.target.value)} className='single-product__count-input'/>
        <button onClick={eventHandling} className='single-product__btn'>Dodaj</button>
      </div>
    )
}

export default SingleProduct