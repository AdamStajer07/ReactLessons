import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../context'
import {toast} from 'react-toastify'

function Profile() {
    const {getSessionData} = useGlobalContext()
    const {id, name, surname} = getSessionData()
    const navigate = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem('status') !== 'success') {
          navigate('/log-in')
          toast.warn('Please log in to your account')
        }
      }, [])

  return (
    <div className='m-1'>
        <h1 className='flex justify-center text-5xl font-bold capitalize'>{name}, {surname}</h1>
        <br></br>
        <div className='flex justify-center'>
          <button onClick={()=>navigate(`/update/${id}`)} className='btn'>Change your data</button>
          <br></br>
          <button onClick={()=>navigate(`/log-out`)} className='btn'>Log out</button>
          <br></br>
          <br></br>
          <button onClick={()=>navigate(`/delete/${id}`)} className='btn'>Delete account</button>
        </div>
    </div>
  )
}

export default Profile