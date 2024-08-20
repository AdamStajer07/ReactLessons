import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'
import { useNavigate } from 'react-router-dom'
import Finance from '../components/Finance'
import { toast } from 'react-toastify'

function Home() {
  const {getSessionData} = useGlobalContext()
  const {status} = getSessionData()
  const navigate = useNavigate()

  useEffect(()=>{
    getSessionData()
    if(status !== 'success') {
      navigate('/log-in')
      toast.warn('Please log in to your account')
    }
  }, [])
  
  return (
    <div>
      {/* <Finance /> */}
      <div className='text-center'>
        <button onClick={()=>navigate('/profile')} className='btn'>Your profile</button>
      </div>
    </div>
  )
}

export default Home
