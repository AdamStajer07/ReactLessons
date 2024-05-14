import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {
    const items = useSelector(state=>state.item.items)
    const totalValue = useSelector(state=>state.item.totalValue)
  return (
    <>
        {items.length > 0 ? items.map((item, index) => {
            const {name, value, count} = item
            return <div key={index}>
                <h1>{name}</h1>
                <p>Value for one: {value/count}</p>
                <p>Count: {count}</p>
                <p>Total value: <b>{value}</b></p>
            </div>
        }) : <p>Your cart is empty</p>}
        {totalValue != 0 && <div>
          <hr />  
          <p><b>Total Value: {totalValue}</b></p>
          </div>}
    </>
  )
}

export default Cart