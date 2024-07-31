import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGlobalContext } from '../context'

function Delete() {
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        const deleteUser = async () => {
            try {
                await axios.delete(`http://localhost:8800/delete/${id}`)
                localStorage.clear()
                navigate('/')
            }
            catch(err) {
                console.log(err)
            }
        }
        deleteUser()
    }, [])
  return (
    <></>
  )
}

export default Delete