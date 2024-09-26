import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext()
  const searchValue = useRef('')

  useEffect(() => {
    searchValue.current.focus()
  }, [])
  
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  
  return (
    <section className='py-20 w-10/12 max-w-full mx-auto mt-4'>
      <form className='w-2/4 max-w-full bg-white py-8 px-10 mx-auto capitalize rounded shadow-md' onSubmit={handleSubmit}>
        <div className='flex justify-center items-center'>
          <label htmlFor='name' className='mx-3 font-bold tracking-wide text-lime-800 block'>search your favorite cocktail</label>
          <input type='text' id='name' className='mx-3 width-full border-0 bg-slate-100 rounded p-2 text-md' ref={searchValue} onChange={searchCocktail}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm
