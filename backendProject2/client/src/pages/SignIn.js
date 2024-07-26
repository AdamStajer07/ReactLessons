import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignIn() {
    const [data, setData] = useState({
        name: '',
        surname: '',
        mail: '',
        password: ''
    })
    const navigate = useNavigate()

    const handleChange = e => {
        e.preventDefault()
        setData(prev=>({...prev, [e.target.name]: e.target.value}))
    }
    
    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:8800/signIn', data)
            navigate('/')
        }
        catch(err){
            console.log(err)
        }
    }
    
    const LogIn = e => {
        e.preventDefault()
        navigate('/log-in')
    }

  return (
    <>
        <form>
            <input type='name' placeholder='name' name='name' onChange={handleChange} />
            <input type='surname' placeholder='surname' name='surname'  onChange={handleChange}  />
            <input type='mail' placeholder='mail' name='mail'  onChange={handleChange}  />
            <input type='password' placeholder='password' name='password'  onChange={handleChange}  />
            <button onClick={handleClick}>Add</button>
            <div>
                <button onClick={LogIn}>Log-in</button>
            </div>
        </form>
    </>
  )
}

export default SignIn