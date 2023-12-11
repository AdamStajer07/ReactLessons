import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Effect1() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)
    
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(res=>{
            setPost(res.data)
        })
        .catch(err=>console.log(err))   
    }, [idFromButtonClick])

    const handleClick = () => {
        setIdFromButtonClick(id)
    }
  return (
    <>
        <input type='text' value={id} onChange={(e)=>setId(e.target.value)}/>
        <button type='button' onClick={handleClick}>Fetch post</button>
        <div>{post.title}</div>
        {/* <ul>
            {posts.map(el=> <li key={el.id}>{el.title}</li>)}
        </ul> */}
        
    </>
  )
}

export default Effect1