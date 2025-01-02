import React from 'react'

function Item({name, num}) {
  return (
    <>
        <b>{num}. </b>{name}
    </>
  )
}

export default Item