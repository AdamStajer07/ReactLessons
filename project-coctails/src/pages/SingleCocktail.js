import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const {id} = useParams()
  const [loading, setLoading] = React.useState(false)
  const [coctail, setCoctail] = React.useState(null)

  React.useEffect(()=>{
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
    return <h2 className='section-title'>no cocktail to display</h2>
  }
  
  const {name,image,category,info,glass,instructions,ingredients} = coctail
  return (
    <section className='section cocktail-section'>
      <Link to='/' className="btn btn-primary ">Back home</Link>
      <h2 className='section-title'>{name}</h2>
      <div className='drink'>
        <img src={image} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name: </span>
            {name}
          </p>
          <p>
            <span className='drink-data'>category: </span>
            {category}
          </p>
          <p>
            <span className='drink-data'>info: </span>
            {info}
          </p>
          <p>
            <span className='drink-data'>glass: </span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>instructions: </span>
            {instructions}
          </p>
          <p>
            <span className='drink-data'>ingredients: </span>
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
