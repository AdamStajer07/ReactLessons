import React from 'react'

function TodoItem({completed, id, title, toggleTodo, deleteTodo}) {
  return (
    <>
        <li key={id}>
            <label>
              <input type="checkbox" checked={completed} 
              onChange= {e=>toggleTodo(id, e.target.checked)}
              />
              {title}
            </label>
            <button 
            onClick={()=>deleteTodo(id)}
            >Delete</button>
        </li>
    </>
  )
}

export default TodoItem