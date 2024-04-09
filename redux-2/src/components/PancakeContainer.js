import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyPancake } from '../redux'
import { sellPancake } from '../redux'

function PancakeContainer() {
    const [number, setNumber] = useState(1)
    const [sellNumber, setSellNumber] = useState(1)
    const numOfPancakes = useSelector(state => state.pancake.numOfPancakes)
    const dispatch = useDispatch()
    return (
        <>
            <h2>Num of Pancakes - {numOfPancakes}</h2>
            <input type='number' value={number} onChange={(e)=>setNumber(e.target.value)}/>
            <button onClick={() => dispatch(buyPancake(number))}>Buy Pancake</button>
            <input type='number' value={sellNumber} onChange={(e)=>setSellNumber(e.target.value)}/>
            <button onClick={() => dispatch(sellPancake(sellNumber))}>Sell Pancake</button>
        </>
    )
}

export default PancakeContainer