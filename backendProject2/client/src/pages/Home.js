import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'
import { useNavigate } from 'react-router-dom'
import Finance from '../components/Finance'
import { toast } from 'react-toastify'

function Home() {
  const {globalData, getSessionData} = useGlobalContext()
  const navigate = useNavigate()

  useEffect(()=>{
    getSessionData()
    if(localStorage.getItem('status') !== 'success') {
      navigate('/log-in')
      toast.warn('Please log in to your account')
    }
  }, [])
  
  return (
    <div>
      <Finance />
      <button onClick={()=>navigate('/profile')}>Your profile</button>
    </div>
  )
}

export default Home
