import { configureStore } from '@reduxjs/toolkit'
import itemReducer from '../redux/itemSlice'
import { createContext, useContext, useState } from 'react'

const store = configureStore({
    reducer: {
        item: itemReducer,
    }
})

// const StoreContext = createContext(null)

// export const StoreItemsProvider = ({ children }) => {
//     const [items, setItems] = useState([])

//     const addItem = item => {
//         setItems(...items, item)
//     }
//     const deleteItem = item => {
//         const newItems = items.filter(el => el != item)
//         setItems(newItems)
//     }
//     return <StoreContext.Provider value={{ items, addItem, deleteItem }}>{children}</StoreContext.Provider>
// }
// export const useStoreItems = () => {
//     return useContext(StoreContext)
// }

export default store