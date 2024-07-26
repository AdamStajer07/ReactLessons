import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../context'

function LogOut() {
    const {setGlobalData} = useGlobalContext()
    const navigate = useNavigate()
    useEffect(() => {
        setGlobalData({})
        localStorage.clear()
        navigate('/')
    }, [])
  return (
    <>
    </>
  )
}

export default LogOut