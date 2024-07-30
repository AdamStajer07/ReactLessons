import React, { useContext, useEffect, useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [globalData, setGlobalData] = useState({
      status: 'fail',
      id: 0,
      name: '',
      surname: '',
      mail: '',
      password: ''
    })
    const getSessionData = () => {
      setGlobalData({
        status: localStorage.getItem('status'),
        id: localStorage.getItem('id'),
        name: localStorage.getItem('name'),
        surname: localStorage.getItem('surname'),
        mail: localStorage.getItem('mail'),
        password:localStorage.getItem('password')
      })
    }
  return (
    <AppContext.Provider value={{globalData, setGlobalData, getSessionData}}>
        {children}
    </AppContext.Provider>
  )
}
const useGlobalContext = () => {
  return useContext(AppContext)
}
export {AppProvider, useGlobalContext}