import React from 'react'
import { FaPhone } from 'react-icons/fa'

function Navbar() {
  return (
    <div className='mb-6 flex justify-between items-center h-20 bg-cyan-500 shadow shadow-black tracking-wider font-mono'>
        <h1 className='text-3xl font-bold mx-5 cursor-pointer'>Title</h1>
        <navbar className="flex flex-row">
            <div className='mx-5 text-lg hover:font-bold cursor-pointer hover:tracking-widest transition-all'>option 1</div>
            <div className='mx-5 text-lg hover:font-bold cursor-pointer hover:tracking-widest transition-all'>option 2</div>
            <div className='mx-5 text-lg hover:font-bold cursor-pointer hover:tracking-widest transition-all'>option 3</div>
            <div className='mx-5 text-lg hover:font-bold cursor-pointer hover:tracking-widest transition-all'>option 4</div>
            <div className='mx-5 text-lg hover:font-bold   hover:tracking-widest cursor-pointer transition-all'>option 5</div>
        </navbar>
        <div><FaPhone className='text-3xl mx-5 cursor-pointer'/></div>
    </div>
  )
}

export default Navbar