import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({image,name,info,glass, id}) => {
  return (
    <article className='bg-white mb-8 shadow shadow-sm transition-all grid grid-rows-1 rounded hover:shadow-md'>
      <div>
        <img src={image} alt={name} className='h-80 object-cover rounded-t'/>
      </div>
      <div className='p-6'>
        <h3 className='mb-1 text-xl'>{name}</h3>
        <h4 className='mb-1'>{glass}</h4>
        <p className='mb-2 text-gray-800'>{info}</p>
        <Link to={`/cocktail/${id}`} className="uppercase tracking-wide text-lime-800 border-b-2 border-lime-800 text-center transition-all cursor-pointer text-md bg-lime-800 rounded py-1 px-2 text-white hover:text-lime-800 hover:bg-lime-200">details</Link>
      </div>
    </article>
  )
}

export default Cocktail