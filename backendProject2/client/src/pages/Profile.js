import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../context'
import {toast} from 'react-toastify'

function Profile() {
    const {globalData} = useGlobalContext()
    const {id, name, surname} = globalData
    const navigate = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem('status') !== 'success') {
          navigate('/log-in')
          toast.warn('Please log in to your account')
        }
      }, [])

  return (
    <div>
        <h1>{name}, {surname}</h1>
        <br></br>
        <button onClick={()=>navigate(`/update/${id}`)}>Change your data</button>
        <br></br>
        <button onClick={()=>navigate(`/log-out`)}>Log out</button>
        <br></br>
        <br></br>
        <button onClick={()=>navigate(`/delete/${id}`)}>Delete account</button>
    </div>
  )
}

export default Profile