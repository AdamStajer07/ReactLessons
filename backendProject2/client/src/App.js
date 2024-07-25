import { useEffect, useState } from "react";
import axios from 'axios'
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

function App() {
  const [users, setUsers] = useState([])

  useEffect(()=>{
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get('http://localhost:8800/users')
        console.log(res)
        setUsers(res.data)
      }
      catch(err) {
        console.log(err)
      }
    }
    fetchAllUsers()
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/sign-up" element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;