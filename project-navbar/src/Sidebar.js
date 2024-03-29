import React from 'react'
import { links, social } from './data'

function Sidebar() {
  return (
    <>
        <h4>Sidebar</h4>
        <div className='links-container show-container'>
            <ul className='links'>
              {links.map(el=>{
                const {id, url, text} = el
                return <li key={id}><a href={url}>{text}</a></li>
              })}
            </ul>
        </div>
    </>
  )
}

export default Sidebar