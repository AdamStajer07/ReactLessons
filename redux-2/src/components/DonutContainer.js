import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyDonut } from '../redux/donut/donutAction'

function DonutContainer() {
    const [number, setNumber] = useState(1)
    const numOfDonuts = useSelector(state => state.donut.numOfDonuts)
    const dispatch = useDispatch()
    return (
        <>
            <h2>Num of donuts - {numOfDonuts}</h2>
            <input type='number' value={number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick={() => dispatch(buyDonut(number))}>Buy {number} donut</button>
        </>
    )
}

export default DonutContainer   