import React from 'react'
import { useGlobalContext } from '../context'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Update() {
    const {globalData, setGlobalData} = useGlobalContext()
    const {id, name, surname, mail, password} = globalData
    const navigate = useNavigate()

    const handleChange = e => {
        setGlobalData(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = async e => {
        e.preventDefault()
        localStorage.setItem('name', name)
        localStorage.setItem('surname', surname)
        localStorage.setItem('mail', mail)
        localStorage.setItem('password', password)
        try {
            await axios.put(`http://localhost:8800/update/${id}`, globalData)
            toast.success('Zmieniono dane', {position: toast.POSITION.TOP_CENTER, autoClose: 500})
            setTimeout(() => {
              navigate('/')
            }, 200);
        }
        catch(err) {
            console.log(err)
        }
    }
    
  return (
    <div>
        <form>
            <input type='text' name='name' value={name} onChange={handleChange} />
            <input type='text' name='surname' value={surname} onChange={handleChange} />
            <input type='text' name='password' value={password} onChange={handleChange} />
          <button onClick={handleClick}>Update</button>
        </form>
    </div>
  )
}

export default Update