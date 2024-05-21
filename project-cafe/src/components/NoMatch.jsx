import React from 'react'
import { useNavigate } from 'react-router-dom'

function NoMatch() {
    const navigate = useNavigate()
  return (
    <div className='no-match'>
        <h1 className='no-match__title'>Page not found.</h1>
        <button className='no-match__btn' onClick={()=>navigate('/')}>Back to main side</button>
    </div>
  )
}

export default NoMatch