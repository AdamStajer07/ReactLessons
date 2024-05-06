import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    value: 0
}

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        ordered: (state, action) => {
            state.items.push(action.payload.name)
            state.value += (action.payload.value * action.payload.count)
        }
    }
})

export default itemSlice.reducer
export const { ordered } = itemSlice.actions