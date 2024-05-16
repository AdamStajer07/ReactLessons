import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ordered } from '../redux/itemSlice'
import { useNavigate, useParams } from 'react-router-dom'

function SingleProduct() {
    const navigate = useNavigate() 
    const dispatch = useDispatch()
    const {itemName, itemValue} = useParams()
    
    const [count, setCount] = useState(1)
  
    const eventHandling = () => {
      dispatch(ordered({name: itemName, value: itemValue, count: count}))
      navigate('/cart')
    }
    
    return (
      <div className='single-product'>
        <img className='single-product__img' src={`/img/${itemName}.jpg`} alt="" />
        <div className="single-product__content-container">
          <h1 className='single-product__title'>{itemName}</h1>
          <p className="single-product__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ducimus corrupti enim, numquam facilis modi laboriosam quo magnam hic ipsa commodi eaque neque soluta reiciendis, debitis labore magni consequuntur pariatur voluptates eveniet dolorum repellat quidem nihil ipsum. Id porro sequi tempora deserunt sint suscipit molestiae magni, iure autem inventore similique?</p>
          <div className="single-product__order-container">
            <p className='single-product__item-value'>{itemValue}zł</p>
            <input type="number" value={count} onChange={(e)=>setCount(e.target.value)} className='single-product__count-input'/>
            <button onClick={eventHandling} className='single-product__btn'>Dodaj</button>
          </div>
        </div>
      </div>
    )
}

export default SingleProduct