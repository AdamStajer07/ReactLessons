import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const {id} = useParams()
  const [loading, setLoading] = useState(false)
  const [coctail, setCoctail] = useState(null)

  useEffect(()=>{
    setLoading(true)
    async function getCoctail() {
      try {
        const respone = await fetch(`${url}${id}`) 
        const data = await respone.json()
        if(data.drinks) {
          const {strDrink:name,strDrinkThumb:image,strAlcoholic:info,strCategory:category,strGlass:glass,strInstruction:instructions,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5} = data.drinks[0]
          const ingredients = [strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5]
          const newCoctail = {name,image,info,category,glass,instructions,ingredients}
          setCoctail(newCoctail)
        }
        else {
          setCoctail(null)
        }
        setLoading(false)
      }
      catch (err) {
        alert(err)
        setLoading(false)
      }
    }
    getCoctail()
  }, [id])
  
  if(loading) {
    return <Loading/>
  }
  if(!coctail) {
    return <h2 className='text-3xl font-bold capitalize tracking-wide text-center mb-14 mt-4'>no cocktail to display</h2>
  }
  
  const {name,image,category,info,glass,instructions,ingredients} = coctail
  return (
    <section className='py-20 w-10/12 max-w-full mx-auto text-center'>
      <Link to='/' className="uppercase tracking-wide text-lime-800 border-b-2 border-lime-800 text-center transition-all cursor-pointer text-md bg-lime-800 rounded py-2 px-3 text-white hover:text-lime-800 hover:bg-lime-200">Back home</Link>
      <h2 className='text-3xl font-bold capitalize tracking-wide text-center mb-14 mt-4'>{name}</h2>
      <div className='w-10/12 max-w-full mx-auto md:grid md:grid-cols-5 md:gap-12 md:items-center'>
        <img src={image} alt={image} className='rounded md:col-span-2' />
        <div className='pt-8 text-left ml-2 md:col-span-3'>
          <p className='font-bold capitalize leading-7'>
            <span className='bg-lime-200 py-1 px-2 mr-2 rounded text-lime-800'>name: </span>
            {name}
          </p>
          <p className='font-bold capitalize leading-7'>
            <span className='bg-lime-200 py-1 px-2 mr-2 rounded text-lime-800'>category: </span>
            {category}
          </p>
          <p className='font-bold capitalize leading-7'>
            <span className='bg-lime-200 py-1 px-2 mr-2 rounded text-lime-800'>info: </span>
            {info}
          </p>
          <p className='font-bold capitalize leading-7'>
            <span className='bg-lime-200 py-1 px-2 mr-2 rounded text-lime-800'>glass: </span>
            {glass}
          </p>
          <p className='font-bold capitalize leading-7'>
            <span className='bg-lime-200 py-1 px-2 mr-2 rounded text-lime-800'>instructions: </span>
            {instructions}
          </p>
          <p className='font-bold capitalize leading-7'>
            <span className='bg-lime-200 py-1 px-2 mr-2 rounded text-lime-800'>ingredients: </span>
            {ingredients.map((item,index)=>{
              return item ? <span key={index}>{item}</span> : null
            })}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingleCocktail
