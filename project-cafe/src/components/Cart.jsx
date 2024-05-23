import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {clear} from '../redux/itemSlice'

function Cart() {
    const items = useSelector(state=>state.item.items)
    const totalValue = useSelector(state=>state.item.totalValue)
    const dispatch = useDispatch()
  return (
    <div className='cart'>
        {items.length > 0 ? items.map((item, index) => {
            const {name, value, count} = item
            return <div key={index} className='cart__container'>
                <h1 className='cart__title'>{name}</h1>
                <div className='cart__description'>
                  <p className='cart__value'>Value for one: {value/count}</p>
                  <p className='cart__count'>Count: {count}</p>
                  <p className='cart__sum-of-value'>Total value: {value}</p>
                </div>
            </div>
        }) : <p className='cart__empty'>Your cart is empty :(</p>}
        {totalValue != 0 && <div className='cart__right-div'>
          <button className='cart__btn' onClick={()=>dispatch(clear())}>Clear cart</button>
          <p className='cart__total-value'><b>Total Value: {totalValue}</b></p>
          </div>}
    </div>
  )
}

export default Cart