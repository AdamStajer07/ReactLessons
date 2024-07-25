import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context'
import axios from 'axios'

function Home() {
    const [users, setUsers] = useState([])

  useEffect(()=>{
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get('http://localhost:8800/users')
        console.log(res)
        setUsers(res.data)
      }
      catch(err) {
        console.log(err)
      }
    }
    fetchAllUsers()
  }, [])
  return (
    <div>
        {users.map(user => {
            const {id, name, surname, mail, password} = user
            return <div key={id}>{name}</div>
        })}
    </div>
  )
}

export default Home