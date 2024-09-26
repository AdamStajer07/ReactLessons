import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../context'

function LogOut() {
    const navigate = useNavigate()
    useEffect(() => {
        localStorage.clear()
        navigate('/')
    }, [])
  return (
    <>
    </>
  )
}

export default LogOut