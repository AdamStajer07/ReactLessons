import React from 'react'
import TodoItem from './TodoItem'

function TodosList({todos, toggleTodo, deleteTodo}) {
  return (
    <>
        <ul>
            {todos.length == 0 && 'No todos'}
            {todos.map(todo=>{
              return <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
            })}
        </ul>
    </>
  )
}

export default TodosList