import { useState } from 'react'
import './App.css';

function App() {
  const [newItem, setNewItem] = useState('')
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault()

    setTodos((currentTodos)=>[...currentTodos, {id: crypto.randomUUID(), title: newItem, completed: false}])

    setNewItem('')
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
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
      <h1>Todo list</h1>
      <ul>
        {todos.length == 0 && 'No todos'}
        {todos.map(todo=>{
          return <li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed} onChange={e=>toggleTodo(todo.id, e.target.checked)}/>
              {todo.title}
            </label>
            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
          </li>
        })}
      </ul>
    </>
  );
}

export default App;
