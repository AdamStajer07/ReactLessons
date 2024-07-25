import React, { useContext, useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [id, setId] = useState(0)
  return (
    <AppContext.Provider value={{id, setId}}>
        {children}
    </AppContext.Provider>
  )
}
const useGlobalContext = () => {
  return useContext(AppContext)
}
export {AppProvider, useGlobalContext}