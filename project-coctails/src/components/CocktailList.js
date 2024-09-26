import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const {coctails, loading} = useGlobalContext()

  if(loading) {
    return <Loading/>
  }
  if(coctails.length < 1) {
    return (
      <h2 className='text-3xl font-bold capitalize tracking-wide text-center mb-14 mt-4'>
        no coctails matched your search criteria
      </h2>
    )
  }
  return (
    <section className='py-20 w-10/12 max-w-full mx-auto'>
      <h2 className='text-3xl font-bold capitalize tracking-wide text-center mb-14 mt-4'>
        coctails
      </h2>
      <div className='w-10/12 max-w-full mx-auto grid gap-8 sm:grid-cols-3'>
        {coctails.map((item,index)=>{
          return <Cocktail key={item.id} {...item}/>
        })}
      </div>
    </section>
  )
}

export default CocktailList
