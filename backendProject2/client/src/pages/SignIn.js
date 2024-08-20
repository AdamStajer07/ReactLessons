import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'

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
        const regEx = new RegExp('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$')
        if(!regEx.test(data.password)) {
            toast.error('Your password must have min 8 characters length, and at least 1 small letter, 1 big letter and 1 number', {position: toast.POSITION.TOP_CENTER, autoClose: 1200})
            setData({
                name: data.name,
                surname: data.surname,
                mail: data.mail,
                password: ''
            })
        }
        else {
            try {
                const res = await axios.post('http://localhost:8800/signIn', data)
                if(res.data.status == 'duplicate') {
                    toast.error('This email already exist. Please log in or write different email', {position: toast.POSITION.TOP_CENTER, autoClose: 500})
                    setData({
                        name: '',
                        surname: '',
                        mail: '',
                        password: ''
                    })
                }
                else {
                    navigate('/')
                }
            }
            catch(err){
                console.log(err)
            }
        }
    }
    
    const LogIn = e => {
        e.preventDefault()
        navigate('/log-in')
    }

  return (
    <>
        <form>
            <input type='name' placeholder='name' name='name' value={data.name} onChange={handleChange} />
            <input type='surname' placeholder='surname' name='surname' value={data.surname}  onChange={handleChange}  />
            <input type='mail' placeholder='mail' name='mail' value={data.mail}  onChange={handleChange}  />
            <input type='password' placeholder='password' name='password' value={data.password}  onChange={handleChange}  />
            <button onClick={handleClick}>Add</button>
            <div>
                <button onClick={LogIn}>Log-in</button>
            </div>
        </form>
    </>
  )
}

export default SignIn