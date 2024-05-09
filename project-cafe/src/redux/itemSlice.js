import { createSlice } from '@reduxjs/toolkit'
import { useState } from 'react'

const initialState = {
    items: [],
    totalValue: 0
}

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        ordered: (state, action) => {
            const { name, value, count } = action.payload
            let bool = true

            state.totalValue += (value * count)
            const newState = state.items.map(el => {
                const { name: elName, value: elValue, count: elCount } = el
                if (elName == name) {
                    console.log(elCount)
                    console.log(count)
                    bool = false
                    const newCount = (elCount + parseInt(count))
                    const newValue = value * newCount
                    const newElement = { name: elName, value: newValue, count: newCount }
                    return newElement
                }
                return el
            })
            if (bool) {
                state.items.push({ name: name, value: value * count, count: count })
            }
            else {
                state.items = newState
            }
        }
    }
})

export default itemSlice.reducer
export const { ordered } = itemSlice.actions