import React, { useContext, useEffect, useState } from 'react'

const AppContext = React.createContext()

const AppProvider = ({children}) => {

    const getSessionData = () => {
      return {
        status: localStorage.getItem('status'),
        id: localStorage.getItem('id'),
        name: localStorage.getItem('name'),
        surname: localStorage.getItem('surname'),
        mail: localStorage.getItem('mail'),
        password:localStorage.getItem('password')
      }
    }
    const setSessionData = (obj) => {
      localStorage.setItem('status', obj.status)
      localStorage.setItem('id', obj.id)
      localStorage.setItem('name', obj.name)
      localStorage.setItem('surname', obj.surname)
      localStorage.setItem('mail', obj.mail)
      localStorage.setItem('password', obj.password)
    }
  return (
    <AppContext.Provider value={{getSessionData, setSessionData}}>
        {children}
    </AppContext.Provider>
  )
}
const useGlobalContext = () => {
  return useContext(AppContext)
}
export {AppProvider, useGlobalContext}