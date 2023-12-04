import React,{ useState } from 'react'

function NewTodoForm({onSubmit}) {
    const [newItem, setNewItem] = useState('')
    function handleSubmit(e) {
        e.preventDefault()
        if(newItem==="") return
    
        onSubmit(newItem)
    
        setNewItem('')
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <div>
              <label>New Item</label>
              <input type="text" id="item" value={newItem} onChange={(e)=>setNewItem(e.currentTarget.value)} />
            </div>
            <button>Add</button>
        </form>
    </>
  )
}

export default NewTodoForm