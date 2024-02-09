import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if(list) {
    return JSON.parse(localStorage.getItem('list'))
  }
  else {
    return []
  }
}

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState(getLocalStorage())
  const [isEditing, setIsEditing] = useState(false)
  const [editID,setEditID] = useState(null)
  const [alert, setAlert] = useState({show:false,msg:'',type:''})

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!name) {
      // display alert
      showAlert(true,'danger','please enter value')
    }
    else if(name && isEditing) {
      // deal with edit
      setList(list.map(item=>{
        if(item.id===editID) {
          return {...item, title: name}
        }
        return item
      }))
      setName('')
      setEditID('')
      setIsEditing(false)
      showAlert(true,'success','item edited')
    }
    else {
      // show alert
      const newItems = {id: new Date().getTime().toString(), title: name}
      showAlert(true,'success',`${newItems.title} added to the list`)
      setList([...list, newItems])
      setName('')
    }
  }

  const showAlert = (show=false,type='',msg='') => {
    setAlert({show,type,msg})
  } 

  const clearList = ()=>{
    showAlert(true,'danger','empty list')
    setList([])
  }
  
  const removeItem = (id, title)=>{
    showAlert(true,'danger',`${title} removed`)
    setList(list.filter(item=>item.id!==id))
  }

  const editItem = (id)=>{
    const specificItem = list.find(item=>item.id===id)
    setIsEditing(true)
    setEditID(id)
    setName(specificItem.title)
  }

  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(list))
  }, [list])

  return <section className='section-center'>
    <form onSubmit={handleSubmit} className='grocery-form'>
      {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
      <h3>grocery bud</h3>
      <div className='form-control'>
        <input type='text' className='grocery' placeholder='e.g. eggs' value={name} onChange={(e)=>setName(e.target.value)}/>
        <button type='submit' className='submit-btn'>
          {isEditing?'edit':'submit'}
        </button>
      </div>
    </form>
    <div className='grocery-container'>
      <List items={list} removeItem={removeItem} editItem={editItem}/>
      {list.length>0 && <button className='clear-btn' onClick={clearList}>clear items</button>}
    </div>
  </section>
}

export default App