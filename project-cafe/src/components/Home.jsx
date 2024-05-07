import React from 'react'
import { useSelector } from 'react-redux'

function Home() {
  const items = useSelector(state=>state.item.items)
  return (
    <>
      {items.map(el => {
        const {name, value} = el
        return <p>{name}: {value}</p>
      })}
    </>
  )
}

export default Home