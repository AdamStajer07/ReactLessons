import React from 'react'
import { useSelector } from 'react-redux'
import { useStoreItems } from '../app/store'

function Home() {
  const items = useSelector(state=>state.item.items)
  return (
    <>
      {items}
    </>
  )
}

export default Home