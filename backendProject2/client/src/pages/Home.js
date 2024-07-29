import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'
import { useNavigate } from 'react-router-dom'

function Home() {
  const {globalData} = useGlobalContext()
  const navigate = useNavigate()

  useEffect(()=>{
    if(localStorage.getItem('status') !== 'success') {
      navigate('/log-in')
    }
  }, [])

  const GreetUser = () => {
    const {name, surname} = globalData
    return <h1>Hello {name+' '+surname}</h1>
  }
  
  return (
    <div>
      <GreetUser />
      <button onClick={()=>navigate('/profile')}>Your profile</button>
    </div>
  )
}

export default Home
