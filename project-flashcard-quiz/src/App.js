import { useEffect, useRef, useState } from "react";
import FlashcardList from "./FlashcardList";
import './App.css';
import axios from 'axios'

function App() {
  const [flashcards, setFlashcards] = useState([])
  const [categories, setCategories] = useState([])
  
  const categoryEl = useRef()
  const amountEl = useRef()

  useEffect(()=>{
    axios
      .get('https://opentdb.com/api_category.php')
      .then(res => {
        setCategories(res.data.trivia_categories)
      })
  }, [])

  useEffect(()=>{

  }, [])

  function decodeString(str) {
    const textArea = document.createElement('textarea')
    textArea.innerHTML = str
    return textArea.value
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
    .get('https://opentdb.com/api.php?', {
      params: {
        amount: amountEl.current.value,
        category: categoryEl.current.value
      }
    })
    .then(res => {
      setFlashcards(res.data.results.map((questionItem, index) => {
        const answer = questionItem.correct_answer
        const options = [...questionItem.incorrect_answers.map(a=>decodeString(a)), answer]
        return {
          id: `${index}-${Date.now()}`,
          question: decodeString(questionItem.question),
          answer: answer,
          options: options.sort(() => Math.random() - .5)
        }
      }))
    })
  }
  
  return (
    <>
      <form className="header" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" ref={categoryEl}>
            {categories.map((item, index)=>{
              return (
                <option key={index} value={item.id}>{item.name}</option> 
              )
            })}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="amount">Number of quesions</label>
          <input type="number" id="amount" min="1" step="1" defaultValue={10} ref={amountEl} />
        </div>
        <div className="form-group">
          <button className="btn">Generate</button>
        </div>

      </form>
      <div className="container">
        <FlashcardList flashcards={flashcards} />
      </div>
    </>
  );
}

// const SAMPLE_FLASHCARDS = [
//   {
//     id: 1,
//     question: 'What is 2 + 2?',
//     answer: '4',
//     options: [
//       '2',
//       '3',
//       '4',
//       '5'
//     ]
//   }
// ]

export default App;
