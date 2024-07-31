import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import { useGlobalContext } from '../context'

function LogIn() {
    const {setSessionData} = useGlobalContext()
    const [data, setData] = useState({
        mail: '',
        password: ''
    })
    const navigate = useNavigate()

    const handleChange = e => {
        setData(prev => ({...prev, [e.target.name]: e.target.value}))
    }
 
    const handleClick = async e => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:8800/login', data)
            if(res.data.status === 'fail') {
                toast.error('Wrong log-in data', {position: toast.POSITION.TOP_CENTER, autoClose: 500})
                setData({mail: '', password: ''})
            }
            else {
                
                setSessionData(res.data)
                navigate('/')
            }
        }
        catch(err) {
            console.log(err)
        }
    }
    
    const signIn = e => {
        e.preventDefault()
        navigate('/sign-in')
    }
    
  return (
    <div>
        <form>
            <input type='mail' placeholder='mail' name='mail' value={data.mail} onChange={handleChange} />
            <input type='password' placeholder='password' name='password' value={data.password} onChange={handleChange} />
            <button onClick={handleClick}>Log in</button>
            <div>
                <button onClick={signIn}>SignIn</button>
            </div>
        </form>
    </div>
  )
}

export default LogIn