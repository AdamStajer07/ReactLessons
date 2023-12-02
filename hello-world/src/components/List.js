import React from 'react'
import Person from './Person'

function List() {
    const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 47,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 21,
            skill: 'Vue'
        }
    ]
    const personList = persons.map(el => <Person key={el.id} el={el}/>)
    const nameList = names.map((el, i) => <h2 key={i}>{el}</h2>)
  return <div>{nameList}</div>
}

export default List