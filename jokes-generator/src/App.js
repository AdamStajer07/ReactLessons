import { useEffect, useState } from "react";
import './App.css'

function App() {
  const [jokesCount, setJokesCount] = useState(1)
  const [joke, setJoke] = useState('')
  
  useEffect(()=>{
    fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .then(data => setJoke(data.value))
  }, [jokesCount])
  
  return (
    <div className="box">
      <p className="joke">{joke}</p>
      <br/>
      <button className="btn" onClick={()=>setJokesCount(prevCount => prevCount+1)}>Losowy żart</button>
      <p className="stats-info">Przeczytałeś {jokesCount} żarty Chucka Norris'a</p>
    </div>
  ); 
}

export default App;
