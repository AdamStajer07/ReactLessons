import React from 'react'
import { useSelector } from 'react-redux'

function Cart() {
    const items = useSelector(state=>state.item.items)
    const totalValue = useSelector(state=>state.item.totalValue)
  return (
    <>
        {items && items.map((item, index) => {
            const {name, value, count} = item
            return <div key={index}>
                <h1>{name}</h1>
                <p>Value for one: {value/count}</p>
                <p>Count: {count}</p>
                <p>Total value: <b>{value}</b></p>
            </div>
        })}
        <hr />
        {totalValue != 0 && <p><b>Total Value: {totalValue}</b></p>}
    </>
  )
}

export default Cart