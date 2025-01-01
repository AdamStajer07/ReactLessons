import React from 'react'

function Item({name, idx}) {
  return (
    <>
        {`${idx}. ${name}`}
    </>
  )
}

export default Item