import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignUp() {
    const [data, setData] = useState({
        name: '',
        surname: '',
        mail: '',
        password: ''
    })
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    useEffect(()=>{
        setData({name, surname, mail, password})
    },[password])
    
    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:8800/users', data)
            navigate('/')
        }
        catch(err){
            console.log(err)
        }
    }
    
  return (
    <>
        <form>
            <input type='name' placeholder='name' name='name' value={name} onChange={e=>setName(e.target.value)} />
            <input type='surname' placeholder='surname' name='surname' value={surname} onChange={e=>setSurname(e.target.value)} />
            <input type='mail' placeholder='mail' name='mail' value={mail} onChange={e=>setMail(e.target.value)} />
            <input type='password' placeholder='password' name='password' value={password} onChange={e=>setPassword(e.target.value)} />
            <button onClick={handleClick}>Add</button>
        </form>
    </>
  )
}

export default SignUp