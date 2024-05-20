import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {
    const items = useSelector(state=>state.item.items)
    const totalValue = useSelector(state=>state.item.totalValue)
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
        {totalValue != 0 && <div>
          {/* <hr />   */}
          <p className='cart__total-value'><b>Total Value: {totalValue}</b></p>
          </div>}
    </div>
  )
}

export default Cart