import React, { useEffect, useState } from 'react'
import 'axios'
import axios from 'axios'

export const Books = () => {
    const [books, setBooks] = useState([])

    useEffect(()=>{
        const fetchAllBooks = async ()=> {
            try {
                const res = await axios.get('http://localhost:8800/books')
                setBooks(res.data)                
            }
            catch(err) {
                console.log(err)
            }
        }
        fetchAllBooks()
    },[])
    
  return (
    <div>
        <h1>Books shop</h1>
        <div className="books">
            {books.map(el => { 
                const {id, title, desc, cover} = el
                return <div key={id}>
                    <p>{id}</p>
                    <p>{title}</p>
                    <p>{desc}</p>
                </div>
            })}
        </div>
    </div>
  )
}
