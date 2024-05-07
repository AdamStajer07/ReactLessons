import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    totalValue: 0
}

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        ordered: (state, action) => {
            // if(state.items.includes(action.payload.name)) {
            //     const newItems = state.items.filter(el => el.name != action.payload.name)
            //     state.items = [...newItems, {name: action.payload.name, value:  + (action.payload.value * action.payload.count), count:}]
            // }
            state.items.push({ name: action.payload.name, value: action.payload.value * action.payload.count, count: action.payload.count })
            state.totalValue += (action.payload.value * action.payload.count)
        }
    }
})

export default itemSlice.reducer
export const { ordered } = itemSlice.actions