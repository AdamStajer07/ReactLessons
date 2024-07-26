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
      <button onClick={()=>navigate('/log-out')}>Log-out</button>
      <br></br>
      <button onClick={()=>navigate(`/update/${globalData.id}`)}>Change data</button>
      <br></br>
      <br></br>
      <button onClick={()=>navigate(`/delete/${globalData.id}`)}>Delete account</button>
    </div>
  )
}

export default Home
