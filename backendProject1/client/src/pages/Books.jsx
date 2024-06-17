import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

export const Books = () => {
    const [books, setBooks] = useState([])
    const navigate = useNavigate()

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
    
    const handleDelete = async id => {
        try {
            await axios.delete('http://localhost:8800/books/'+id)
            window.location.reload()
        }
        catch(err) {
            console.log(err)
        }
    }
    
  return (
    <>
        <h1 className='title'>Books shop</h1>
        <div className="books">
            {books.map(el => { 
                const {id, title, desc, price, cover} = el
                return <div key={id} className='book'>
                    <img src={`../${cover}.jpg`} alt={cover} />
                    <h1 className='book__title'>{title}</h1>
                    <p className='book__desc'>{desc}</p>
                    <p className='book__price'>{price}zł</p>
                    <div>
                        <button className="update"><Link to={`/update/${id}`}>Update</Link></button>
                        <button className="delete" onClick={()=>handleDelete(id)}>Delete</button>
                    </div>
                </div>
            })}
        </div>
        <button onClick={()=>navigate('/add')}>Add books</button>
    </>
  )
}
