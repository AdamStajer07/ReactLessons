import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='flex justify-center py-20 w-10/12 max-w-full mx-auto'>
      <div className='text-center capitalize'>
        <h1 className='text-3xl font-bold capitalize tracking-wide text-center mb-14 mt-4'>Opps! It's a dead end</h1>
        <Link to="/" className="uppercase tracking-wide text-lime-800 border-b-2 border-lime-800 text-center transition-all cursor-pointer text-md bg-lime-800 rounded py-2 px-3 text-white hover:text-lime-800 hover:bg-lime-200">back home</Link>
      </div>
    </section>
  )
}

export default Error