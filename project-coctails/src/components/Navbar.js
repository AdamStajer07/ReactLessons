import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <nav className='bg-white h-20 flex items-center border-b-2 border-lime-800 shadow-md'>
      <div className='flex justify-between items-center w-10/12 max-w-full my-0 mx-auto'>
        <Link to="/">
          <img src={logo} alt={logo} className='w-48'/>
        </Link>
        <ul className='flex items-center'>
          <li>
            <Link to="/" className="capitalize font-bold mr-2 tracking-wide text-lg py-1 px-2 transition-all hover:text-lime-800">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="capitalize font-bold mr-2 tracking-wide text-lg py-1 px-2 transition-all hover:text-lime-800">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
