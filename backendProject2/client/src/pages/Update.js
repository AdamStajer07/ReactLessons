import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Update() {
    const {getSessionData, setSessionData} = useGlobalContext()
    const {status, id, name, surname, mail, password} = getSessionData()
    const [data, setData] = useState({status, id: id, name: name, surname: surname, mail: mail, password: password})
    const navigate = useNavigate()

    const handleChange = e => {
        setData(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleClick = async e => {
        e.preventDefault()
        setSessionData(data)
        try {
            await axios.put(`http://localhost:8800/update/${id}`, getSessionData())
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
            <input type='text' name='name' value={data.name} onChange={handleChange} />
            <input type='text' name='surname' value={data.surname} onChange={handleChange} />
            <input type='text' name='password' value={data.password} onChange={handleChange} />
          <button onClick={handleClick}>Update</button>
        </form>
    </div>
  )
}

export default Update